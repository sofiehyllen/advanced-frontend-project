import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  // Hent gemte favoritter fra localStorage ved det første render
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return storedFavorites;
  });

  useEffect(() => {
    // Opdater localStorage, når favoritter ændres
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  return (
    <div className='mb-10'>
    <h1 className="heading2 mb-6">Dine favoritter</h1>
    {favorites.length === 0 ? (
      <p className='heading3'>* Du har ingen favoritter endnu *</p>
    ) : (
      <ul className="pr-5 flex flex-wrap -mx-4">
        {favorites.map((favorite) => (
          <li key={favorite.id} className="md:w-1/2 lg:w-1/3 xl:w-1/5 px-4 md:mb-8 w-1/2">
            <Link to={`/products/${favorite.id}`} className="mt-4 block md:w-full">
              <div>
                <img
                  src={favorite.imageUrl}
                  alt={`Image of ${favorite.title}`}
                  className="" 
                />
              </div>
              <div>
                <p className='heading3 mt-4'>{favorite.title}</p>
                <p className='heading2 mt-2 mb-5'>{favorite.price} kr.</p>
               
              </div>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);
};

export default Favorites;
