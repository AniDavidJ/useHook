import React from "react";
import { UserContext, ChannelContext } from "../App";
const ComponentF = () => {
    return (
        <div>
            <UserContext.Consumer>
                {(user) => {
                    return <div>User passed value: {user} </div>
                }}
                
            </UserContext.Consumer>
            <ChannelContext.Consumer>
                {(channel) => {
                    return <div>Channel passed value: {channel} </div>
                }}
            </ChannelContext.Consumer>
        </div>
    );
};

export default ComponentF;
