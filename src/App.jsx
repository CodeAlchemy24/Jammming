import React from 'react'

import './App.css'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import PlayList from './PlayList';
import TrackList from './TrackList';
import Track from './Track';


function App() {
  

  return (
    <>
      <div className='container'>
       <SearchBar />
       <PlayList />
       <TrackList >
       <Track></Track>
       <Track></Track>
        </TrackList>
       <button type="button">Save to Spotify</button>
      </div>
      
    </>
  )
}


export default App
