import React, {useState} from "react";
import './SearchBar.css';
import SearchResults from "./SearchResults";
function SearchBar(){


const [searchTag, setSearchTag] = useState('');
const [sampleAlbums, setSampleAlbums]=useState([{title:'Ring ring', author:'ABBA'}, 
{title: 'Sunrise', author:'K.Lach'},{title: 'Coming back', author:'Huigli'}]);
const [filteredAlbums, setFilteredAlbums] = useState([]);

const search = () => {
    const filtered =sampleAlbums.filter((album)=>album.author== searchTag || album.title==searchTag);
    setFilteredAlbums(filtered);
    console.log(filtered);
}

const submitHandler = (e) => {
   
   search();
   e.preventDefault();
}

    return (<div className="main-container">
        <form id="search" onSubmit={submitHandler}>
           <input name="searchtag" type="text" value={searchTag} onChange={(e)=>setSearchTag(e.target.value)}/>
           <button type="submit">Search</button>
        </form>
        <SearchResults albums={filteredAlbums}/>
       
           </div>  
    )
}

export default SearchBar;