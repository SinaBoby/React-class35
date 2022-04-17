import{React, useState} from 'react'
import Button from './Button.js';

import Count from './Count.js';

function Counter() {
  const [count,setCount] = useState(() => {
    console.log('hello')
    return 0
  })
  const feedBack = count > 10 ? "It's higher than 10!" : "Keep counting...";
  return (
    <div>
<Count currentCount={count}/>
<Button addCount={()=> setCount(prevState => prevState + 1)} text='Add 1!'/>
<Button addCount={()=> setCount(prevState => prevState-1   < 0 ? prevState  : prevState -1)} text='Mineze 1!'/>
<Button addCount={()=> setCount(prevState => prevState + 2)} text='Add 2!'/>
<Button addCount={()=> setCount(prevState => prevState-1   <= 0 ? prevState  : prevState -2)} text='Mineze 2!'/>
<p>{feedBack}</p>
</div>
  )
}
export default Counter