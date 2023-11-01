import { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import AddItem from './AddItem';
import ItemsDisplay from './ItemsDisplay';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items: []});

  const UpdateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const AddItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({items: items});
    console.log(data);
  };

  return (
    <div className="App">
      <SearchBar updateSearchParams={UpdateFilters} />
      <AddItem AddItem = {AddItemToData} />
      <ItemsDisplay items={data["items"]}/>
    </div>
  );
}


//This goes at the end
export default App;
