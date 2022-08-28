import {useAppDispatch , useAppSelector} from '../../app/hooks'

import { incremented } from './counterSlice'

const Counter = () => {

  const useAppSelector = (state : any) => state.counter.value

  return (
    <div>Counter</div>
  )
}

export default Counter