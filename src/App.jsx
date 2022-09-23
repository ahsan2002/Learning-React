import React, { useState } from "react";
// import Heading from "./Components/Heading";
// import Para from "./Components/Para";
// import List from "./Components/List";
import {add,sub,mul,div} from './Calc';

//multiple elements

// function App(){
//     return(
//         <Heading></Heading>

//     );
// }
// function App1(){
//     return(

//         <Para></Para>
//     )
// };

// function App2(){
//     return(


//         <List></List>
//     )
// }

// // export default App;
// export {App,App1,App2};


// let name="oabbi";

// export  default name;

//calculator
// function App(){
//     return(
//         <>
//        <ul>

//         <li>The sum of two no is {add(20,4)}</li>
//         <li>The subtraction of two no is {sub(20,4)}</li>
//         <li>The multiplication of two no is {mul(5,2)}</li>
//         <li>The division of two no is {div(20,3)}</li>

//        </ul>
//        </>
//     )
// }


const App=()=>{
    // const state=useState();
    // console.log(state);
    // usestate hook
    const [count,setCount]=useState(0);
    const IncNum=()=>{
        setCount(count+1);
        // console.log('click'+ count++);
    }

    const drecNum=()=>{
        setCount(count-1);
        // console.log('click'+ count++);
    }

    const reNum=()=>{
        setCount(0);
        // console.log('click'+ count++);
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={IncNum}>Increase</button>
        <button onClick={reNum}>Reset</button>
        <button onClick={drecNum}>Decrease</button>
        </>
    )
}

export default App;