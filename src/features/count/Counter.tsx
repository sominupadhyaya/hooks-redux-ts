import {useAppDispatch , useAppSelector} from '../../app/hooks'

import { incremented, amountAdded } from './counterSlice'

const Counter = () => {

  const count = useAppSelector((state) => state.counter.value)

  const dispatch = useAppDispatch()

  const handleClick = () =>  dispatch(incremented())

  const handleKnownAmtClick = () => dispatch(amountAdded(3)) //adds 3 to count

  return (
    <>
    <h1>Counter Example</h1>

    <h2>The count is : </h2> 
    <h2>{count}</h2>

    <button onClick={handleClick}>Increment by 1!</button>
    <button onClick={handleKnownAmtClick}>Click to increment by 3</button>
    </>
  )
}

export default Counter