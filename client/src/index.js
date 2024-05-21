import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";

import "./index.css";

const pizzaData = [
  {
    name: "Pizza Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1> HUNGRY PizZA</h1>
    </header>
  );
}
function Menu() {
  const pizzas=pizzaData;
  return (
    <main className="menu">
      <h2>Cravings Menu</h2>

      {pizzas && (
        <>
      <p>
        Authentic Indian multi-cuisine, 6 creative dishes to choose from. All from our hands, all a-roma-n-tic , all delicious
      </p>
      <ul className="pizzas">
        {pizzas.map((pizzaob) => (
          <Pizza pizzaobj={pizzaob} key={pizzaob.name} />
        ))}
      </ul>
        </>
     )}
    </main>  
  );
}
function Pizza({pizzaobj}) {
  return (
    <li className={`pizza ${pizzaobj.soldOut?"sold-out":""}`}>
      <img
        src={pizzaobj.photoName}
        className="pizza img"
        alt={pizzaobj.name}
      />
      <div>
        <h3> {pizzaobj.name} </h3>
        <p>Contains: {pizzaobj.ingredients}</p>
        <span>${pizzaobj.price}</span>
      </div>
      <div className="sold-out">
        {pizzaobj.soldOut ? (
          <h4>Sold Out</h4>
        ) : (
          <h4>Now Available</h4>
        )}
      </div>
    </li>
  );
}

function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hour = time.getHours();
  const isOpen = hour >= 13 && hour < 20;

  return (
    <footer className="footer">
      {isOpen && <Order/>}
      {!isOpen && (
        <>
        <h1>{time.toLocaleTimeString()}</h1>
        <h2>Sorry, We're Closed. Meet us with your hunger from 1:00 p.m.</h2>
        </>
      )}
    </footer>
  );
}

function Order(){
  return <div className="order">
  <h2>We are Open. Meet you at the bakery.</h2> <h3>We serve you till 11:30 p.m.</h3>
  <button className="btn" onClick={console.log("You clicked the order button")}>Order</button>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
