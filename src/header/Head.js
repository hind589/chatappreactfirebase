import React, { useState,useRef, useEffect,useContext } from 'react'
import './Style.css'
import logoo from './logo.png'
import { Link } from 'react-router-dom';
import { clear } from '@testing-library/user-event/dist/clear';
import { ThemeContext } from '../themeContext/ThemeContext';
import { onValue,   ref, set } from 'firebase/database';
import { db } from '../firebase/Firebase';
function Head(props) {
 
  const {userid, usernom,userprenom,users ,photo,confirm,listinvit,ivitcount,supprimeyy} = useContext(ThemeContext);
  var [boitemsg,setboite]=useState(0); 
  
  const [showPopUp, setShowPopUp] = useState(true);
    const [isPopUpVisible, setPopUpVisible] = useState(false);


    useEffect(()=>{
  
getTotalmsgnumber()
},[props.itloged])
    
    








    var getTotalmsgnumber=async()=>{
     // alert("dssd"+localStorage.getItem("userid"))
      const user = localStorage.getItem('userid');
      var conver=[]
      var nbmsg=0;
  
      if(user!=null){
         
        const query = ref(db, `users`);
        var arrayi=[];
       
        return await onValue(query, (snapshot) => {
     
          const data = snapshot.val();
        
       var tabinvit=[]
       var tabamis=[] 
       
        Object.values(data).map((x)=>{
     
    

          if(x.id==user){
           
    x.discussion.map((y,key)=>{
    if(key>0  ){
   
      y.msg.map((z)=>{

        if(z.parqui!=user && z.etat=="false"){
         // console.log("....................")     
        nbmsg++;
        }
      })
     

  
    //
    }
    })
console.log('cela'+nbmsg)
    setboite(nbmsg)  
    }}
    
    )})
      

    }



    }














     const clearLocal=()=>{
      localStorage.clear();
     }

  const togglePopUp = () => {
    setPopUpVisible((prevVisibility) => !prevVisibility);
  };
  const handleOutsideClick = (event) => {
    const popUpContainer = document.getElementById('pop-up-container');

    if (popUpContainer && !popUpContainer.contains(event.target)) {
      setPopUpVisible(false);
    }
  };
  var freind=[0,1,5,46,4]

  const handleButtonClick = () => {
    // Toggle the pop-up when the button is clicked
    togglePopUp();
  };
  useEffect(() => {
    // Add mousedown event listener to the document
    document.addEventListener('mousedown', handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
   

  return (
   <>
     
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark pr-5 pl-5 "  >
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button> 
    
    
     {/**<div class="container-fluid  collapse navbar-collapse" id="collapsibleNavbar">**/}
     <div class="collapse navbar-collapse pr-5 pl-5" id="collapsibleNavbar">


        <ul class="navbar-nav d-flex flex-row w-100 pr-5 pl-5 align-items-center justify-content-around flex-wrap">
        {props.itloged ? true && (
              <>
        <li class="nav-item me-3 me-lg-0 ml-5">
            <a class="nav-link" href="#">   
            <img class="image" src={logoo} />

</a>
               
            </li>

            
            <li class="nav-item me-3 me-lg-0 ml-5">
            <Link to="/suggestion"> 
            <span class="material-symbols-outlined">
group_add
</span>
</Link>
               
            </li>
            <li class="nav-item me-3 me-lg-0 ml-5">
            <Link to="/friend">
                <span class="material-symbols-outlined">
diversity_1
</span>

               </Link>
            </li>
            <li class="nav-item me-3 me-lg-0 ml-5">
                <Link class="nav-link" to="/conversations">
                <span class="material-symbols-outlined">
mail
</span>
<span class="badge bg-danger ">{boitemsg}</span> 
                </Link>
            </li>
            <li class="nav-item me-3 me-lg-0 ml-5">
                <a class="nav-link" href="#"  onClick={handleButtonClick} >
                <span class="material-symbols-outlined ">
notifications
</span>
<span class="badge bg-danger ">{ivitcount}</span> 

                </a>
                {isPopUpVisible && (   
        <div id="pop-up-container" className="pop-up-container p-0 bg-dark">
          <div className="pop-up-content p-0">
{/************************ */}
{listinvit.map((x)=>{return(
     <div class="cards bg-dark text-white w-100  ">
        
       <div>
        <img src= {x.photo} />
       </div>
  
       <div>
        <h1 > {x.prenom} {x.nom}</h1>
        <div className='d-flex flex-row'>
        <button type="button" id='ajouter' class="btn btn-primary  " onClick={()=>confirm(x)}   >Accepter </button>
        <button type="button" id="ignorer" class="btn btn-danger text-light " onClick={()=>supprimeyy(x)}>Refuser</button>
         
       </div>
       
        </div>

    </div> )})}
 {/************************ */}





   
          </div>
        </div>
      )}

            </li>

            <li class="nav-item me-3 me-lg-0 ml-5">
            <a class="nav-link" href="#">   
            <img class="image1" src={photo} />

</a>
               
            </li>
            <li class="nav-item me-1 me-lg-0 ml-5" style={{color:'white',fontFamily:'fantasy'}}>Bonjour  {userprenom}</li>
            <li class="nav-item me-3 me-lg-0 ml-5">
            <Link class="nav-link" to="/">
                <span class="material-symbols-outlined" onClick={clearLocal}>
logout
</span>
                </Link>
            </li>
            </>
            ):(  <li class="nav-item   " style={{marginLeft:"-80%" }}>
            <a class="nav-link  " href="#">   
            <img class="image " src={logoo}  />
            
</a>
              
            </li>)}
        </ul>
    </div>
</nav>
 



   </>
  )
}

export default Head