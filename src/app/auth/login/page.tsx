'use client' 

/* Instruments */
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from '@/lib/redux' 

export default function Login() {
//  const count = useSelector(selectCount);  
    return (
      <>
        <h1>LOGIN PAGEs</h1>
        <p>
          This page is intended to verify that Redux state is persisted across
          page navigations.
        </p>
      </>
    )
  }
  