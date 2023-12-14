import React, { useState, useEffect } from 'react';

import { webshopDatabase } from '/src/firebaseConfig.js';

import { onSnapshot, collection } from 'firebase/firestore';

const FilterOptions = ({ onFetchData }) => {
	const [filteredData, setFilteredData] = useState([]);
	const [selectedBrands, setSelectedBrands] = useState([]);
	const [availableBrands, setAvailableBrands] = useState([]);

	const handleBrandChange = (brand) => {
		const updatedBrands = [...selectedBrands];
		const index = updatedBrands.indexOf(brand);

		if (index === -1) {
			updatedBrands.push(brand);
		} else {
			updatedBrands.splice(index, 1);
		}

		setSelectedBrands(updatedBrands);
	};

	useEffect(() => {
		const brandData = async () => {
			const productsCollection = collection(webshopDatabase, 'products');

			const unsubscribe = onSnapshot(productsCollection, (data) => {
				const docs = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

				// Her hentes alle brands fra produkterne i firebase
				const brandsSet = new Set(docs.map((element) => element.brand));
				const brandsArray = [...brandsSet];

				setAvailableBrands(brandsArray);

				// Filtrer data baseret på valgte brands
				const filteredDocs = docs.filter(
					(element) => selectedBrands.length === 0 || selectedBrands.includes(element.brand)
				);

				setFilteredData(filteredDocs);

				// Kald onFetchData med det filtrerede data
				onFetchData(filteredDocs);
			});

			return () => unsubscribe();
		};

		brandData();
	}, [onFetchData, selectedBrands]);

	return (
		<div>
			{/** Checkboxe for hvert brand baseret på de tilgængelige brands fra Firebase */}
			<div className='flex flex-col space-y-5 w-max'>
				{availableBrands.map((brand) => (
					<label key={brand} className='cursor-pointer heading3'>
						<input
							className='mr-2 cursor-pointer'
							type='checkbox'
							checked={selectedBrands.includes(brand)}
							onChange={() => handleBrandChange(brand)}
						/>
						{brand}
					</label>
				))}
			</div>

			{/* De filtrerede data vises her */}

			{filteredData.map((element) => (
				<div key={element.id}></div>
			))}
		</div>
	);
};

export default FilterOptions;
