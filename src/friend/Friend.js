import React, { useContext,useEffect,useState } from 'react';
import { onValue, push, query, ref, set } from 'firebase/database';
import { click } from '@testing-library/user-event/dist/click';
import { db } from '../firebase/Firebase';

import { ThemeContext } from '../themeContext/ThemeContext';
import './Style.css';
import { useNavigate } from 'react-router-dom';

function Friend() {
  const navigate = useNavigate();
  const [chatid,setchatid]=useState([]);
  const { amiss,nomchat,prenomchat,idchat,imagechat,userid, usernom,userprenom,users ,photo,idwith,getdata } = useContext(ThemeContext);
  const  conversation=async(obj)=>{
    localStorage.setItem("message", JSON.stringify(obj));
    nomchat(obj.nom)
    imagechat(obj.photo)
    idchat(obj.id)
  var arrayi=[]
    alert("hada alert idwith"+obj.id)
     
    setchatid(obj.id, () => {
       
      alert(chatid); 
    });
    const query = ref(db, `users`);
     await onValue(query, (snapshot) => {
     
      const data = snapshot.val();
      console.log(data)
      var tabinvit=[]
      var tabamis=[]
      Object.values(data).map((x)=>{
        arrayi.push(x)
      })
    })    
    console.log(arrayi)
    
 




    console.log(users)
        prenomchat(obj.prenom)
  const user = localStorage.getItem('userid');
 
  var tabinvity=[]
  var tabinvityo=[]
  var exist=false;



var conversamis =arrayi.map((itemy) => {
    
    
  var conversamisss =itemy.discussion.map((itemyy,key) => {
    if(key>0){
    if( itemy.id==user && itemyy.avecqui.id ==obj.id    ){
     exist=true
    }
  }
  })

  if (itemy.id == user && exist==false ) {
        return { ...itemy, discussion:[...itemy.discussion,{avecqui:obj,msg:[{contenu:'',parqui:user}]}]};
                       }
        return itemy; 
                
        
      });


    const dataRefamis = ref(db, 'users'); 

    set(dataRefamis,conversamis); 

var exist2=false;

    var conversamisso =conversamis.map((itemo) => {

      var conversamisssos =itemo.discussion.map((itemyy,key) => {
        if(key>0){
        if( itemo.id==obj.id && itemyy.avecqui.id ==user   ){
         exist2=true;
          
        }
      }
      })
      

    
      if (itemo.id == obj.id && exist2==false ) {
       
    
          return { ...itemo, discussion:[...itemo.discussion,{avecqui:{id:user,nom:usernom,prenom:userprenom,photo: photo},msg:[{contenu:"",parqui:user}]}]};
                         }
    
                  
    
          return itemo; 
                  
        });
      
        
      const dataRefamiss = ref(db, 'users'); 
  
      set(dataRefamiss,conversamisso); 
      navigate("/conversations")


    
  }
  useEffect(()=>{
getdata()
  },[])

  return (
    <>
      <div className="App">
        {amiss.map((x, key) => (
          key > 0 && (
            <div className="card bg-dark text-white" key={key}>
              <div>
                <img src={x.photo} alt={`${x.prenom} ${x.nom}`} />
              </div>
              <div>
                <h1>{x.prenom} {x.nom}</h1>
                <button type="button" className="btn btn-success" onClick={()=>{conversation(x)}}>Lancez la conversation</button>
              </div>
            </div>
          )
        ))}
      </div>
    </>
  );
}

export default Friend;
