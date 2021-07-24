import React,{useEffect, useState} from 'react'

const Page = () => {
const [value, setValue] = useState(0);
const [color,setColor] = useState('green')

useEffect(()=>{
    console.log("inside use Effect"+ value);
    return () => {
        console.log("clean up " + value);
    }
},[value, color]);

 
    return (
        <div style={{background:color}}>
            <div>
            <button onClick={()=> setValue(value +1)}>Increment</button>
            </div>
            {value}
            <div>
            <button onClick={()=> setValue(value-1)}>Decrement</button>
            </div>
        <button onClick={()=> setColor('red')}>red</button>
        <button onClick={()=> setColor('blue')}>blue</button>

        </div>
    )
}

export default Page
