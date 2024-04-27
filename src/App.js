import logo from './logo.svg';
import './App.css';
 
import Head from './header/Head';
import { BrowserRouter as Router, Route,  Routes, useNavigate } from 'react-router-dom';
 
import Login from './login/Login';
import Friend from './friend/Friend'
import Signup from './signup/Signup'
import Conversation from './conversation/Conversation'
import Conversations from './conversations/Conversations'
import Suggestion from './suggestion/Suggestion'
import './Styles.css'
import { useState } from 'react';
import Notifications from './notifications/Notifications';
import RenewPassword from './renewPassword/RenewPassword';
import { ThemeProvider } from './themeContext/ThemeContext';
 
function App() {
 
  var [loged, setLoged]=useState(false);
   const yeslog = () => {
   setLoged(true);
  };
  const nonlog = () => {
    setLoged(false);
   };

  

  return (
    <>  
   <ThemeProvider>
       
    


   <Router>
 
 <Head  itloged={loged}/>
 
 <Routes>
     
   
     <Route  path='/' element={<Login nonlog={nonlog} />} />
   
     <Route path='/signup' element={<Signup    />    } />
     <Route path='/friend' element={<Friend/>} />
 
     <Route path='/conversations' element={<Conversations  yeslog={yeslog}/>}       />
     <Route path='/suggestion' element={<Suggestion/>} />
     <Route path='/notifications' element={<Notifications/>} />
     <Route path='/renewP' element={<RenewPassword/>} />
 </Routes>
 </Router>
 </ThemeProvider>
 
 </> 
  );
}

export default App;
