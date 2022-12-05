import React, {useState, useEffect} from 'react'

const Tasbeeh = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const data = window.localStorage.getItem('tasbeeh-id');
    if (data !== null) setCount(JSON.parse(data))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('tasbeeh-id', JSON.stringify(count))
  }, [count])

  return (
    <div className='tasbeehCount'>
      <button className='add' onClick={() => setCount(count + 1)}>+</button>
        <span className=''>{count}</span>
      <button className='add' onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Tasbeeh