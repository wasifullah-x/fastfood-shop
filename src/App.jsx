import './App.css'
import Details from './Details'
import Food from './Food'
import { useState } from 'react'

function App() {

  const [items, setItems] = useState(
    [
      {
        id : 1,
        photo : "./pizza.jpeg",
        name : "Pizza",
        price : 1800,
        isSelected : false,
        quantity : 1,
        inCart : false
      },
      {
        id : 2,
        photo : "./burger.jpeg",
        name : "Burger",
        price : 850,
        isSelected : false,
        quantity : 1,
        inCart : false 
      },
      {
        id : 3,
        photo : "./sandwich.jpeg",
        name : "Sandwich",
        price : 400,
        isSelected : false,
        quantity : 1,
        inCart : false 
      },
      {
        id : 4,
        photo : "./friedchicken.jpeg",
        name : "Fried Chicken",
        price : 650,
        isSelected : false,
        quantity : 1,
        inCart : false 
      },
      {
        id : 5,
        photo : "./fries.jpeg",
        name : "Pizza",
        price : 300,
        isSelected : false,
        quantity : 1,
        inCart : false 
      },
      {
        id : 6,
        photo : "./drink.jpeg",
        name : "Drink",
        price : 150,
        isSelected : false,
        quantity : 1,
        inCart : false 
      }
    ]
  );

  const selectedItems = items.map((item) => item.inCart === true);

  return (
    <>
      <h1>Fast Food Shop</h1>
      <Food items={items}></Food>
      {
        selectedItems.length > 0 &&
          <Details/>
      }
    </>
  )
}

export default App
