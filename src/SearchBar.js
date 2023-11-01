import {useState} from "react";

function SearchBar(props) {
    // Define states
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const SearchButtonPressed = () => {
        props.updateSearchParams({name : name, price: price, type: type, brand: brand});
    };

    return (
        <div>
            <h2>Search for an Item</h2>
            <form>
                <label htmlFor="name-field">Name: </label>
                <input id="name-field" type="text" value={name} onChange={(event)=> {setName(event.target.value)}} ></input>
                <label htmlFor="price-field">Max Price: </label>
                <input id="price-field" type="number" value={price} onChange={(event)=> {setPrice(event.target.value)}} ></input>
                <label htmlFor="type-field">Type: </label>
                <input id="type-field" type="text" value={type} onChange={(event)=> {setType(event.target.value)}} ></input>
                <label htmlFor="brand-field">Brand: </label>
                <input id="brand-field" type="text" value={brand} onChange={(event)=> {setBrand(event.target.value)}} ></input>
                <button type="button" onClick={SearchButtonPressed}>Search</button>
            </form>
            

        </div>
    );
}

export default SearchBar;