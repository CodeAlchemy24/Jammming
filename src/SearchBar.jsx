import React from "react";

function SearchBar(){

const submitHandler = () => {
   return null;
}

    return (<div>
        <form id="search" onSubmit={submitHandler}>
           <input type="text" />
           <button type="submit">Submit</button>
        </form>

        <ul className="search-list">
            <li>1</li>
        </ul>
           </div>  
    )
}

export default SearchBar;