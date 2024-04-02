import React, { useEffect, useState } from 'react'

function UseEffectForTitle() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `count: ${count}`
  }, [count])

  useEffect(() => {
    alert("Component is mounted")
  }, [])


  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
      <h3>Counter: {count}</h3>
    </div>
  )
}

export default UseEffectForTitle
