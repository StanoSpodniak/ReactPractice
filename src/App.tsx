import { useState } from "react";
//import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";
//import { BsFillCalendarFill } from 'react-icons/bs';
import Like from "./components/Like";
import Button from "./components/Button/Button";

//Course https://members.codewithmosh.com/courses/ultimate-react-part1-1/lectures/45915382

/*let items = ['New York',  'San Francisco', 'Tokyo', 'London', 'Paris'];

const handleSelectItem = (item: string) => {
  console.log(item);
}*/

function App() {
  const[alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/*<ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      <BsFillCalendarFill color="red" size="40" />*/}
      {/*{alertVisible && 
      <Alert onClose={() => {setAlertVisibility(false)}}>
        My alert
      </Alert>}*/}
      <Button color="danger" onClick={() => {setAlertVisibility(true)}}>My Button</Button>
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;