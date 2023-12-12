import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FirebaseData from '../components/FirebaseData';
import { IoMdHeartEmpty } from 'react-icons/io';

export default function ProductPage() {
	const [product, setProduct] = useState({});
	const { id } = useParams();

	const handleProductData = (data) => {
		// Opdaterer produktdata, find det produkt, der matcher id'et
		const selectedProduct = data.find((item) => item.id === id);
		setProduct(selectedProduct || {});
	};

	return (
		<section>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
				<FirebaseData onFetchData={handleProductData} />
				<img
					className='img-container order-2 md:row-span-2 md:order-2'
					src={product.imageUrl}
					alt={`Image of ${product.title}`}
				/>
				<div className='order-first md:order-first'>
					<h2 className='title1 pb-2 md:pb-4 xl:title3'>{product.title}</h2>
					<div className='pb-5'>
						{product.description && (
							<>
								{product.description.split('\\n').map((paragraph, index) => (
									<p key={index} className='bodytext1 py-2 md:pr-12'>
										{paragraph}
									</p>
								))}
							</>
						)}
					</div>
				</div>
				<div className='order-3 xl:order-last pt-7'>
					<h1 className='title1 pb-2 md:pb-4 md:title3 xl:text-5xl'>{product.price} kr.</h1>
					<button
						className='snipcart-add-item btn '
						data-item-id={product.id}
						data-item-image={product.imageUrl}
						data-item-name={product.name}
						data-item-url={product.url}
						data-item-price={product.price}>
						Tilføj til kurv
					</button>
				</div>

				<div className='order-last pt-10 md:col-start-2 xl:col-start-auto xl:order-3 xl:row-span-2 xl:flex xl:flex-col xl:justify-end xl:pl-10'>
					<IoMdHeartEmpty className='text-4xl md:text-5xl' />
					<div className=''>
						{product.brandDescription && (
							<>
								{product.brandDescription.split('\\n').map((paragraph, index) => (
									<p key={index} className='heading3 pt-3 xl:text-base'>
										{paragraph}
									</p>
								))}
							</>
						)}
					</div>
				</div>
			</div>
			<div className='h-line'></div>
		</section>
	);
}
