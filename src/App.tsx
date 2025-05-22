import React, { useState } from 'react' // Import React and the useState hook
import './App.css'; // Import the CSS styles for the application
import Form from "./components/Form"; // Elimina la extensión '.js'
import CardList from "./components/CardList"; // Elimina la extensión '.js'

// Define a TypeScript type for GitHubCard
// This type represents the structure of a GitHub user card
export type GitHubCard = {
  avatar_url: string    // URL of the user's avatar image
  name: string          // Full name of the GitHub user
  login: string         // GitHub username (login handle)
  public_repos: string  // Number of public repositories of the user
  created_at: string    // Date when the GitHub account was created
  location: string      // Location of the user (if available)
  bio: string           // User's bio or description
  html_url: string      // URL to the user's GitHub profile
  blog: string          // User's blog or website URL (if available)
}

function App() {
  const [cards, setCards] = useState<GitHubCard[]>([])        // To say it’s an array of GitHubCard items

  // Function to add a new card to the cards state
  const addNewCard = (card: GitHubCard) => {
    setCards([...cards, card])
  }
  
  return (
    <div>
   <h1 className="pt-20 text-2xl font-semibold text-gray-100 text-center">
      Search GitHub Users
    </h1>


      <Form onSubmit={addNewCard}/>           {/* Form component to submit new cards, passing the addNewCard function as a prop */}
      <CardList cards={cards} />              {/* CardList component to display the list of cards, passing the cards state as a prop */}
    </div>
  )
}

export default App; // Export the App component as the default export
