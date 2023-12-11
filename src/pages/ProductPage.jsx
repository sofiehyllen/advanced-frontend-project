import React from 'react';
import { useParams } from 'react-router-dom';
import products from '/products.json'; // Juster stien baseret på din projektstruktur

export default function ProductPage() {
	const { id } = useParams();
	const product = products.find((product) => product.id === id);

	if (!product) {
		return <p>Produktet blev ikke fundet</p>;
	}

	return (
		<div className='flex space-x-10'>
			<img src={product.imageUrl} alt='' />
			<div>
				<h1>{product.price} kr.</h1>
				<h2>{product.name}</h2>
				<p>{product.description}</p>
				<button
					className='snipcart-add-item btn'
					data-item-id={product.id}
					data-item-image={product.imageUrl}
					data-item-name={product.name}
					data-item-url={product.url}
					data-item-price={product.price}>
					Tilføj til kurv
				</button>
			</div>
		</div>
	);
}
