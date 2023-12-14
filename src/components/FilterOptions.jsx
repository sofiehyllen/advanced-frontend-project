import React, { useState, useEffect } from 'react';

import { webshopDatabase } from '/src/firebaseConfig.js';
import { onSnapshot, collection } from 'firebase/firestore';

import { IoChevronDownSharp } from 'react-icons/io5';

const FilterOptions = ({ onFetchData }) => {
	const [filteredData, setFilteredData] = useState([]);
	const [selectedBrands, setSelectedBrands] = useState([]);
	const [availableBrands, setAvailableBrands] = useState([]);
	const [isFilterOpen, setIsFilterOpen] = useState(false); // isNavOpen er fra start falsk = Mobil nav er lukket

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
			{/*--- Checkbox for hvert brand baseret på de tilgængelige brands fra Firebase ---*/}
			<button
				type='button'
				className='sticky top-0 left-0 pt-5 flex items-center z-40 md:hidden'
				onClick={() => setIsFilterOpen((prev) => !prev)}>
				<p className='heading3 pr-1'>Filtrér</p>
				<IoChevronDownSharp className='pl-1' />
			</button>

			{/*--- Filtreringsmenuen på mobil ---*/}
			<div className={isFilterOpen ? 'flex' : 'hidden'}>
				<div className=' z-40  '>
					<div className='absolute top-0 left bg-white pr-5 pb-5 pt-2'>
						<div className='sticky top-0 left-0 flex flex-col space-y-2 w-max  '>
							<h3 className='heading2 leading-none'>Brand</h3>
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
							<p className='btn p-0 px-2 py-1 text-xxs' onClick={() => setIsFilterOpen(false)}>
								Close
							</p>
						</div>
						<div className='flex justify-center mt-4'></div>
					</div>
				</div>
			</div>

			{/*--- Filtreringsmenuen på tablet og laptop ---*/}
			<div className='hidden md:block mt-12 md:sticky md:top-0 md:pt-16 md:bg-white'>
				<h3 className='heading2 pb-2 leading-none'>Brand</h3>
				<div className='flex flex-col space-y-1 w-max  '>
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
			</div>

			{/*--- De filtrerede data vises her ---*/}
			{filteredData.map((element) => (
				<div key={element.id}></div>
			))}
		</div>
	);
};

export default FilterOptions;
