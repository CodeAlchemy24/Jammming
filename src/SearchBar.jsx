import React, {useState} from "react";
import './SearchBar.css';
function SearchBar(){

const [searchTag, setSearchTag] = useState('');

const submitHandler = () => {

    console.log(searchTag);
  
}



    return (<div className="main-container">
        <form id="search" onSubmit={submitHandler}>
           <input name="searchtag" type="text" value={searchTag} onChange={(e)=>setSearchTag(e.target.value)}/>
           <button type="submit">Search</button>
        </form>

        <ul className="search-list">
            <li>{searchTag}</li>
        </ul>
           </div>  
    )
}

export default SearchBar;