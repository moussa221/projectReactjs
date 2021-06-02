import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../../firebase';

const Deconnexion = () => {

    const firebase = useContext(FirebaseContext);

    const [checked, setChecked] = useState(false);

    useEffect(() => {
      if(checked === true){
        firebase.signoutUser();
      }
    }, [checked, firebase]);

    const handleChange = event => {
      setChecked(event.target.checked);
    }
    
  return (
    <div className="logoutContainer"> 
      <label className="switch">
        <input
          onChange={handleChange} 
          type="checbox" 
          checked={checked}
          />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default Deconnexion;
