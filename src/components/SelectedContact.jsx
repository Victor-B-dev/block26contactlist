import { useState } from 'react';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState([])

  const { id } = selectedContactId

  const getContact = async() => {
      try {
        const response = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`)
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
  }
  getContact();

  return (
    <>
      <h1>Your Desired Contact</h1>
      <p> Contact Name: {contact.name} </p>
      <p> Email: {contact.email}  </p>
      <p> Phone# {contact.phone} </p>
      <button onClick={()=> {setSelectedContactId({})}}> Go Back to Contact List </button>
    </>
  )
}

export default SelectedContact