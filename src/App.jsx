import './App.css'
import Details from './Details'
import Food from './Food'
import { useState } from 'react'

function App() {

  const [items, setItems] = useState(
    [
      {
        id : 1,
        photo : "./pizza.png",
        name : "Pizza",
        price : 1800,
        isSelected : false,
        quantity : 1,
        inCart : false
      },
      {
        id : 2,
        photo : "./burger.png",
        name : "Burger",
        price : 850,
        isSelected : false,
        quantity : 1,
        inCart : false 
      },
      {
        id : 3,
        photo : "./sandwich.png",
        name : "Sandwich",
        price : 400,
        isSelected : false,
        quantity : 1,
        inCart : false 
      },
      {
        id : 4,
        photo : "./chicken.png",
        name : "Fried Chicken",
        price : 650,
        isSelected : false,
        quantity : 1,
        inCart : false 
      },
      {
        id : 5,
        photo : "./fries.png",
        name : "Pizza",
        price : 300,
        isSelected : false,
        quantity : 1,
        inCart : false 
      },
      {
        id : 6,
        photo : "./drink.png",
        name : "Drink",
        price : 150,
        isSelected : false,
        quantity : 1,
        inCart : false
      }
    ]
  );

  const selectedItems = items.filter(item => item.inCart === true);

  const handleFood = (id) => {
    let item = items.filter(item => item.id === id)[0];
    item.inCart = !item.inCart;
    setItems(items.map(food => food.id===id ? item : food));
  }

  const handleQuantity = (e, id, inc) => {
    e.stopPropagation();
    let item = items.filter(item => item.id === id)[0];
    item.quantity += inc;
    console.log(item.quantity);
    setItems(items.map(food => food.id === id ? item : food));
  }


  return (
    <>
      <h1>Fast Food Shop</h1>
      <Food 
        items={items}
        selectFood = {(id) => handleFood(id)}
        selectQuantity = {(e, id, inc) => handleQuantity(e, id, inc)}
      />
      {
        selectedItems.length > 0 &&
          <Details
              selectedItems={selectedItems}
          />
      }
    </>
  )
}

export default App
