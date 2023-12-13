import React, { useState, useEffect } from 'react';

import { webshopDatabase } from '/src/firebaseConfig.js';

import { onSnapshot, collection } from 'firebase/firestore';

const FilterOptions = ({ onFetchData }) => {
	const [filteredData, setFilteredData] = useState([]);
	const [selectedBrands, setSelectedBrands] = useState([]);

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
		const fetchData = async () => {
			onSnapshot(collection(webshopDatabase, 'products'), (data) => {
				const docs = [];
				data.forEach((doc) => {
					docs.push({ id: doc.id, ...doc.data() });
				});

				// Filtrer data baseret på valgte brands
				const filteredDocs = docs.filter(
					(element) => selectedBrands.length === 0 || selectedBrands.includes(element.brand)
				);

				setFilteredData(filteredDocs);

				// Kald onFetchData med det filtrerede data
				onFetchData(filteredDocs);
			});
		};

		fetchData();
	}, [onFetchData, selectedBrands]);

	return (
		<div>
			{/** Checkboxe for hvert brand */}
			{['Mock', 'Curology', 'Lume'].map((brand) => (
				<label key={brand}>
					<input
						type='checkbox'
						checked={selectedBrands.includes(brand)}
						onChange={() => handleBrandChange(brand)}
					/>
					{brand}
				</label>
			))}

			{/* Tidligere søgefelt fjernet, da det ikke er nødvendigt med checkboxe */}

			{filteredData.map((element) => (
				<div key={element.id}>
					{element.title}
					{/* Vis yderligere oplysninger om produktet her */}
				</div>
			))}
		</div>
	);
};

export default FilterOptions;
