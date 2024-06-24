import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
//import ListGroup from "./components/ListGroup";
//Course https://codewithmosh.com/p/ultimate-react-part1

/*let items = ['New York',  'San Francisco', 'Tokyo', 'London', 'Paris'];

const handleSelectItem = (item: string) => {
  console.log(item);
}*/

function App() {
  const[alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/*<ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>*/}
      {alertVisible && 
      <Alert onClose={() => {setAlertVisibility(false)}}>
        My alert
      </Alert>}
      <Button color="primary" onClick={() => {setAlertVisibility(true)}}>My Button</Button>
    </div>
  );
}

export default App;