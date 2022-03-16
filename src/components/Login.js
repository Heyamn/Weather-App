import React, { useState } from 'react';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [myValue, setMyValue] = useState([]);
  
    const submitHandler = (event) => {
      event.preventDefault();
      if(name && email && password){

      

      const newValue = { name,email, password}
  
      setMyValue([...myValue, newValue ])
      console.log(newValue)
      
      setName(" ");
      setEmail(" ");
      setPassword(" ");
      }else{
          alert("Please Fill The Data")
      }
  
    }
  
  
    return (
      < >
        <form className='' onSubmit={submitHandler}>
          <label>Name :- </label>
          <input type= "text" name= "name" id= "name" autoComplete= "off"  value={name} onChange = {(e) => { setName(e.target.value)}}/>
          <br/>
          <br/>
  
          <label>Email :- </label>
          <input type= "text" name= "email" id= "email" autoComplete= "off" value={email} onChange = {(e) => { setEmail(e.target.value)}} />
          <br/>
          <br/>
  
          <label>Password :- </label>
          <input type= "password" name= "password" id= "password" autoComplete= "off" value={password} onChange = {(e) => { setPassword(e.target.value) }}/>
          <br/>
          <br/>
          <br/>
          <button type='submit'>Login</button>
  
  
        </form>
      </>
    );
}

export default Login;