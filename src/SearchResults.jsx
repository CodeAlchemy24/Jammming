import React, {useState} from 'react';

function SearchResults(props){

    return <div className='search-results'>
            <ul className="search-list">
        {props.albums.map(album => {return (<li>{album.author} {album.title}</li>)})}
        </ul> 
    </div>
}

export default SearchResults;