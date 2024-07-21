import { useState, useEffect } from 'react';

const selectedContactId = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState([])

  useEffect(()=>{
    async function fetchContact() {
      try {
        const response = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact()
  }, []);

  return (
    <>
      <h1>Your Desired Contact</h1>
      <p> {contact.name} 
          {contact.email} 
          {contact.phone}
      </p>
      <button onClick={() => {setSelectedContactId=({})}}> Go Back to Contact List </button>
    </>
  )
}

export default selectedContactId