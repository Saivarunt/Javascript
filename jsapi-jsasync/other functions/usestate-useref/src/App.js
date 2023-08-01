// import logo from './logo.svg';
// import './App.css';

// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

// }

// useState
// import React,{useState} from 'react'
// // function countFunc(){
// //     console.log("Running function")
// //     return 4
// // }
// function App(){
//   const [state,setState]= useState({count:4,theme:'blue'}) //since this is within a function it will rerender every single time
//   const count=state.count
//   const theme=state.theme

//   // const [count,setCount]= useState(4)
//   // const [count,setCount]= useState(()=>{ //will only run once
//   //   console.log("Running function")
//   //   return 4
//   // })
//   // const [count,setCount]= useState(countFunc())//will run everytime the function renders
//   // const [count,setCount]= useState(()=>countFunc())//will only run once

//   function decrementCount(){
//     // setCount(prevCount=>prevCount-1) // better to use this function version if we are to reuse the previous value of the state
//     setState(prevState=>{
//       return {...prevState,count:prevState.count-1} // usestate replaces all of the values with whatever is returned so we spred out the previous state before making changes for the new state
//     })
//   }
//   function incrementCount(){
//     // setCount(prevCount=>prevCount+1)
//     setState(prevState=>{
//       return {...prevState,count:prevState.count+1} 
//     })
//   }
  
//   return (
//     <>
//     <button onClick={decrementCount}>-</button>
//     <span>{count}</span>
//     <span>{theme}</span>
//     <button onClick={incrementCount}>+</button>
//     </>
//   )
// }

// export default App;


//useref
import React,{useState,useEffect,useRef} from 'react'

export default function App(){
  const [name,setName] = useState('')
  // const renderCount = useRef(1)
  
  // useEffect(()=>{
  //   renderCount.current = renderCount+1
  // }) 
  // const inputRef = useRef()
  const prevName = useRef('')

  // function focus(){
  //   inputRef.current.focus()
  // }
  useEffect(()=>{
    prevName.current = name
  },[name])

  return(
    <>
    {/* <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)}></input> */}
    <input value={name} onChange={e=>setName(e.target.value)}></input>
    <div>My name is {name} and it used to be {prevName.current}</div>
    {/* <div>I rendered {renderCount.current} times</div> */}
    {/* <button onClick={focus}>Focus</button> */}
    </>
  )
}