import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext,ChannelContext } from "../App";

const ComponentE = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
{user} is our user Context <br/>
{channel} is our Channel Context
           <ComponentF /> 
        </div>
    )
}

export default ComponentE
