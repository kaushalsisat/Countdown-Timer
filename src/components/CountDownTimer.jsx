import React, { useEffect, useState, useRef } from 'react'

const CountDownTimer = () => {

    //intial timer values
    let[timeLeft,setTimeLeft]=useState(60)//initial value of timer
    let timerRef=useRef(null)// used for holding the interval IDs


//fuction to strt the timer
const startTimer=()=>{
     if(timerRef.current)return; //these avoids causing the multiple intervals 
     timerRef.current=setInterval(()=>{
     setTimeLeft(prevtime=>{
         if(prevtime<=1){//checking weather timer is reached 1 and belo to remove it from ui
            clearInterval(timerRef.current)
            timerRef.current=null;
            return 0
         }
         return prevtime-1
     })

    },1000)//timer updates every sec
}
//function to stop the timer
const stopTimer=()=>{
    clearInterval(timerRef.current)
    timerRef.current=null;

}
//function to reset the timer
const resetTimer=()=>{
    stopTimer()
    setTimeLeft(60)
}

//useEffect to clear the timer from the component -unmounting
useEffect(()=>{

    return ()=>clearInterval(timerRef.current)

},[])

  return (
    <div className='container'>
    <h1 className='title d-flex justify-content-center align-items-center text-dark mt-5'>CountDown-Timer</h1>
      <div className="card p-4 text-center shadow my-5">
        <h1 className='text-light my-5'>⌚{timeLeft} $econds</h1>
        <div className='buttons d-flex justify-content-center'>
        <button className='btn btn-success'onClick={()=>startTimer()}>Start</button>
        <button className='btn btn-warning mx-1' onClick={()=>stopTimer()}>Stop</button>
        <button className='btn btn-danger'onClick={()=>resetTimer()}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default CountDownTimer
