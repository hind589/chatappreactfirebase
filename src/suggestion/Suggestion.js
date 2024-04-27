 
import { onValue,   ref, set } from 'firebase/database';
import  {React, useEffect, useRef, useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/Firebase';
   
 
import { ThemeContext } from '../themeContext/ThemeContext';
import './Style.css'
 

 
 
 
 
 
 


function Suggestion() {
   
  const {users, userid,usernom,userprenom,sendrequest,ignorer} = useContext(ThemeContext);
         console.log(users);

     
    return (
      <>
  

      <div className="App">
      {users.length>0 && users.map((x)=>{
         
if(x.id!==userid){
 //usersclean.map((u)=>{
 
  
return( 

     <div class="card bg-dark text-white">
       
       <div>
        <img src={x.photo}  />
       </div>
  
       <div>
        <h1>  {x.nom} {x.prenom}  </h1>
        <button type="button" id='ajouter' class="btn btn-primary  " onClick={() => sendrequest(x.id)}>Ajouter </button>
        <button type="button" id="ignorer" class="btn btn-warning mt-2 text-light " onClick={() => ignorer(x.id)}>Ignorer</button>
       </div>
       
  
  
    </div>
     )}})}
     
      </div>
      </>
    )
  }
  
  

export default Suggestion