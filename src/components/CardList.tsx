import React from "react" // Import React
import Card from './Card' // Import the Card component
import { GitHubCard } from '../App'

type CardListProps = {
  cards: GitHubCard[]
}

// CardList component that takes props as an argument
const CardList = (props: CardListProps) => (
  <div id="container" className="mt-10">
    {/* Map over the cards array passed via props and render a Card component for each card */}
    {props.cards.map((card, index) => ( 
      <Card key={index} {...card} />    // Spread the card properties into the Card component
    ))}
  </div>
)

export default CardList // Export the CardList component as the default export
