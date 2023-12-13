// SortComponent.js
import React, { useEffect, useRef, useState } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';

export default function SortingDropdown({
	onSortingTitleAZ,
	onSortingTitleZA,
	onSortingPriceHighLow,
	onSortingPriceLowHigh,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSorting, setActiveSorting] = useState('A - Z');
	const dropdownRef = useRef(null);

	const handleSortingPriceLowHigh = () => {
		onSortingPriceLowHigh();
		setActiveSorting('PRICE LOW - HIGH');
		setIsOpen(false);
	};

	const handleSortingPriceHighLow = () => {
		onSortingPriceHighLow();
		setActiveSorting('PRICE HIGH - LOW');
		setIsOpen(false);
	};

	const handleSortingTitleAZ = () => {
		onSortingTitleAZ();
		setActiveSorting('A - Z');
		setIsOpen(false);
	};

	const handleSortingTitleZA = () => {
		onSortingTitleZA();
		setActiveSorting('Z - A');
		setIsOpen(false);
	};

	return (
		<div className='relative flex items-center justify-end pb-3 z-40 heading3 text-xs md:text-base'>
			<p className='  xl:text-xl'>Sorter: </p>
			<button
				type='button'
				className='inline-flex items-center justify-center pl-3 py-1  xl:text-xl focus:outline-none'
				onClick={() => setIsOpen(!isOpen)}>
				{activeSorting}
				<IoChevronDownSharp className='ml-2' />
			</button>

			{isOpen && (
				<div className='absolute right-0 top-8 space-y-3 bg-white shadow-md heading3 text-xs p-5 md:text-sm'>
					<button onClick={handleSortingTitleAZ} className='block w-full text-left'>
						A - Z
					</button>
					<button onClick={handleSortingTitleZA} className='block w-full text-left'>
						Z - A
					</button>
					<button onClick={handleSortingPriceHighLow} className='block w-full text-left'>
						PRICE HIGH - LOW
					</button>
					<button onClick={handleSortingPriceLowHigh} className='block w-full text-left'>
						PRICE LOW - HIGH
					</button>
				</div>
			)}
		</div>
	);
}
