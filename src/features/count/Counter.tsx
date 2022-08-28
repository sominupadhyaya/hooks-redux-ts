import {useAppDispatch , useAppSelector} from '../../app/hooks'

import { incremented } from './counterSlice'

const Counter = () => {

  const count = useAppSelector((state) => state.counter.value)

  const dispatch = useAppDispatch()

  const handleClick = () =>  dispatch(incremented())

  return (
    <>
    <h1>Counter Example</h1>

    <h2>The count is : </h2> 
    <h2>{count}</h2>

    <button onClick={handleClick}>Click Me!</button>
    </>
  )
}

export default Counter