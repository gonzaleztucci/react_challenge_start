import React from "react";


export const ContactForm = (props) => {

  /*
Props received are:
{
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}
*/

  return (
    // ContactForm
    <form onSubmit={props.handleSubmit}>
      <input 
        type='text' 
        value={props.name} 
        onChange={(e) => props.setName(e.target.value)}
        placeholder = 'Name' />
      <input 
        type='tel' 
        value={props.phone} 
        onChange={(e)=> props.setPhone(e.target.value)} 
        pattern={['^[0-9]{2,3}-? ?[0-9]{6,7}$']}
        placeholder = 'Telephone number'
        />
      <input 
        type='email' 
        value={props.email} 
        onChange={(e)=> props.setEmail(e.target.value)} 
        placeholder = 'email address'
        />
      <input type= 'submit'/>
    </form>
  );
};
