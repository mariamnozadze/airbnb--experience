import React from "react";
import "./App.css";
import Card from "./Components/Card";
import Hero from './Components/Hero';
import Navbar from "./Components/Navbar";
import data from "./Components/data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;

// <Hero />
