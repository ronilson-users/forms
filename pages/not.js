// Just a data fetching function
import {useState , useEffect} from "react"
const fetchURL = "https://jsonplaceholder.typicode.com/todos/";
const getItems = () => fetch(fetchURL).then(res => res.json());


function List({ items, fallback }) {
  
  if (!items || items.length === 0) {
    return fallback;
  } else {
    return items.map(item => {
      return <div key={item.id}>{item.title}</div>;
    });
  }
}

function Not() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);

  return (
    <div>
      <List  items={items} fallback={"Loading..."} />
    </div>
  );
}
export default Not