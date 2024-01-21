// App.js
import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=bJMAyzA9kQVqebJeWTlpfAkPgS8GVWLzRYo9EtL-rQE`);
    const data = await response.json();
    setPhotos(data.results);
  };

  return (
    <div>
      <strong><center><p>REACT - UNISAGRADO</p></center></strong>
      <strong><center><p>PROJETO PESQUISA POR IMAGEM</p></center></strong><br></br>
      <center><form onSubmit={searchPhotos}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form></center>
      <div>
        {photos.map(photo => (
          <img key={photo.id} src={photo.urls.small} alt={photo.description} />
        ))}
      </div>
    </div>
  );
}

export default App;

