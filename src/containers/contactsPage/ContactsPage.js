import { forbidExtraProps } from "airbnb-prop-types";
import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [currentName, setCurrentName] = useState('');
  useEffect(() => {
    props.contacts.map((item) => {
      if (item.name === currentName){
        alert(`${currentName} is already in use`);
        setDuplicate(true);
        alert(duplicate);
      }
    } )
    //return () => setDuplicate(false);
  });




  const [currentPhone, setCurrentPhone] = useState();

  const [currentEmail, setCurrentEmail] = useState();

  const [duplicate, setDuplicate] = useState(false);


  const handleSubmit = (e) => {
        e.preventDefault();

    

      /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!duplicate){
      props.addContact(currentName, currentPhone, currentEmail);
      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 

        <ContactForm
        name={currentName}
        setName={setCurrentName}
        phone= {currentPhone}
        setPhone={setCurrentPhone}
        email={currentEmail}
        setEmail={setCurrentEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          array={props.contacts}
        />
      </section>
    </div>
  );
};
