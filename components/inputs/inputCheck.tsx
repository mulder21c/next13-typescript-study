import { useState } from "react";
type Labels = {};
const labels = ["check1", "check2", "check3"];

export const Checks: React.FC = () => {
  const [checkList, setCheckList] = useState<boolean[]>([false, false, false]);
  const handleCheckClick = (idx: number) => {
    setCheckList((checks) => checks.map((c, i) => (i === idx ? !c : c)));
  };
  const isAllChecked = checkList.every((x) => x);

  return (
    <div>
      <ul>
        {labels.map((label, idx) => (
          <li key={idx}>
            <label>
              <input
                type="checkbox"
                checked={checkList[idx]}
                onClick={() => handleCheckClick(idx)}
              />
            </label>
          </li>
        ))}
      </ul>
      <button disabled={!isAllChecked}>다음</button>
    </div>
  );
};
