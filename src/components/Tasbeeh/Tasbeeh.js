import React, {useState} from 'react'

const Tasbeeh = () => {
  const [count, setCount] = useState(0);

  const tasbeehCounting = () => {
    setCount(count + 1)
  }

  return (
    <div className='tasbeehCount'>
    <button className='add' onClick={() => tasbeehCounting()}>+</button>
      <span className=''>{count}</span>
    </div>
  )
}

export default Tasbeeh