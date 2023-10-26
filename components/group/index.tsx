import { useEffect, useRef } from 'react'
import Button from '../Button'

function Group() {
  const arr = new Array(30).fill(1)
  const ctx = useRef<HTMLDivElement>(null)
  const btns = useRef<NodeList>([])

  useEffect(() => {
    if (!ctx.current) return
    btns.current = ctx.current.querySelectorAll(`button`)
  }, [])

  return (
    <div className="pp" ref={ctx}>
      그룹
      {arr.map((item) => (
        <Button all={btns} />
      ))}
    </div>
  )
}
export default Group
