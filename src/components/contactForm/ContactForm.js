import React from "react";


// {
//   name,
//   setName,
//   phone,
//   setPhone,
//   email,
//   setEmail,
//   handleSubmit
// }

export const ContactForm = (props) => {
  return (
    // ContactForm
    <form onSubmit={props.handleSubmit}>
      <input 
        type='text' 
        value={props.name} 
        onChange={(e) => props.setName(e.target.value)} />
      <input 
        type='tel' 
        value={props.phone} 
        onChange={(e)=> props.setPhone(e.target.value)} 
        pattern={['^[0-9]{2,3}-? ?[0-9]{6,7}$']}
        />
      <input 
        type='email' 
        value={props.email} 
        onChange={(e)=> props.setEmail(e.target.value)} 
        />
      <input type= 'submit'/>
    </form>
  );
};
