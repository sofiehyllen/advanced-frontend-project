import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Hent favoritter fra localStorage, hvis de eksisterer
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h1>Dine favoritter</h1>
      {favorites.length === 0 ? (
        <p>Du har ingen favoritter endnu.</p>
      ) : (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>
              <Link to={`/products/${favorite.id}`}>
                {favorite.title} - {favorite.price} kr.
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
