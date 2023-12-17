// KODET AF KAROLINE LERCHE & SOFIE HYLLEN
// Import af nødvendige afhængigheder og aktiver.
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import FirebaseData from '../components/FirebaseData';
import { motion } from 'framer-motion';
import { pageFade } from '../components/Animations';


// Hovedkomponenten for produktssiden.
export default function ProductPage() {
	const [product, setProduct] = useState({}); // State til at opbevare produktdata.
	const { id } = useParams(); // Henter produktets id fra URL-parametrene.

	// Funktion til at håndtere produktdata og opdaterer produktet, der matcher det givne id.
	const handleProductData = (data) => {
		const selectedProduct = data.find((item) => item.id === id);
		setProduct(selectedProduct || {});
	};

	// Returnerer JSX
	return (
		<motion.section variants={pageFade} initial='hidden' animate='visible'>

			{<FirebaseData onFetchData={handleProductData} />} {/* Henter produktdata fra Firebase. */}
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'> {/* Grid-layout for produktinformation */}
       {/* Produktinformation og billede */}

				<div className='mb-3 md:hidden'>
					<h2 className='title1'>{product.title}</h2>
					<h6 className='bodytext2 text-base'>{product.brand}</h6>
				</div>
				<div>
					<img
						src={product.productImageUrl || product.imageUrl}
						alt={`Image of ${product.title}`}
						className='img-container md:row-span-2 md:order-2'
					/>
				</div>
				{/* Mere produktinformation og knap til at tilføje til indkøbskurven */}
				<div className='md:order-first md:pr-12'>
					<div className='hidden md:block '>
						<h2 className='title1 xl:title3'>{product.title}</h2>
						<h6 className='bodytext2 text-xl'>{product.brand}</h6>
					</div>
					<div className='pt-3'>
						{/* Viser produktbeskrivelse, hvis den er tilgængelig */}
						{product.description && (
							<>
								{product.description.split('\\n').map((paragraph, index) => (
									<p key={index} className='bodytext1 text-base py-2'>
										{paragraph}
									</p>
								))}
							</>
						)}
					</div>
					{/* Pris og knap til indkøbskurven */}
					<div className='flex space-x-6 my-5 md:space-x-12 xl:order-last'>
						<h1 className='title1 pb-2 md:pb-4 md:title3 xl:text-5xl'>{product.price} kr.</h1>
						{/* Snipcart-knap til at tilføje til indkøbskurven */}
						<button
							className='snipcart-add-item btn '
							data-item-id={product.id}
							data-item-image={product.imageUrl}
							data-item-name={product.title}
							data-item-url={product.url}
							data-item-price={product.price}>
							Tilføj til kurv
						</button>
					</div>
				</div>
				{/* Ikon for hjerte og yderligere produktinformation */}
				<div className='order-last md:mt-5 md:col-start-2 xl:col-start-auto xl:order-3 xl:row-span-2 xl:flex xl:flex-col xl:justify-end xl:pl-10'>

					<div className=''>
						{/* Viser brandbeskrivelse, hvis den er tilgængelig */}
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
			<div className='h-line'></div> {/* Horisontal linje til adskillelse af sektioner. */}
		</motion.section>
	);
}
