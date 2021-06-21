import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

/*Props received by AppointmentForm
{
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
} */

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    //AppointmentForm
    <form onSubmit = {props.handleSubmit} >

      <input 
        type = 'text'
        value = {props.title}
        onChange = {(e) => props.setTitle(e.target.value)}
        id = 'title'
        placeholder = 'Title'
      />
      <input 
        type = 'date'
        value = { props.date } 
        onChange = { (e) => props.setDate(e.target.value) }
        min = {getTodayString()}
        />
      <input 
        type = 'time'
        value = { props.time }
        onChange = { (e) => props.setTime(e.target.value) }
      />
      <ContactPicker 
        contacts = {props.contacts} 
        onChange = {(e) => props.setContact(e.target.value)}
        />

      <input 
        type = 'submit'
      />
    </form>
  );
};
