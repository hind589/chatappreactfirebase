import React, { useState } from 'react'
import './Style.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import { db } from '../firebase/Firebase';
import { onValue, push, ref, set, update } from "firebase/database";

function Signup() {

  const [nom,setNom]=useState("")
  const [prenom,setPrenom]=useState("");

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [age,setAge]=useState(0);
  const [sex,setSex]=useState("Homme");
  const [photolink,setphotolink]=useState("");
  
  
  const handleButton= () => {
    alert(`You entered:'+ ${prenom} 
     ${nom} ${email}  ${password}  ${age} ${sex}`);
  };
   const prev=(e)=>{
    e.preventDefault();
   }
  
   var photolinks="";
   const handleFileChange = async(e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'soufiane');
  
   await fetch('https://api.cloudinary.com/v1_1/dzkx1z6lo/image/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data =>{setphotolink(data.secure_url);localStorage.setItem("photo",data.secure_url);alert(data.secure_url);photolinks=data.secure_url;
      
      })
      .catch(error => console.error(error));
  
  };
  
   
  const show=async(e)=>{
   prev(e);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email) && nom.length>2 && prenom.length>2   && password.length >4  ) {
  alert("maloo")
      try {
        const respone= await createUserWithEmailAndPassword(auth,email,password);
        alert("hna"+respone)
        if(respone){
          alert("utilisateur créé");
         alert("utilisateur créé"+respone.user.uid);
         const newItemRef = push(ref(db, 'users'));
         console.log(`You enteredy:'+ ${newItemRef} 
          `)
         set(newItemRef, {
          
          age:age,prenom:prenom,nom:nom,id:respone.user.uid,photo:localStorage.getItem("photo"), sex:sex,amis:[{id:'robotid'}],invitation:[{id:"robotid"}],
          
          discussion:[{ id :"robotid" }]
         }
         );
        }
       }
        catch (error) {
    alert("probleme")   
     };
  
  
  
  
  
  
  
  
  
  
    }
    
  
  
   
  }
  



  return (
    <>
    <div  class="fory">
    < div class="wrappery">
    <form  >
      <h1>Register</h1>
      <div class="input-box">
        <input type="text" placeholder="first name"   onChange={(e)=>{setPrenom(e.target.value)}}   required/>
 
      </div>
      <div class="input-box">
        <input type="text" placeholder="last name"  value={nom} onChange={(e)=>{setNom(e.target.value)}}  required/>
 
 
      </div>

      <div class="input-box">
        <input type="Email" placeholder=" email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
 
 
      </div>
      
      <div class="input-box">
        <input type="password"  value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}  required/>
   
        </div>
      <div   class="input-box">
       
      <input   

        type="date"
        id="birthday"
        name="birthday"
        placeholder="MM/DD/YYYY"
        value={age}
        onChange={(e)=>{setAge(e.target.value)}}
        
      />
    </div>
    <div>
    <select   class="form-select  input-box" value={sex}  onChange={(e)=>{setSex(e.target.value)}}>
            
                     <option value="Homme">Homme</option>
                     <option value="femme">Femme</option>
            
            </select>

            </div>
            <div class="input-box">
            <input  type='file'  class="form-control1  
            "  onChange={handleFileChange}/> 
            </div>
        <button  class="btn"  type="submit" onClick={(e)=>show(e)}    >Create Account</button>
         
    </form>
    </div>
    </div>
    </>
  )
}

export default Signup