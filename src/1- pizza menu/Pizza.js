import React from 'react'
import im from "./pizzas/focaccia.jpg"
function Pizza() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "./pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "../../public/pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "./pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "./pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "./pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "./pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
  return (
    <div>
      {
        pizzaData.map((pizza)=>(
          <>
         <Pizzaa pizzaObj={pizza} key={pizza.name}/>
         
          </>
        )
        )
      }
    </div>
  )
}
function Pizzaa({pizzaObj}){
  console.log(pizzaObj.photoName)
  return (
    <div>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <h1>{pizzaObj.name}</h1>
      <p>{pizzaObj.ingredients}</p>
      <img src={im} alt="gg"/>
    </div>
  )
}
export default Pizza
