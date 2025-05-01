import React,{useState,useEffect} from 'react'

const UseEffectForTitle = () => {
    const [count, setCount] = useState(0);
    const countDisplay=()=>{
        setCount(count+1)
    }
    // useEffect(()=>{alert("COMPONENT IS MOUNTED!")},[])
    // useEffect(()=>{
    //     document.title=`TotalCount:${count}`
    // },[count])
// using ternery
    useEffect(()=>{
      count === 0
        ? alert("COMPONENT IS MOUNTED!")
        : (document.title = `TotalCount:${count}`);
    },[count])
  return (
    <div className='container'>
        <h3>Question 4</h3>
      <h2>Use Effect </h2>
      <button onClick={countDisplay}>Click here</button>
      <h2>Count displayer:{count}</h2>
    </div>
  )
}

export default UseEffectForTitle
