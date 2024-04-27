import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, fetchSignInMethodsForEmail, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import './Styles.css';

function RenewPassword() {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState( );
  const [emailExists, setEmailExists] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(true);
  const handleResetPassword =  async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      // Check if the email is empty
      if (!email) {
        setResetSent(false)
        
        
      }
       
      
      
      sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Password reset email sent successfully.');
        setResetSent( true);
        setEmailExists(true);
         
      })
      .catch((error) => {
        console.error('Error sending password reset email:', error.message);
      });
        
        // If the email doesn't exist, set a state variable indicating it
        
      
    } catch (error) {
      console.error('Error during password reset:', error.message);
    }
  };

  return (
    <>
      <div className="fory">
        <div className="wrappery">
          <form>
            <h2>Forgot Password</h2>

            <div className="input-box">
              <input type="email" value={email} placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-box">
              <button className="btn" onClick={(e) => handleResetPassword(e)}>
                Reset Password
              </button>
            </div>

            <div className="reset">
              {resetSent=== true  && <p>Email de réinitialisation du mot de passe envoyé. Vérifiez votre boîte de réception.</p>}
              
              {resetSent=== false   && <p>Please provide an email</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RenewPassword;
