// KODET AF KAROLINE LERCHE & SOFIE HYLLEN
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { TbShoppingBagPlus } from 'react-icons/tb';

// Komponent til visning af favoritprodukter
const Favorites = () => {
  // Hent gemte favoritter fra localStorage ved det første render
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return storedFavorites;
  });

  // State til at vise besked om tilføjelse/fjernelse af favoritter
  const [favoriteMessage, setFavoriteMessage] = useState('');

  // Funktion til at tilføje eller fjerne et produkt fra favoritter
  const handleToggleFavorite = (item) => {
    const isFavorite = favorites.some((favorite) => favorite.id === item.id);

    if (isFavorite) {
      // Fjern produktet fra favoritter
      const updatedFavorites = favorites.filter((favorite) => favorite.id !== item.id);
      setFavorites(updatedFavorites);
      setFavoriteMessage(`${item.title} er fjernet fra favoritter!`);
    } else {
      // Tilføj produktet til favoritter
      const updatedFavorites = [...favorites, item];
      setFavorites(updatedFavorites);
      setFavoriteMessage(`${item.title} er tilføjet til favoritter!`);
    }
  };

  // Effekt til at opdatere localStorage, når favoritter ændres
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Effekt til at skjule beskeden om tilføjelse/fjernelse efter 3 sekunder
  useEffect(() => {
    if (favoriteMessage) {
      const timeoutId = setTimeout(() => {
        setFavoriteMessage('');
      }, 3000); // Skjul beskeden efter 3 sekunder (3000 ms)

      // Ryd op i timeout ved komponentens oprydning
      return () => clearTimeout(timeoutId);
    }
  }, [favoriteMessage]);

  return (
    <div className='mb-10'>
{/* Besked om tilføjelse/fjernelse af favoritter */}
{favoriteMessage && (
      <div className=" heading3 z-50 fixed xl:text-sm top-10 right-10 p-4 bg-black text-white">
        {favoriteMessage}
      </div>
    )}

      {/* Overskrift for favoritter */}
      <h1 className="heading2 mb-1 mt-5">Dine favoritter</h1>
      
      {/* Vis besked, hvis der ikke er nogen favoritter */}
      {favorites.length === 0 ? (
        <p className='heading3'>* Du har ingen favoritter endnu *</p>
      ) : (
        /* Liste over favoritter */
        <ul className="pr-5 flex flex-wrap -mx-4">
          {favorites.map((favorite) => (
            <li key={favorite.id} className="md:w-1/2 lg:w-1/3 xl:w-1/5 px-4 md:mb-8 w-1/2">
              <div className="mt-4 block md:w-full relative">
                {/* Link til produktet */}
                <Link to={`/products/${favorite.id}`}>
                  <div className='h-full relative'>
                    {/* Billede af produktet */}
                    <img
                      src={favorite.imageUrl}
                      alt={`Image of ${favorite.title}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Knapper til tilføjelse til indkøbskurv og til favoritter */}
                    <div className='absolute bottom-0 right-0 pr-1'>
                      <button
                        className='snipcart-add-item pt-[3px]'
                        data-item-id={favorite.id}
                        data-item-image={favorite.imageUrl}
                        data-item-name={favorite.title}
                        data-item-url={favorite.url}
                        data-item-price={favorite.price}
                        onClick={(e) => {
                          e.preventDefault();
                          // Håndter kliklogik her
                        }}>
                        {/* Indkøbskurvikon */}
                        <TbShoppingBagPlus className='stroke-1.5 text-2xl md:text-4xl ' />
                      </button>
                    </div>
                    <div className='absolute top-0 right-0 pt-1 cursor-pointer' onClick={(e) => {
                      e.preventDefault();
                      handleToggleFavorite(favorite);
                    }}>
                      {/* Hjerteikon for favoritter */}
                      {favorites.some((fav) => fav.id === favorite.id) ? (
                        <IoMdHeart className='pr-2 text-3xl md:pr-2 md:text-4xl ' />
                      ) : (
                        <IoMdHeartEmpty className='pr-2 text-3xl md:pr-2 md:text-4xl ' />
                      )}
                    </div>
                  </div>
                </Link>
                {/* Beskrivelse af produktet */}
                <div>
                  <p className='heading3 mt-4'>{favorite.title}</p>
                  {/* Pris på produktet */}
                  <p className='heading2 mt-2 ml-2'>{favorite.price} kr.</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
