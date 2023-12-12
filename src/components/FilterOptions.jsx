// FilterOptions.jsx
import React from 'react';

const FilterOptions = ({ onBrandChange, onPriceChange }) => {
	return (
		<div className='filter-options'>
			<h2>Filtrer efter:</h2>
			<div>
				<label>Mærke:</label>
				<select onChange={(e) => onBrandChange(e.target.value)}>
					<option value=''>Alle</option>
					<option value='Brand1'>Brand 1</option>
					<option value='Brand2'>Brand 2</option>
					{/* Tilføj flere mærker efter behov */}
				</select>
			</div>
			<div>
				<label>Prisområde:</label>
				<select onChange={(e) => onPriceChange(e.target.value)}>
					<option value=''>Alle</option>
					<option value='0-50'>0 - 50 kr.</option>
					<option value='50-100'>50 - 100 kr.</option>
					{/* Tilføj flere priskategorier efter behov */}
				</select>
			</div>
		</div>
	);
};

export default FilterOptions;
