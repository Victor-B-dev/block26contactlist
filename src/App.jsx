import { useState, } from 'react'
import ContactList from './components/ContactList.jsx'
import SelectedContact from "./components/SelectedContact"
import './index.css'

const App = () => {
  const [selectedContactID, setSelectedContactID] = useState[null];

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  )
}

export default App
