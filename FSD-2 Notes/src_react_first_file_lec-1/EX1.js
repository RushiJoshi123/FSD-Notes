import React from 'react';
import img1 from './image.jpg';

function EX1() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h1 style={{ color: "blue", fontStyle: "italic", fontSize: "25px" }}>
        Hello
      </h1>
      <h2>List of fruits</h2>
      <ol>
        <li>Apple</li>
        <li>Apricot</li>
        <li>Avocado</li>
      </ol>
      <img src={img1} alt="fruit" />
      <h6>Current date: {date}</h6>
      <h6>Current time: {time}</h6>
    </div>
  );
}

export default EX1;
