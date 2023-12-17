// KODET AF KAROLINE LERCHE & SOFIE HYLLEN
// Import af nødvendige afhængigheder og aktiver.
import { Link } from 'react-router-dom'; // Komponent til at oprette links til andre sider.
import Product from '../components/Product'; // Komponent, der viser produkter.
import webshopHeader from '/src/assets/webshop-header.jpg'; // Billedet til toppen af webshopsiden.
import arrowRight from '/src/assets/arrow-right.svg'; // Pil-ikon til knappen.
import { useEffect } from 'react'; // Hook til at håndtere sideeffekter.
import { motion } from 'framer-motion'; // Framer Motion-bibliotek til animationer.
import { pageFade } from '../components/Animations'; // Animationskomponent.

// Hovedkomponenten for webshopsiden.
export default function WebshopPage() {
	// Hook, der sørger for, at siden starter fra toppen, når den renderes.
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Returnerer JSX for komponenten.
	return (
		<section>
			{/* Billedet øverst på siden */}
			<div className='absolute top-0 left-0 -z-50 h-72 md:h-auto'>
				<img
					src={webshopHeader}
					alt='Image of The moisturizer conditioner from Curology'
					className=' img-container rounded-none object-left max-h-full max-w-full'
				/>
			</div>
			<motion.div variants={pageFade} initial='hidden' animate='visible'>
				{/* Sektion med produktinformation */}
				<div className='flex justify-end'>
					<div className='w-1/2 pt-8 pl-6 md:pt-3 xl:pt-16'>
						{/* Overskrifter og tekst om produktet */}
						<h1 className='title3 text-sm pb-1 md:text-3xl md:pb-3 xl:text-4xl'>Nyhed</h1>
						<h2 className='title2 text-xl leading-none md:title2'>The moisturizer conditioner</h2>
						<h3 className='bodytext2 md:text-xl xl:text-3xl'>fra Curology</h3>
						{/* Knap til at købe produktet */}
						<Link
							to='/products/the_moisturizer_conditioner_curology'
							className='btn text-xxs py-1 px-3 mt-6 md:btn md:mt-10 xl:mt-20'>
							<button className='leading-none'>Køb nu</button>
							<img src={arrowRight} alt='arrow-right' />
						</Link>
					</div>
				</div>

				{/* Sektion med produkter */}
				<div className='mt-16 md:mt-20 xl:mt-44'>
					<Product />
				</div>
			</motion.div>
		</section>
	);
}
