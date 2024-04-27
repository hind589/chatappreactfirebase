 
import './Style.css'
import React, { useState, useEffect, useContext, useRef } from 'react';  
import { onValue, push, ref, set} from 'firebase/database';
import { db } from '../firebase/Firebase';
import { ThemeContext } from '../themeContext/ThemeContext';
function Conversation(props) {
  
  const { amiss,nomchat,prenomchat,idchat,imagechat,userid, usernom,userprenom,photo,idwith } = useContext(ThemeContext);
  const [msgg,setmsg]=useState("");
  const [conversation,setconvertation]=useState([]);

  const initialized =React.useRef(false);

  const [users,setusers]=useState([]);



var [meid,setmeid]=useState("");








  const  addmsg=(id)=>{
   
      const user = localStorage.getItem('userid');
    
      var tabinvity=[]
      var tabinvityo=[]

      //console.log(users)

     var conversamis =users.map((itemy) => {
        
        
    if(itemy.id==user){
      
      var addmsg=itemy.discussion.map((t,key)=>{
 if(key>0  ){
  //alert("hiiiiiiiiiiiiii")
       if(t.avecqui.id==id){ 

const currentDate = new Date();

// Extract year, month, and day
const year = currentDate.getFullYear();
// JavaScript months are zero-based, so we add 1 to get the correct month
const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
const day = ('0' + currentDate.getDate()).slice(-2);

// Form the yyyy-mm-dd string
const formattedDate = `${year}-${month}-${day}`;
const hours = ('0' + currentDate.getHours()).slice(-2);
const minutes = ('0' + currentDate.getMinutes()).slice(-2);

// Form the hh:mm string
const formattedTime = `${hours}:${minutes}`;

      return({...t,msg:[...t.msg,{contenu:msgg,parqui:user,date:formattedDate,time:formattedTime,etat:'false'}]})
  
       }
       else{
        return t;
       }
    }  

return t;

        })
    

   return { ...itemy, discussion:addmsg};
    }     
      
                    
      
            return itemy; 
                    
          });
  
          console.log("-----------seen------------------")
      console.log(conversamis)

          const dataRefamis = ref(db, 'users'); 

     set(dataRefamis,conversamis); 
          var conversamis2 =conversamis.map((itemy) => {
        
        
              if(itemy.id==id){
                var addmsg=itemy.discussion.map((t,key)=>{
           if(key>0  ){
        
                 if(t.avecqui.id==user){ 
                  const currentDate = new Date();

                  // Extract year, month, and day
                  const year = currentDate.getFullYear();
                  // JavaScript months are zero-based, so we add 1 to get the correct month
                  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
                  const day = ('0' + currentDate.getDate()).slice(-2);
                  
                  // Form the yyyy-mm-dd string
                  const formattedDate = `${year}-${month}-${day}`;
                  const hours = ('0' + currentDate.getHours()).slice(-2);
                  const minutes = ('0' + currentDate.getMinutes()).slice(-2);
                  const formattedTime = `${hours}:${minutes}`;
        
                return({...t,msg:[...t.msg,{contenu:msgg,parqui:user,date:formattedDate,time:formattedTime,etat:'false'}]})
            
            }
                else{
                   return t;
                }
                 }
              
       return t;
        
        
                  })
              
        
        
             return { ...itemy, discussion:addmsg};
              }     
                
                              
                
                      return itemy; 
                              
                    });
            
                    const dataRefamis2 = ref(db, 'users'); 
                set(dataRefamis2,conversamis2); 
        
setmsg('')
console.log(conversamis2)



    }








    useEffect(()=>{

    //  if (!initialized.current) {
      
        initialized.current = true
              setusers(prev=>[])
              getdata()
              seen()
              const Userid =  localStorage.getItem('userid') ;
              setmeid(Userid)

      //  }


    },[props.interloprenom])


/*********************************************88 */
const seen=async()=>{
  const user = localStorage.getItem('userid');
  console.log("-----------seen------------------");
  console.log(idwith+" "+user)
 


  var conversamis =users.map((itemy) => {
        
        
    if(itemy.id==user){
      
      var addmsg=itemy.discussion.map((t,key)=>{
 if(key>0  ){
 
if(t.avecqui.id==idwith){ 
var msg=t.msg.map((z)=>{
if(z.parqui==idwith){
return {...z,etat:"true"}
}
return z;

})

      return({...t,msg:msg})
  
       }
       else{
        return t;
       }
    }  

return t;

        })
    

   return { ...itemy, discussion:addmsg};
    }     
      
                    
      
            return itemy; 
                    
          });




          console.log("££££££££££££££££££££££££££££")
          console.log(conversamis)



const dataRefamis = ref(db, 'users'); 




var conversamis2 =conversamis.map((itemy) => {
        
        
  if(itemy.id==idwith){
    
    var addmsg=itemy.discussion.map((t,key)=>{
if(key>0  ){

if(t.avecqui.id==user){ 
var msg=t.msg.map((z)=>{
if(z.parqui==idwith){
return {...z,etat:"true"}
}
return z;

})

    return({...t,msg:msg})

     }
     else{
      return t;
     }
  }  

return t;

      })
  

 return { ...itemy, discussion:addmsg};
  }     
    
                  
    
          return itemy; 
                  
        });
/*
var conversamis2 =conversamis.map((itemy) => {
  if(itemy.id==id){     
       var addmsg=itemy.discussion.map((t,key)=>{
  if(key>0  ){  
 if(t.avecqui==user){
 t.msg.map((r,index)=>{
 if(r.parqui==user){
   return {...r,etat:true}
 }
 })}
  }}
 )}})
*/




console.log("££££££££££££££££££££££££££££")
console.log(conversamis2)


 set(dataRefamis,conversamis2); 

 //set(dataRefamis,conversamis); 












  

}







/*****************************************************88888888*/

    const getdata=async()=>{
console.log('test')
      const user = localStorage.getItem('userid');
 
        var tabamis=[]
    if(user!=null){
       
      const query = ref(db, `users`);
    
    
      var arrayi=[]
      var conver=[]
    

      return await onValue(query, (snapshot) => {
     //  setusers([])

    
      console.log("t3awd")
        const data = snapshot.val();
      
     var tabinvit=[]
 
    
    
    
    
      Object.values(data).map((x)=>{

       
 setusers(prev=>[...prev,x])


 if(x.id==user){
x.discussion.map((y,key)=>{

if(key>0){

 
 // alert("hada"+y.avecqui.id+'  '+idwith)
if(y.avecqui.id==localStorage.getItem('avec')){

 conver=y.msg;
}}
  
})

      
console.log("--------------------------")
console.log(conver)
setconvertation(conver);

}}


)}

   
    
)
 
    
 
      }      
       
    /*console.log(tabamis)*/}



  
  return (
    <>
   <div class="chat-box-container">
   <div class="photoclass bg-dark">
         <img src={props.interlophoto} />
         <h1> {props.interloprenom}  </h1>
         <h1> {props.interlnom}  </h1>
        </div>
    <div class="messages " id="messages">
   
    {conversation.length>0 && conversation.map((message, index) => {
      if(index>0){
        return(
      
      
      (
    
      <div className='mt-1' style={{display:'flex',flexDirection:'row',justifyContent:message.parqui==meid ?'flex-start': 'flex-end' }}>
 <div class="message-container">
  <div class="message">
    <p>{message.contenu}</p>
    <div class="meta-data">
      <span class="time">{message.time}</span>
      <span class="seen">{(message.etat=="true" && message.parqui==userid) ? "✓":""}</span>
    </div>
  </div>
</div>



      
        </div>
         
   ))
      } })}
    </div>
    
    <div class="input-container d-flex flex-row">
        <input value={msgg} type="text" id="messageInput" class="message-input" onChange={e=>setmsg(e.target.value)} placeholder={props.interlo}/>
        <button id="sendButton" class="send-button" onClick={()=>{addmsg(idwith)}}>Send</button>
    </div>

</div>

    </>
  )
}

export default Conversation