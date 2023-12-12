import { useEffect, useState } from 'react';
import FirebaseData from './FirebaseData';

export default function CarouselCard() {
	const [data, setData] = useState([]);
	const [random, setRandom] = useState(true);

	const handleFetchData = (fetchedData) => {
		setData(fetchedData);
	};

	useEffect(() => {
		setRandom(!random); // Ændr værdien for at udløse hentning af et tilfældigt datasæt
	}, [random]);

	return (
		<section>
			<FirebaseData onFetchData={handleFetchData} random={random} />
			{data.map((item) => (
				<div key={item.id} className='p-4'>
					<img src={item.imageUrl} alt='' />
					<p>{item.price}</p>
					<h3>{item.title}</h3>
				</div>
			))}
		</section>
	);
}
