import ListGroup from "./components/ListGroup";
//continue 60 min. https://www.youtube.com/watch?v=SqcY0GlETPk&t=10s

let items = ['New York',  'San Francisco', 'Tokyo', 'London', 'Paris'];

const handleSelectItem = (item: string) => {
  console.log(item);
}

function App() {
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;