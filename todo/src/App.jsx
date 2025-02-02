import React, { useEffect, useState } from "react"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import moment from 'moment'
import useLocalStorage from "./hooks/useLocalStorage";

function App() {

  const [todos, setTodos, updateTodo] = useLocalStorage('Todo', []);
  const [TodoData, setTodoData] = useState([])

  useEffect(() => {
    setTodoData(todos)
  },[todos])

  const addTodo = (newTodo) => {
    const date = moment().format('MMM Do YYYY, h:mm A');
    setTodos({...newTodo, date})
    // setTodoData([...todos, {...newTodo, date}])
  }

  const updateTodoTask = (index , updatedTodo) => {
    updateTodo(index, updatedTodo)
  }


  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
          <div className="max-h-[calc(100vh-10rem)] overflow-y-auto mt-24 mb-36 md:mx-auto grid xl:grid-cols-3 
            lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center lg:gap-8 md:gap-6 sm:gap-y-4 gap-y-4 
            scrollbar-hide scroll-smooth">
              {TodoData.length > 0 ? <Card todoData={TodoData} updateTodoTask={updateTodoTask} /> : <h1 className='text-2xl font-semibold text-center'>No Todo's</h1>}  
          </div>
        <Footer addTodo={addTodo}/>
      </div>
    </>
  )
}

export default App
