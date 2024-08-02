import React from "react" // Import React
import Card from "./Card.js" // Import the Card component

// CardList component that takes props as an argument
const CardList = (props) => (
  <div id="container" className="mt-10">
    {/* Map over the cards array passed via props and render a Card component for each card */}
    {props.cards.map((card, index) => (
      // Spread the card properties into the Card component
      <Card key={index} {...card} />
    ))}
  </div>
)

export default CardList // Export the CardList component as the default export
