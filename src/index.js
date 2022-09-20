import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import Heading from './Components/Heading';
// import Para from './Components/Para';
// import List from './Components/List';
// import  {App,App1,App2} from './App';
import App from './App'


// ReactDOM.render('kya dekhana hai','kaha dekhna hai','callback function')

// ReactDOM.render(<> <h1>Hello World Ahsan</h1> 
// <p>i am good</p> <h2>plz like it</h2> </>
// ,document.getElementById('root'));

// ReactDOM.render(<h1>Ahsan Omerjee</h1> <p>hello</p>,document.getElementById('root'));


//challenge 1

// ReactDOM.render(<>
// <h2>My First Task</h2>
// <p>this is my first task of react js</p>
// <ol>
//     <li>esha</li>
//     <li>ahsan</li>
//     <li>obaid</li>
//     <li>fariya</li>
// </ol>
// </>,document.getElementById("root"));


//using js in html,we use curly brackets
// const name="ahsan";

// ReactDOM.render(<> <h1>My name is {name}</h1> <p>my lucky number is {(5+5)*(5-5)}.</p> </>,document.getElementById("root"));

//as tarah nhi kr sakhte
// ReactDOM.render(<> <h1>My name is {name}</h1> <p>my lucky number is {
//     if (3<4){
//         console.log("correct")
//     }
//     else{
//         console.log("not correct")
//     }
    
//     }.</p> </>,document.getElementById("root"));

//template literals
// const fname="Ahsan";
// const lname="Omerjee";

// ReactDOM.render(<>
// <h1>{`My name is ${fname} ${lname}.`}</h1>
// </>,document.getElementById("root"));

//challenge 2

// const cdate=new Date().toLocaleDateString();
// const ctime=new Date().toLocaleTimeString();
// const cday=new Date().toLocaleString(); //dono sath(date or time)

// ReactDOM.render(<>
//     <h1>My name is Ahsan</h1>
//     <p>Today's Date is {cdate}</p>
//     <p>The Current time is {ctime}</p>
//     <p>The Current date and time is {cday}</p>
// </>,document.getElementById("root"));

//JSX attributes

//inline css
// const heading={
//     textAlign:'center',
//     color:'blue',
//     fontFamily: '"Oswald", sans-serif',

// }

// const img1="https://api.lorem.space/image/movie?w=150&h=220";
// const img2="https://api.lorem.space/image/game?w=150&h=220";
// const img3="https://api.lorem.space/image/book?w=150&h=220";

// ReactDOM.render(<>
// {/* <a href="https://github.com/" target="_ahsan">Click me</a> */}
// <h1 className='head' style={heading}>Ahsan Omerjee</h1>
// <div className='myimg'>
// <img src={img1} alt='myimg' />
// <img src={img2} alt='myimg' />
// <img src={img3} alt='myimg' />
// </div>
// </>,document.getElementById("root"));


//new react 18
// const root=ReactDOM.createRoot(document.getElementById("root"));


// root.render(
//         <>
//        {/* {<App></App>}
//        {<App1></App1>}
//        {<App2></App2>} */}

//        <h1>My name is {name} </h1>
//        </>
        
// );
const root=ReactDOM.createRoot(document.getElementById("root"));

//calculator
root.render(
        <App></App>
        
);