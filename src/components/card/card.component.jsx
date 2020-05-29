import React from  "react";

import "./card.styles.css";

const Card = ({monster}) => (
   <div className="card-container">
    <img alt="Monster" src={`https://robohash.org/${monster.id}?set=set4&size=180x180`} />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
   </div>
)

export default Card;