import { useEffect } from 'react';
import arrowRightUp from '/src/assets/arrow-right-up.svg';
import arrowRight from '/src/assets/arrow-right.svg';
import home1 from '/src/assets/home-1.jpg';
import home2 from '/src/assets/home-2.jpg';
import homeWebshop1 from '/src/assets/home-webshop1.jpg';
import homeWebshop2 from '/src/assets/home-webshop2.jpg';
import homeWebshop3 from '/src/assets/home-webshop3.jpg';
import homeWebshop4 from '/src/assets/home-webshop4.jpg';

import icon1 from '/src/assets/icon1.png';
import icon2 from '/src/assets/icon2.png';
import icon3 from '/src/assets/icon3.png';

import { Link } from 'react-router-dom';

export default function HomePage() {
	// Hook som sørger for at siden starter fra toppen når den renderes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section>
			<div className='md:flex'>
				<div className='md:order-2 md:pl-5 xl:w-full'>
					<img className='img-container' src={home1} alt='Woman' />
				</div>
				<div className='pt-5 md:p-0'>
					<h1 className='title1'>Oplev forskel hos din lokale frisør</h1>
					<p className='bodytext1 xl:w-2/3 pt-5'>
						Hos Tryllespejlet får du professionelle stylister, som forstår din stil - og vi står vi klar til
						at skabe præcis det look, du drømmer om
					</p>
					<Link to='/behandlinger' className='btn mt-5 xl:mt-10'>
						<button className='leading-none'>Book tid</button>
						<img src={arrowRightUp} alt='arrow-right' />
					</Link>
				</div>
			</div>

			<div className='h-line'></div>

			<div className='md:flex xl:w-11/12 xl:mx-auto'>
				<div
					className='bg-cover bg-right rounded-img-sm p-5 pl-7 mb-5 md:m-0 md:p-8 md:w-9/12 xl:w-1/2 xl:p-12'
					style={{ backgroundImage: `url(${home2})` }}>
					<h3 className='title2 w-1/2 md:title3'>Se alle vores priser og behandlinger</h3>
					<Link to='/behandlinger' className='btn my-5 md:mt-28 xl:mt-26 xl:mb-0'>
						<button className='leading-none'>Se mere</button>
						<img src={arrowRight} alt='arrow-right' />
					</Link>
				</div>

				<div className='v-line'></div>

				<div>
					<h6 className='heading3 pb-2 xl:pb-4'>Behandlinger</h6>
					<div className='flex '>
						<div className='w-fit'>
							<div className='hidden md:flex justify-center items-center border border-black rounded-full h-6 w-6 xl:h-9 xl:w-9'>
								<p className='heading3 text-xs xl:text-xl w-fit'>01</p>
							</div>
						</div>
						<div className='w-fit border-b border-black pb-7 md:ml-3 xl:pb-14'>
							<h4 className='heading1 leading-none'>Klip</h4>
							<p className='bodytext1 pr-2 pt-1'>
								Nyd en skræddersyet klipbehandling, hvor vores erfarne stylister bringer din personlige
								stil til live.
							</p>
						</div>
						<div className='w-1/5'>
							<img src={icon1} alt='scissor icon' />
						</div>
					</div>

					<div className='flex my-7 xl:my-16'>
						<div className='w-fit'>
							<div className='hidden md:flex justify-center items-center border border-black rounded-full h-6 w-6 xl:h-9 xl:w-9'>
								<p className='heading3 text-xs xl:text-xl w-fit'>02</p>
							</div>
						</div>
						<div className='w-fit border-b border-black pb-7 md:ml-3 xl:pb-14'>
							<h4 className='heading1 leading-none'>Farve</h4>
							<p className='bodytext1 pr-2 pt-1 xl:w-5/6'>
								Nyd en personlig farvebehandling, hvor vi skaber den perfekte nuance til at
								komplimentere din unikke stil.
							</p>
						</div>
						<div className='w-1/5'>
							<img src={icon2} alt='comb icon' />
						</div>
					</div>

					<div className='flex '>
						<div className='w-fit'>
							<div className='hidden md:flex justify-center items-center border border-black rounded-full h-6 w-6 xl:h-9 xl:w-9'>
								<p className='heading3 text-xs xl:text-xl w-fit'>03</p>
							</div>
						</div>
						<div className='w-fit md:ml-3'>
							<h4 className='heading1 leading-none'>Behandlinger</h4>
							<p className='bodytext1 pr-2 pt-1'>
								Gå på opdagelse i vores forskellige behandlinger udført af vores dygtige kosmetolog.
							</p>
						</div>
						<div className='w-1/5'>
							<img src={icon3} alt='mirror icon' />
						</div>
					</div>
				</div>
			</div>

			<div className='h-line'></div>

			<div className='md:flex md:space-x-5'>
				<div className='bodytext1 md:w-1/2 xl:w-2/5'>
					<h1 className='title1 md:title2'>Nyt i vores Webshop</h1>
					<p className='py-3 md:pt-3 xl:pb-10 xl:pt-6'>
						Træd ind i vores virtuelle frisørverden! Udforsk vores webshop, hvor du finder eksklusive
						hårprodukter og stylingredskaber håndplukket af vores erfarne stylister.
					</p>
					<p>Skab salonkvalitet derhjemme og få en frisk, moderne stil med vores nøje udvalgte sortiment.</p>
					<Link to='/webshop' className='btn mt-5 mb-7 xl:mt-20'>
						<button className='leading-none'>Til webshop</button>
						<img src={arrowRight} alt='arrow-right' />
					</Link>
				</div>

				<div className='grid grid-cols-2 gap-2 md:gap-4 md:w-3/5'>
					<img className='img-container-sm ' src={homeWebshop1} alt='Produkt' />
					<img className='img-container-sm ' src={homeWebshop2} alt='Produkt' />
					<img className='img-container-sm ' src={homeWebshop3} alt='Produkt' />
					<img className='img-container-sm ' src={homeWebshop4} alt='Produkt' />
				</div>
			</div>
		</section>
	);
}
