import { useEffect, useRef } from 'react'

function Button({ all }) {
  const indexFromAll = useRef()
  const self = useRef(null)

  useEffect(() => {
    indexFromAll.current = [...all.current].findIndex((node) => node === self.current)
  }, [all])

  return <button ref={self}> 버튼 {indexFromAll.current} </button>
}
export default Button
