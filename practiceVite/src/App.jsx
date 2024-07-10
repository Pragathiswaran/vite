import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

//   const todo = [
//     {
//       id: 1,
//       task: 'task1',
//       create: '2021-10-10'
//     },
//     {
//       id: 2,
//       task: 'task2',
//       create: '2021-10-10'
//     },
//     {
//       id: 3,
//       task: 'task3',
//       create: '2021-10-10'
    
//     }
//   ]
// if(todo){
//   if(window.localStorage.setItem('todo',JSON.stringify(todo))){
//     console.log('success')
//   } else {
//     console.log('error')
//   }
//}
  const displayLocalStorageValue = ()=>{
      const display  = window.localStorage.getItem('todo')
      // alert(display)
      // alert(typeof(display))
      let parseValue = JSON.parse(display)
      parseValue.map((item)=>(item.id === 1 ? item.task = 'success' : item))
      console.log(parseValue)
    }

  return(
    <>
      <button onClick={()=>displayLocalStorageValue()}>Click me</button>
    </>
  )
}

export default App
