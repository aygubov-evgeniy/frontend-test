import React, { useState } from 'react';

const Form = () => {
  const [isValid, setIsValid] = useState(false);
  
  const testEmail = (field) => {
    setIsValid(field.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
  }

  return(
    <form>
      <input type="text" className={isValid ? "da" : "net"} onChange={e => testEmail(e.target)}/>
    </form>
  );
};

export default Form;