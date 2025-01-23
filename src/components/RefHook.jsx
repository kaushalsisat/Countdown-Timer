import {useEffect, useRef, useState} from 'react'


// step1: importing the useref Hook
const RefHook = () => {
    let [number,setNumber]=useState(1)
    //syntax 
    let refData=useRef(null)
    let autoFoc= useRef("")
    let count=useRef(1)

    let Increment=()=>{
        count=count.current+1
        console.log("increment value",count)
    }

    let ForceInce=()=>{
        setNumber(number+1)
    }


    //result

    console.log(refData)//{current:null}
    console.log(refData.current)//null
    useEffect(()=>{
        autoFoc.current.focus()
    })

  return (
    <div>
        <input 
        ref={autoFoc}
        id=''
        name=''
        placeholder='enter some name..'
        />
       <h1 ref={refData}>Hello i am Learning useRef</h1>
       <h1>{count.current} </h1>
       <h1>{number} </h1>
       <button onClick={()=>Increment()}>Inc</button>
       <button onClick={()=>ForceInce()}>ForceInc</button>
    </div>
  )
}

export default RefHook
