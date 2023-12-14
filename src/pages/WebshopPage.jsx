import { Link } from 'react-router-dom';
import Product from '../components/Product';
import webshopHeader from '/src/assets/webshop-header.jpg';
import arrowRight from '/src/assets/arrow-right.svg';
import { useEffect, useState } from 'react';

export default function WebshopPage() {
	// Hook som sørger for at siden starter fra toppen når den renderes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section>
			<div className='flex justify-end'>
				<div className='absolute top-0 left-0 -z-50 h-72 md:h-auto'>
					<img
						src={webshopHeader}
						alt='Image of The moisturizer conditioner from Curology'
						className=' img-container rounded-none object-left max-h-full max-w-full'
					/>
				</div>
				<div className='w-1/2 pt-8 pl-6 md:pt-3 xl:pt-16'>
					<h1 className='title3 text-sm pb-1 md:text-3xl md:pb-3 xl:text-4xl'>Nyhed</h1>
					<h2 className='title2 text-xl leading-none md:title2'>The moisturizer conditioner</h2>
					<h3 className='bodytext2 md:text-xl xl:text-3xl'>fra Curology</h3>
					<Link
						to='/products/the_moisturizer_conditioner_curology'
						className='btn text-xxs py-1 px-3 mt-6 md:btn md:mt-10 xl:mt-20'>
						<button className='leading-none'>Køb nu</button>
						<img src={arrowRight} alt='arrow-right' />
					</Link>
				</div>
			</div>

			<div className='mt-16 md:mt-20 xl:mt-44'>
				<Product />
			</div>
		</section>
	);
}
