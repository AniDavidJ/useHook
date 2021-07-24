import React from "react";
// import DataFetchingTwo from "./components/DataFechingReducer/DataFetchingTwo";
import ParentComponent from "./components/useCallBack/ParentComponent";
// import DataFetchingOne from "./components/DataFechingReducer/DataFetchingOne";
// import CounterTwo from "./components/CounterTwo";
// import ComponentC from "./components/ComponentC";
// import Datafeching from './components/Datafeching'
// import Page from './components/Page'

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
function App() {
    return (
        <div>
            <ParentComponent/>
            {/* <DataFetchingTwo/> */}
            {/* <DataFetchingOne/> */}
            {/* <CounterTwo /> */}
            {/* <ComponentC /> */}
            {/* <Page / > */}
            {/* <UserContext.Provider value={"Ani David"}>
                <ChannelContext.Provider value={"Jeron Mathew"}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider> */}
        </div>
    );
}

export default App;
