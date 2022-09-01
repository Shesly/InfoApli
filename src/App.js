import './App.css';
import React, { useState, useEffect } from 'react';
import {verifyUser, message} from '../src/service/UserNameService';
import {User} from '../src/model/User';
import {useNavigate, useParams} from "react-router-dom";

import Page from './components/Page';


function App() {

  const user='shesly_oc';
  const pass='1234';
  const [UserIn, setuser] = useState(User())
  const [isLogin, setIsLogin] = useState(true);



const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
 
  setuser({ ...UserIn, [name]: value });
}

const handleSubmit = (e) =>{

  console.log("user",UserIn.username);
  console.log("pass",UserIn.password);

  if(UserIn.username===user && UserIn.password===pass){
      setIsLogin(false);
    }else{

      e.preventDefault();
     verifyUser(UserIn.username);

      
    }

}


  return (
    (!isLogin)?
      <Page username= {UserIn.username} />
      :
    <div className="form">
     <form onSubmit={handleSubmit}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="username" onChange={handleChange}  value={UserIn.username}/>
        
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="password" onChange={handleChange}  value={UserIn.password}/>
     
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
  );
}

export default App;
