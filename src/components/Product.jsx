import { Link } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';
import { TbShoppingBagPlus } from 'react-icons/tb';

import FirebaseData from './FirebaseData';
import { useState, useEffect } from 'react';
import SortingDropdown from './SortingDropdown';

export default function Product() {
	const [data, setData] = useState([]);
	const [sorting, setSorting] = useState('title');
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleFetchData = (fetchedData) => {
		fetchedData.sort((a, b) => {
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
		setData(fetchedData);
	};
	function handleSortingPriceLowHigh() {
		setSorting('price');
	}

	function handleSortingPriceHighLow() {
		setSorting('price_reverse');
	}

	function handleSortingTitleAZ() {
		setSorting('title');
	}

	function handleSortingTitleZA() {
		setSorting('title_reverse');
	}

	const closeDropdown = () => {
		setDropdownOpen(false);
	};

	return (
		<div className='relative'>
			<FirebaseData onFetchData={handleFetchData} />
			<SortingDropdown
				data={data}
				onSortingTitleAZ={handleSortingTitleAZ}
				onSortingTitleZA={handleSortingTitleZA}
				onSortingPriceHighLow={handleSortingPriceHighLow}
				onSortingPriceLowHigh={handleSortingPriceLowHigh}
				closeDropdown={closeDropdown}
			/>
			<div className='flex justify-end'>
				<div className='grid grid-cols-2 gap-3 md:w-3/4 xl:w-2/3'>
					{data.map((item) => (
						<div key={item.id} className='relative'>
							<Link to={`/products/${item.id}`} className='w-fit'>
								<div className='bg-black '>
									<img src={item.imageUrl} alt={`Image of ${item.title}`} />
								</div>
							</Link>
							<div className='heading3 absolute bottom-0 left-0 p-2 leading-none text-xxs space-y-1 md:space-y-0 md:p-4 md:text-lg xl:text-xl'>
								<span>{item.price} kr.</span>
								<h3>{item.title}</h3>
							</div>
							<div className='absolute top-0 right-0'>
								<IoMdHeartEmpty className='pt-2 pr-2 text-3xl md:pt-4 md:pr-4 md:text-6xl' />
							</div>

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
	);
}