import React, { useState } from 'react'


const IncreaseDecreaseCount = () => {
  const [count, setCount] = useState(0);

  const handleIncrease=()=>{
setCount(count+1)
  }
  const handleDecrease=()=>{
    setCount(count-1)
  }
  const handelReset =()=>{
    setCount(0)
  }
  return (
    <div className="container">
      <h3>Question three</h3>
      <h1>count:{count}</h1>
      <div className='buttons'>
        <button onClick={handleIncrease} className='increase'>increasement</button>
        <button className='decrease' onClick={handleDecrease}>decreasement</button>
        <button className='reset' onClick={handelReset}>reset</button>
      </div>
    </div>
  );
}

export default IncreaseDecreaseCount
