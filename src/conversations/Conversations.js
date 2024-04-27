
import React, { useEffect, useRef ,useState,useContext} from 'react'
import './Style.css'


import Conversation from '../conversation/Conversation';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../themeContext/ThemeContext';
import { onValue,   ref, set } from 'firebase/database';
import { db } from '../firebase/Firebase';
function Conversations(props) {
 
  
  const { amiss,nomchat,prenomchat,idchat,imagechat,userid, usernom,userprenom,photo,chatavecprenom,imagewith} = useContext(ThemeContext);
  const [conversation,setconversation]=useState([]);
   var [idchats,setidchat]=useState(null);
const [users,setusers]=useState([]);

const initialized = React.useRef(false);
  const navigate = useNavigate();
  
  

  useEffect(() => {
// window.location.reload()

     
      initialized.current = true
      getdata();
    


   props.yeslog();
    const Userid =  localStorage.getItem('userid') ;
    if (Userid==null){
      navigate("/")
    }
if(localStorage.getItem("message")!=undefined){
  console.log(localStorage.getItem("message"))

ouvreconversation( JSON.parse(localStorage.getItem("message")))
}

  }, [props.yeslog]);
   
  
  const getdata=async()=>{
    

    
        const user = localStorage.getItem('userid');
       
      var conver=[]
      if(user!=null){
       // alert("opis"+user)  
        const query = ref(db, `users`);
        var arrayi=[];
       
        return await onValue(query, (snapshot) => {
     
          const data = snapshot.val();
        
       var tabinvit=[]
       var tabamis=[] 
 conver=[]
 //alert("ttt")
        Object.values(data).map((x)=>{
     
    setusers([...users,x])
console.log(x.id+'  '+user)
          if(x.id==user){
          // alert("ssssssss")
    x.discussion.map((y,key)=>{
    if(key>0  ){
      console.log("hiiii"+x.discussion)
      console.log(x=> {return users})
    conver.push(y);
    //
    }
    })

    setconversation(conver)  
    }}
    
    )})
        
        }}
    
    
    
    
    const ouvreconversation=(obj)=>{
      console.log(obj)
     if(localStorage.getItem('avec')==undefined){
  localStorage.removeItem('avec');
     }
    var avec=localStorage.setItem('avec',obj.id);

     nomchat(obj.nom)
     imagechat(obj.photo)
       idchat(obj.id)
      prenomchat(obj.prenom)
    setidchat(obj.id)
     
    
    }
    
  return   (
    <>
    <div className='grand d-flex flex-row'>
     <div className='list bg-dark'  >

     {conversation.map((x)=>{return(
     <div onClick={()=>{ouvreconversation(x.avecqui)}} class="cards bg-dark text-white w-100 "  style={{borderBottomWidth:1,
      borderColor:"rgb(134, 13, 126)",
     borderStyle:"solid"}} >
        
        <div  >
         <img src={x.avecqui.photo}  />
        </div>
    
        <div>
         <h1>{x.avecqui.nom+' '+x.avecqui.prenom}</h1>
         <div className='d-flex flex-row'>
         {x.msg[x.msg.length-1].contenu}
        </div>
         </div>
         </div>
     )})}
     </div>
     














<div className='chat bg-danger'>
  {idchats !=null ?
<Conversation  interloprenom={chatavecprenom} idwith={idchats} interlophoto={imagewith}/>:
(<h1 className='lancez'>Lancez une conversation</h1>)}
</div>









     </div>
     </>
  )
   
}

export default Conversations