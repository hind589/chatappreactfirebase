 
import   {React, useEffect, useState } from 'react'
import './Style.css'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Firebase';

import { useNavigate } from 'react-router-dom';
function Login(props) {

  const navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    props.nonlog();
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    const rememberedPassword = localStorage.getItem('rememberedPassword');
    if (rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setRememberMe(true);
    }
  }, []);

 

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };




  const oui=(e)=>{
    e.preventDefault();
   }

   
  const connecty=async(e)=>{
    
    props.nonlog();
    oui(e);
   
    try {
      const response=await signInWithEmailAndPassword(auth,email, password);
      localStorage.setItem("userid",response.user.uid);
      //alert(localStorage.getItem("userid"))  
      navigate("/conversations");
      setTimeout(()=>{
        window.location.reload()
      },500)
      if (rememberMe) {
        // Save email and password to local storage
        localStorage.setItem('rememberedEmail', email);
        localStorage.setItem('rememberedPassword', password);
      } else {
        // Clear remembered email and password from local storage
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPassword');
      }
      setEmail('');
      setPassword('');
    }

    catch(e){
      console.log(e)
    }
  

  }
   

  const Userid =  localStorage.getItem('userid');

   
  

  
  useEffect(() => {
     
    const Userid =  localStorage.getItem('userid') ;
    if (Userid!==null){
      navigate("/conversations")
    }
  }, []);
  return (
    <>
    <div  class="for">
    < div class="wrapper">
    <form >
      <h1>Login</h1>
      <div class="input-box">
        <input type="Email" placeholder=" email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
 
 
      </div>
      
      <div class="input-box">
        <input type="password"  value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}  required/>
   
        </div>
        <div class="remember-forget">
          <label> <input type="checkbox" checked={rememberMe} onChange={handleCheckboxChange}/>Remember me </label>
          <Link to='/renewP' >forget password? </Link>
       
        </div>
         
        <button type="submit" class="btn" onClick={(e)=>connecty(e)}>Login</button>
        <div class="register-link">
         <Link to='/signup'> <p >Don't have an account? Register  </p></Link>
        </div>
    </form>
    </div>
    </div>
     
    </>
     
  )
}

export default Login