import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function InputComponent(props){
    
  const [inputValue,setinputValue]=useState("");
  const handleChange=e=>{
    setinputValue(e.target.value);
  }
    const onSubmit=e=>{
        e.preventDefault();
        if(inputValue===""){
          alert("field is empty");
        }
        else{
           let tod={"description":inputValue};
           
          fetch("https://todobackend-aliabbas34.onrender.com/todos",{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify(tod)
          }).then(response=>response.json())
          .then(response=>{
            tod={...tod,"id":response.todoId};
            props.setTodo([...props.todo,tod]);
          })
          .catch((err)=>console.log(err, "error here"));

          setinputValue("");

        }
    }
    return (
        <div style={{display:"flex",  justifyContent:"center"}}>
            <TextField 
            id='inputBoxDescription' 
            label="Todo" 
            variant="outlined" 
            sx={{
              "& .MuiInputBase-root": {//style for input box
                color: 'white', 
                height:40, 
                marginTop:1, 
                backgroundColor:"#031956"
                },
              "& .MuiFormLabel-root":{color:'#8d93b5'},/*label color */
              borderRadius:"10px", 
              marginLeft:"7px"
              }}
              value={inputValue}
              onChange={handleChange}
              />
            <Button onClick={onSubmit} variant="contained" sx={{margin:"7px", height:"40px"}}>Add todo</Button>
        </div>
    )
}

export default InputComponent;