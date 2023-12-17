// KODET AF KAROLINE LERCHE & SOFIE HYLLEN
// Importér nødvendige biblioteker og komponenter
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { TbShoppingBagPlus } from 'react-icons/tb';

//import FirebaseData from './FirebaseData';

// Importér SortingDropdown og FilterOptions komponenter

import SortingDropdown from './SortingDropdown';
import FilterOptions from './FilterOptions';

// Komponenten Product håndterer visning og interaktion for produktsiden
export default function Product() {
	// State hooks til datahåndtering, sortering, og filtrering
	const [data, setData] = useState([]); // Oprindelig produktdata fra Firebase
	const [sorting, setSorting] = useState('title'); // Default sortering efter titel
	const [dropdownOpen, setDropdownOpen] = useState(false); // State til dropdown-menuen
	const [filteredData, setFilteredData] = useState([]); // Filtreret produktdata baseret på brand og sortering

	// State hook til håndtering af favoritprodukter (gemt i localStorage)
	const [favorites, setFavorites] = useState(() => {
		const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
		return storedFavorites;
	});

	// State til at vise besked om tilføjelse/fjernelse af favoritter
	const [favoriteMessage, setFavoriteMessage] = useState('');

	// Funktion til håndtering af tilføjelse/fjernelse af favoritter
	const handleToggleFavorite = (item) => {
		const isFavorite = favorites.some((favorite) => favorite.id === item.id);

		if (isFavorite) {
			const updatedFavorites = favorites.filter((favorite) => favorite.id !== item.id);
			setFavorites(updatedFavorites);
			setFavoriteMessage(`${item.title} er fjernet fra favoritter!`);
		} else {
			const updatedFavorites = [...favorites, item];
			setFavorites(updatedFavorites);
			setFavoriteMessage(`${item.title} er tilføjet til favoritter!`);
		}
	};

	// Effekt til at opdatere localStorage, når favoritter ændres
	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	// Funktion til håndtering af filtrering og sortering af produkter
	const handleBrandData = (data) => {
		data.sort((a, b) => {
			if (sorting === 'title') {
				return a.title.localeCompare(b.title);
			} else if (sorting === 'title_reverse') {
				return b.title.localeCompare(a.title);
			} else if (sorting === 'price') {
				return a.price - b.price;
			} else if (sorting === 'price_reverse') {
				return b.price - a.price;
			}
			return 0;
		});

		setFilteredData(data);
	};

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

	// Returnér JSX-struktur for produktsiden
	return (
		<div className='relative flex'>
			{/* Besked om tilføjelse/fjernelse af favoritter */}
			{favoriteMessage && (
				<div className='heading3 z-50 fixed text-sm top-10 right-10 p-4 bg-black text-white'>{favoriteMessage}</div>
			)}

			{/* Komponenten for filtreringsmuligheder */}
			<FilterOptions onFetchData={handleBrandData} />

			{/* Hovedsektion med sortering og produktvisning */}
			<div>
				{/* Dropdown-menu til sortering */}
				<SortingDropdown
					data={data}
					onSortingTitleAZ={() => setSorting('title')}
					onSortingTitleZA={() => setSorting('title_reverse')}
					onSortingPriceHighLow={() => setSorting('price_reverse')}
					onSortingPriceLowHigh={() => setSorting('price')}
					closeDropdown={() => setDropdownOpen(false)}
				/>

				{/* Flex-container med produkter */}
				<div className='flex justify-end'>
					{/* Grid med produkter baseret på filtrerede data */}
					<div className='grid grid-cols-2 gap-3 w-full md:gap-5 xl:gap-6 md:pl-20 xl:w-11/12 xl:grid-cols-3'>
						{filteredData.map((item) => (
							<div key={item.id} className={`relative ${item.tallImageUrl ? 'row-span-2' : 'row-span-1'}`}>
								{/* Link til produktdetaljeside med produktbillede */}

								<Link to={`/products/${item.id}`} className='w-fit'>
									<div className='h-full'>
										{/* Vis enten almindeligt billede eller stort billede afhængigt af data */}
										{item.tallImageUrl ? (
											<img
												src={item.tallImageUrl}
												alt={`Tall Image of ${item.title}`}
												className='w-full h-full object-cover'
											/>
										) : (
											<img
												src={item.imageUrl}
												alt={`Image of ${item.title}`}
												className='w-full h-full object-cover'
											/>
										)}
									</div>
								</Link>

								{/* Produktinformation, pris, titel og hjerte-/kurv-ikoner */}
								<div className='heading3 absolute bottom-0 left-0 p-2 leading-none text-xxs space-y-1 md:space-y-0 md:p-4 md:text-lg xl:text-xl'>
									<span>{item.price} kr.</span>
									<h3 className='pr-5'>{item.title}</h3>
								</div>

								{/* Hjerteikon for favoritter og kurvikon for indkøbskurv */}
								<div className='absolute top-0 right-0 cursor-pointer' onClick={() => handleToggleFavorite(item)}>
									{favorites.some((favorite) => favorite.id === item.id) ? (
										<IoMdHeart className='pt-2 pr-2 text-3xl md:pt-4 md:pr-4 md:text-6xl' />
									) : (
										<IoMdHeartEmpty className='pt-2 pr-2 text-3xl md:pt-4 md:pr-4 md:text-6xl' />
									)}
								</div>

								{/* Knap til at tilføje produkt til indkøbskurv via Snipcart */}
								<button
									className='snipcart-add-item absolute bottom-0 right-0 '
									data-item-id={item.id}
									data-item-image={item.imageUrl}
									data-item-name={item.title}
									data-item-url={item.url}
									data-item-price={item.price}>
									<TbShoppingBagPlus className='stroke-1.5 pb-2 pr-2 text-3xl md:pb-4 md:pr-4 md:text-6xl ' />
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
