import React from "react";
import { ContactsPage } from "../../containers/contactsPage/ContactsPage";

export const ContactPicker = (props) => {
  // Received props: 
  // contacts
  // onChange

  return (
    //ContactPicker
    <select onChange = {props.onChange}>
      <option value = '' key = '' selected = 'selected' > -- Please choose a contact -- </option>
      {
        props.contacts.map( (contact) => {
          return <option value = {contact.name} key = {contact.name} > {contact.name} </option>
        })
      }

    </select>

  );
};
