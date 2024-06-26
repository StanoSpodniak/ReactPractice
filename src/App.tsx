import { useState } from "react";
//import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";
//import { BsFillCalendarFill } from 'react-icons/bs';
import Like from "./components/Like";
import Button from "./components/Button/Button";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Name from "./components/Name/Name";
import ChangeNameButton from "./components/Name/ChangeNameButton";

//Course https://members.codewithmosh.com/courses/ultimate-react-part1-1/lectures/45915726

/*let items = ['New York',  'San Francisco', 'Tokyo', 'London', 'Paris'];

const handleSelectItem = (item: string) => {
  console.log(item);
}*/

function App() {
  //const[alertVisible, setAlertVisibility] = useState(false);
  const [cartItems, setCartItems] = useState(['Product1', 'Product2', 'Product3']);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"]
  })

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      {id: 1, title: 'Product 1', quantity: 1},
      {id: 2, title: 'Product 2', quantity: 1}
    ]
  })

  const handleChangeName = () => {
    let newName = "Bob";
    setGame({...game, player: { ...game.player, name: newName}})
    setPizza({...pizza, toppings: [...pizza.toppings, "Ham"]});

    setCart(prevCart => ({
      ...prevCart,
      items: prevCart.items.map(item =>
        item.id === 2 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  }

  return (
    <div>
      {/*<ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      <BsFillCalendarFill color="red" size="40" />*/}
      {/*{alertVisible && 
      <Alert onClose={() => {setAlertVisibility(false)}}>
        My alert
      </Alert>}*/}
      {/*<Button color="danger" onClick={() => {setAlertVisibility(true)}}>My Button</Button>
      <Like onClick={() => console.log("clicked")} />*/}
      <NavBar cartItemsCount={cartItems.length}/>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
      <Name name={game.player.name} />
      <ChangeNameButton changeName={handleChangeName} />
      <div>
        {pizza.toppings.map((topping, index) =>
          <li key={index}>{topping}</li>
        )}
      </div>
      <div>
        {cart.items.map((item, index) => 
          <li key={index}>{item.quantity}</li>
        )}
      </div>
    </div>
  );
}

export default App;