import { useState, } from 'react'
import ContactList from './components/ContactList.jsx'
import SelectedContact from "./components/SelectedContact"
import './index.css'

const App = () => {
  const [selectedContactId, setSelectedContactId] = useState({});

  return (
    <>
      {selectedContactId.id ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  )
}

export default App
