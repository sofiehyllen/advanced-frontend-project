import React, { useState, useEffect } from 'react';

import { webshopDatabase } from '/src/firebaseConfig.js';

import { onSnapshot, collection } from 'firebase/firestore';

const FilterOptions = ({ onFetchData }) => {
	const [filteredData, setFilteredData] = useState([]);
	const [filterText, setFilterText] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			onSnapshot(collection(webshopDatabase, 'products'), (data) => {
				const docs = [];
				data.forEach((doc) => {
					docs.push({ id: doc.id, ...doc.data() });
				});

				// Filtrer data baseret på filterteksten
				const filteredDocs = docs.filter((element) =>
					element.brand.toLowerCase().includes(filterText.toLowerCase())
				);

				setFilteredData(filteredDocs);

				// Kald onFetchData med det filtrerede data
				onFetchData(filteredDocs);
			});
		};

		fetchData();
	}, [onFetchData, filterText]);

	return (
		<div>
			<input
				type='text'
				value={filterText}
				onChange={(e) => setFilterText(e.target.value)}
				placeholder='Indtast filtertekst'
			/>

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
