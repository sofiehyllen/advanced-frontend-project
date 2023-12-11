import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { webshopDatabase } from '/src/firebaseConfig.js';
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';
import { TbShoppingBagPlus } from 'react-icons/tb';

export default function Product() {
	const [data, setData] = useState([]);
	const [sorting, setSorting] = useState('title');

	useEffect(() => {
		async function fetchData() {
			//onSnapshop opdager om der er ændringer i vores databse
			onSnapshot(collection(webshopDatabase, 'products'), (data) => {
				const docs = [];
				data.forEach((doc) => {
					//Et loop som indeholder objekterners data udfra dokumentets id
					docs.push({ id: doc.id, ...doc.data() });
				});

				//function som sorterer på enten værdien af prisen eller værdien af varenavnet
				docs.sort(function (a, b) {
					if (a[sorting] < b[sorting]) {
						return -1;
					}
					if (a[sorting] > b[sorting]) {
						return 1;
					}
					return 0;
				});
				setData(docs);
			});
		}
		fetchData();
	}, [sorting]);

	// De følgende to funktioner skifter sorteringsfelt.
	function sortingTitle() {
		setSorting('title');
	}

	function sortingPrice() {
		setSorting('price');
	}

	return (
		<div>
			<button type='button' onClick={sortingPrice}>
				Sorter efter pris
			</button>
			<button type='button' onClick={sortingTitle}>
				Sorter efter navn
			</button>

			<div className='grid grid-cols-2'>
				{data.map((item) => (
					<div key={item.id} className='relative'>
						<Link to={`/products/${item.id}`} className='w-fit'>
							<div className='bg-black '>
								<img src={item.imageUrl} alt={`Image of ${item.title}`} />
							</div>
						</Link>
						<div className='heading3 absolute bottom-0 left-0 p-4'>
							<span>{item.price} kr.</span>
							<h3>{item.title}</h3>
						</div>
						<div className='absolute top-0 right-0'>
							<IoMdHeartEmpty size={60} className='pt-3 pr-3 ' />
						</div>

						<button
							className='snipcart-add-item absolute bottom-0 right-0 '
							data-item-id={item.id}
							data-item-image={item.imageUrl}
							data-item-name={item.title}
							data-item-url={item.url}
							data-item-price={item.price}>
							<TbShoppingBagPlus size={60} className='stroke-1.5 pb-3 pr-3' />
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
