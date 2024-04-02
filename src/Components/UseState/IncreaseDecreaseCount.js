import React, { useState } from 'react'


function IncreaseDecreaseCount() {
  const [count, setCount] = useState(0);
  // const countIncreser = 

  const countDecreaser = () => {
    setCount(count - 1)
  }

  const countResetter = () => {
    setCount(0)
  }


  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>Inc</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount((count) => count - 1)}>dec</button>
    </div>
  )
}

export default IncreaseDecreaseCount
