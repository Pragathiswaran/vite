import {React, useState} from 'react';
import SaveForm from './components/addTodoList';
import EditForm from './components/editTodoList';
import ListTodo from './components/listTodo';
import {toast } from 'react-toastify';
// import Button from '@mui/material/Button';
// import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todolist, setTodolist] = useState([]);
  const [editTodoList, setEditToDoList] = useState(false);
  const [editTodoListValue, setEditTodoListValue] = useState('');
  const [editTodoListIndex,setEditTodoListIndex] = useState('');

  const addList = (e)=>{
    e.preventDefault();
    if(task === ''){
      toast.warn('Please Enter the List', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }else{
    todolist.push(task);
    setTodolist([...todolist]);
    setTask('');
    }
  }

  const deleteList = (index)=>{
    todolist.splice(index, 1);
    setTodolist([...todolist]);
    toast.info('Succesfully Delete the List', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const editList =(index, item)=>{
    setEditTodoListValue(item);
    setEditTodoListIndex(index);
    setEditToDoList(true)
  }

  const updatedList = (e)=>{
    e.preventDefault();
    todolist.splice(editTodoListIndex,1,editTodoListValue)
    toast.success("successfully edit the list", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      })
    setEditToDoList(false)
  }

  return (
    <>
    <div className='flex justify-center font-mono my-24 '>
      <div className='border-2 w-1/2 py-16 border-accent '>
      <h1 className='text-center text-4xl mb-20'>Todo List</h1>
      {!editTodoList &&
        <SaveForm addLists={addList} tasks={task} setTasks={setTask}/>
      }
      {editTodoList &&
        <EditForm updatedList={updatedList} editTodoListValue={editTodoListValue} setEditTodoListValue={setEditTodoListValue}
        />
      }
      <ul className='ml-auto mr-auto w-3/4  mt-10 '>
        <ListTodo todolist={todolist} editList={editList} deleteList={deleteList}/>
      </ul>
      </div>      
    </div>
    </>
  );
}

export default App;
