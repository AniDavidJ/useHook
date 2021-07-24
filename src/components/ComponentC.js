import React,{useReducer} from 'react'
import ComponentE from './ComponentE'

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state +1
        case 'decrement':
            return state -1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const ComponentC = () => {
    const [count , dispatch] = useReducer(reducer,initialState)
    const [countTwo , dispatchTwo] = useReducer(reducer,initialState)

    return (
        <div>
            Counter One - {count}
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
            <button onClick={()=>dispatch('reset')}>reset</button>

            <div>
            counter Two - {countTwo}
            <button onClick={()=>dispatchTwo('increment')}>increment</button>
            <button onClick={()=>dispatchTwo('decrement')}>decrement</button>
            <button onClick={()=>dispatchTwo('reset')}>reset</button>
            </div>

            {/* <ComponentE /> */}
        </div>
    )
}

export default ComponentC
