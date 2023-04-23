import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../actions/actions';

export default function Counter() {

   const count = useSelector((para)=> para.counter2);
   const count2 = useSelector((para)=> para.counter3);

   const dispatch = useDispatch();

  return (
    <>
     <h1> {count} </h1>

     <h1>{count2}</h1>

     <button onClick={()=> dispatch(increment())}>INCREMENT</button>
    </>
  )
}
