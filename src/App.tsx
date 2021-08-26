import React from 'react';
import Header from './components/Header';
import ArtistList from './features/Artist/components/ArtistList';
import TopTrack from './features/Track/components/TopTrack';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col">
          <ArtistList />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TopTrack />
        </div>
      </div>
    </div>
  );
}

export default App;
