import { React,useState,useEffect } from 'react'
import SingleTodoComponent from './SingleTodoComponent';
import InputComponent from './inputComponent';
import Loader from './Loader';


import Card from '@mui/material/Card';

import Typography from '@mui/material/Typography';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  const [todos, setTodos] = useState([]);



  useEffect(()=>{
    fetch("https://todobackend-aliabbas34.onrender.com/todos",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>setTodos(data.todos))
    .catch(err=>console.log(err));
  },[])

  console.log("render");
  
  return (
    <>
    <div 
    id='main' 
    style={{width:"100vw", height:"100vh", backgroundColor: "#98b5ff", display:"flex", justifyContent:"center"}}
    >
      <Card 
        sx={{
          backgroundColor:"#344fa1", 
          borderRadius:"25px", 
          margin:"50px" 
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{color:"white", marginTop:"20px", marginLeft:"20px"}}
        >
          Hello User!
        </Typography>
        <InputComponent todo={todos} setTodo={setTodos}></InputComponent>
        <Typography 
          variant="overline" 
          display="block" 
          gutterBottom 
          sx={{color:"#8d93b5", marginTop:"10px", marginLeft:"20px"}}
        >
          List of Todos
        </Typography>
        {todos.length!=0?todos.map((todo,index)=>{
          return(
            <SingleTodoComponent key={todo.id} todo={todos} setTodo={setTodos} description={todo.description} id={todo.id} n={index}/>
          );
        }):<Loader/>}
      </Card>
    </div>
     </>
  )
}

export default App;