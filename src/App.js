import React, { useState } from 'react' // Import React and the useState hook
import './App.css'; // Import the CSS styles for the application
import Form from "./components/Form.js" // Import the Form component
import CardList from "./components/CardList" // Import the CardList component

function App() {
  // Declare a state variable called cards and a function to update it called setCards, initialized as an empty array
  const [cards, setCards] = useState([])

  // Function to add a new card to the cards state
  const addNewCard = (card) => {
    setCards([...cards, card]) // Add the new card to the existing array of cards
  }
  
  return (
    <div>
      {/* Heading for the application */}
      <h1 className="pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
        Search a GitHub User
      </h1>
      {/* Form component to submit new cards, passing the addNewCard function as a prop */}
      <Form onSubmit={addNewCard}/>
      {/* CardList component to display the list of cards, passing the cards state as a prop */}
      <CardList cards={cards} />
    </div>
  )
}

export default App; // Export the App component as the default export
