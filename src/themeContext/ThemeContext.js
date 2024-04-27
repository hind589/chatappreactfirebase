 
import { onValue,   ref, set } from 'firebase/database';
import  {React, useEffect, useRef, useState,createContext } from 'react'
 
import { db } from '../firebase/Firebase';
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    const [userid,setuserid]=useState("");
    const [usernom,setusernom]=useState("");
    const [userprenom,setuserprenom]=useState("");
    const [photo,setphoto]=useState("");
    const [invit,setinvit]=useState("");
    const [ivitcount,setivitcount]=useState("");
    const [userdata,setuserdata]=useState([]);
    const [users,setusers]=useState([]);
    const [usersclean,setusersclan]=useState([]);
    const [allusers,setallusers]=useState([]);
    const [listinvit,setlistinvit]=useState([]);
    const initialized = useRef(false);
    const [isVisible,setvisible]=useState(true)
    const [chkon,setchkon]=useState(1)
    const [amiss,setamiss]=useState([]);
    const [chatavecnom , setchatavecnom]=useState([])
    const [chatavecprenom , setchatavecprenom]=useState([])
    const [idwith,setidwith]=useState();
    const [imagewith,setimagewith]=useState();
 


    const getdata=async()=>{
    const user = localStorage.getItem('userid');
    if(user!=null){
    setuserid(user)
    const query = ref(db, `users`);
    var arrayi=[]
    return await onValue(query, (snapshot) => {
    arrayi=[]
    const data = snapshot.val();
    console.log(data)
    var tabinvit=[]
    var tabamis=[]
    Object.values(data).map((x)=>{
    arrayi.push(x)
    
    console.log("user:"+user)
    console.log("x.id:"+x.id)
     
    if(x.id==user){
      console.log("hi")
      console.log(x)
         setusernom(x.nom)
         setphoto(x.photo)
         setuserprenom(x.prenom)
          
         setinvit(x.invitation)
         setamiss(x.amis)
         var count=0;
        console.log(photo)

         Object.values(x.invitation).map((y)=>{ 
            
                 if(y.id != "robotid" && ( y.status=="waiting" )){
                                 count=count+1
                               //  console.log("y hia:"+y)
                                tabinvit.push(y)
    console.log(tabinvit)
    console.log(users)
    
                                       }
                                        
                                          })
               
    
         setivitcount(count)
        
    
        setamiss(x=>{return x})       
    
      }    })
    
    
    
    var userclean=[]
    var lisaftoli=[]
    
    arrayi.map((x)=>{
    
     x.invitation.map((y)=>{
    
           if(y.id==user){
              userclean.push(x.id)
    
              }
         
            })
    
          })
    
          arrayi.map((x)=>{
            if(x.id==user){ 
            x.invitation.map((y)=>{
                   if(y.id!="robotid"){
                   
                    lisaftoli.push(y.id)
                    
                  }
                     
                
                   })
       
                 }
    })
                
    
    //console.log("length of :"+userclean.length)
    
    setusersclan(userclean)
    
    var amisclean=[]
    
    if(userclean.length==0){
    
    amisclean=arrayi;
    }  
    
    else{
    var exist=true;
    var i=0;
    
    
    
    
    }
    
    
    const filteredArray = arrayi.filter(element => !userclean.includes(element.id) && !lisaftoli.includes(element.id));
    
    
    
    setusers(filteredArray)
    
    
    
    
    
    
    setusers(x=>{return x})
    
    
    
    //console.log(filteredArray)
    setallusers(arrayi)
    
    setlistinvit(listinvit=>tabinvit)
    
    setlistinvit(x=>{return x})
    
    
    
    
    
    
    
    
    
    
    
    
                                          });
    
                                        }
    
    else{
     console.log("hi")
    
    }
    
    
    
    
    
    
                                }
    
    
    
    
    
    
    
    
    
    
    
    useEffect(()=>{
    
     console.log('userprenom:', userprenom);
 
              initialized.current = true
              getdata()
              
    
      
    
    } ,[] )
    
    
    const display=()=>{
      setvisible(!isVisible)
    
    
    }
    
    const supprimeyy=(object)=>{
    const supprimerhada = allusers.
    
    map((itemy) => {
    
    if (itemy.id == userid) {
          return { ...itemy, invitation:itemy.invitation.map((z)=>{
                    if(z.id==object.id){
                      return {...z,status:"refusé"}
    
                    }
                    
                     return z;
                     
          })};
    }            
    
        return itemy; 
                
      });
      const dataReyo = ref(db, 'users'); 
    
      set(dataReyo, supprimerhada);
      /************************* */
    const supprimerphoto = supprimerhada.map((itemo) => {
    
    if (itemo.id == userid) {
         listinvit.splice(object)
    }            
    
      return itemo  
      });
      const dataRey = ref(db, 'users'); 
    
      set(dataRey, supprimerphoto);
    
    }
    
   
    
    
    
    
    const  confirm=(obj)=>{
    
    const confirmlidt = allusers.map((itemy) => {
      
    
      if (itemy.id == userid) {
            return { ...itemy, invitation:itemy.invitation.map((z)=>{
                      if(z.id==obj.id){
                        return {...z,status:"accepte"}
                      }
                      
                       return z;
                       
            })};
      }            
    
          return itemy; 
                  
        });
    
        const dataRef = ref(db, 'users'); 
    
        set(dataRef,confirmlidt);
        
    /*************************** */
    
    
    
    
    
    var confirmamis =confirmlidt.map((itemy) => {
    
    if (itemy.id == userid ) {
    
    
      return { ...itemy, amis:[...itemy.amis,{id:obj.id,nom:obj.nom,prenom:obj.prenom,photo:obj.photo}]};
                     }
    
              
    
      return itemy; 
              
    });
    
    const dataRefamis = ref(db, 'users'); 
    
    set(dataRefamis,confirmamis);
    
    
    
    
    /****************** */
    const amisbzoj =confirmamis.map((hadaw) => {
    
    if (hadaw.id ==obj.id) {
    
    return { ...hadaw, amis:[...hadaw.amis,{id:userid,nom:usernom,prenom:userprenom,photo:photo}]};
    
    }
    
    return hadaw; 
    
    });
    
    const databzojs = ref(db, 'users'); 
    
    set(databzojs,amisbzoj);
    
    
        }
     

    
    
    
    
    
    
    
    
    
    
    
    
    const sendrequest=(id)=>{
    
    const updatedItems = allusers.map((item) => {
        if (item.id == id) {
    
              return { ...item, invitation:[...item.invitation,{id:userid,nom:usernom,prenom:userprenom,photo:photo,status:"waiting"}]};
                             }
    
            return item; 
                    
          });
    
    
    const dataRef = ref(db, 'users'); 
    
    set(dataRef,updatedItems);
    
    
    
    }
    
    const ignorer=(id)=>{
    const ignore= users.filter((u)=>{
    if(u.id!=id)
       return u
    })
    setusers(ignore)
    
    }
    
    const bdlchkon=(lamda)=>{
    setchkon(lamda)
    }
    
    const nomchat=(alpha)=>{
    setchatavecnom(alpha)
    }
    const prenomchat=(sigma)=>{
    setchatavecprenom(sigma)
    }
    
    const idchat=(alpha)=>{
    setidwith(alpha)
    }
    const imagechat=(sigma)=>{
    setimagewith(sigma)
    
    }
   

    return (
      
      
        <ThemeContext.Provider value={{ userid, usernom,userprenom,users,getdata ,photo,sendrequest,confirm,listinvit,ivitcount,amiss,ignorer,supprimeyy,nomchat,prenomchat,imagechat,idchat,imagechat,chatavecprenom,imagewith,idwith}}>
          {children}
        </ThemeContext.Provider>
         
      );










}
export { ThemeContext, ThemeProvider };