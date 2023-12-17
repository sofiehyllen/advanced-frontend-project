// KODET AF KAROLINE LERCHE & SOFIE HYLLEN

// Denne fil indeholder en React-komponent for BehandlingerPage
// Komponenten viser klip, farve, inspiration, styling, kurbehandlinger og bookingoplysninger

import { Link } from 'react-router-dom'; // Importer Link fra 'react-router-dom' til navigation
import behandlinger1 from '/src/assets/behandlinger-1.jpg';
import behandlinger2 from '/src/assets/behandlinger-2.jpg';
import behandlinger3 from '/src/assets/behandlinger-3.jpg';
import arrowRight from '/src/assets/arrow-right.svg';
import arrowRightUp from '/src/assets/arrow-right-up.svg';

import { IoChevronForwardSharp } from 'react-icons/io5'; // Importer Ikoner fra 'react-icons'
import { pageFade } from '../components/Animations'; // Importer pageFade-animationen fra 'Animations'
import { motion } from 'framer-motion'; // Importer motion fra 'framer-motion' til animationer
import { useEffect } from 'react'; // Importer useEffect fra 'react' til hooks



// BehandlingerPage-komponenten
export default function BehandlingerPage() {
	// Hook som sørger for at siden starter fra toppen når den renderes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<motion.section variants={pageFade} initial='hidden' animate='visible'>
			<div className='md:flex'>
				<div className='md:order-2 md:w-5/6 md:pl-8 xl:w-2/3'>
					<h1 className='title1 md:title2'>Tid til forandring?</h1>
					<p className='bodytext1'>
						Opdag vores skønne klip og behandlinger og lad dig inspirere inden dit næste besøg hos Tryllespejlet -
						vores team står klar til at forvandle dit hår.
					</p>
				</div>
				<div className='w-full'>
					<img className='img-container pt-2' src={behandlinger1} alt='Woman' />
				</div>
			</div>

			<div>
				{/*--- Klip sektion ---*/}
				<details className='group mt-5 md:mt-10'>
					<summary className='list-none'>
						<div className='flex items-center cursor-pointer w-fit space-x-3'>
							<h2 className='title2 md:title3 '>Klip</h2>
							<IoChevronForwardSharp className='text-2xl md:text-4xl xl:text-6xl group-open:rotate-90 transition-transform shrink-0' />
						</div>
						<div className='h-line m-0 md:mt-2'></div>
					</summary>

					<div className=' pl-4 pr-28 py-5 space-y-5 md:p-0 md:space-y-0 md:py-10 md:pl-10 md:grid md:grid-cols-2 md:gap-y-12 xl:gap-y-20 xl:py-16'>
						<div className='md:w-2/3  xl:pl-16'>
							<h3 className='heading1 pb-1 md:pb-2 xl:p-0'>Dameklip</h3>
							<div className='flex justify-between bodytext1 text-sm p-0 md:bodytext1 xl:pt-3'>
								<div>
									<p>Alm. klip</p>
									<p>Alm. klip + hårkur</p>
									<p>Langt til kort hår</p>
									<p>Klip af pandehår</p>
								</div>
								<div>
									<p>379 kr.</p>
									<p>449 kr.</p>
									<p>420 kr.</p>
									<p>49 kr.</p>
								</div>
							</div>
						</div>

						<div className='md:w-2/3  xl:pl-16'>
							<h3 className='heading1 pb-1 md:pb-2 xl:p-0'>Herreklip</h3>
							<div className='flex justify-between bodytext1 text-sm p-0 md:bodytext1 xl:pt-3'>
								<div>
									<p>Satelit klip</p>
									<p>Maskin klip</p>
								</div>
								<div>
									<p>259 kr.</p>
									<p>299 kr.</p>
								</div>
							</div>
						</div>

						<div className='md:w-2/3 xl:pl-16'>
							<h3 className='heading1 pb-1 md:pb-2 xl:p-0'>Børneklip</h3>
							<div className='flex justify-between bodytext1 text-sm p-0 md:bodytext1 xl:pt-3'>
								<div>
									<p>0-6 år</p>
									<p>7-13 år</p>
								</div>
								<div>
									<p>220 kr.</p>
									<p>260 kr.</p>
								</div>
							</div>
						</div>
					</div>
					<div className='h-line m-0'></div>
				</details>

				{/*--- Farve sektion ---*/}
				<details className='group mt-5 md:mt-12 xl:mt-20'>
					<summary className='list-none'>
						<div className='flex items-center cursor-pointer w-fit space-x-3'>
							<h2 className='title2 md:title3 '>Farve</h2>
							<IoChevronForwardSharp className='text-2xl md:text-4xl xl:text-6xl group-open:rotate-90 transition-transform shrink-0' />
						</div>
						<div className='h-line m-0 md:mt-2'></div>
					</summary>

					<div className='pl-4 pr-28 py-5 space-y-5 md:p-0 md:space-y-0 md:py-10 md:pl-10 md:grid md:grid-cols-2 md:gap-y-12 xl:gap-y-20 xl:py-16'>
						<div className='md:w-2/3  xl:pl-16'>
							<h3 className='heading1 pb-1 md:pb-2 xl:p-0'>Striber</h3>
							<div className='flex justify-between bodytext1 text-sm p-0 md:bodytext1 xl:pt-3'>
								<div>
									<p>Kort hår</p>
									<p>Page hår</p>
									<p>Lang hår</p>
									<p className='pt-3 xl:pt-5'>Baylage</p>
								</div>
								<div>
									<p>460 kr.</p>
									<p>570 kr.</p>
									<p>725 kr.</p>
									<p className='pt-3 xl:pt-5'>799 kr.</p>
								</div>
							</div>
						</div>

						<div className='md:w-2/3  xl:pl-16'>
							<h3 className='heading1 pb-1 md:pb-2 xl:p-0'>Helfarve</h3>
							<div className='flex justify-between bodytext1 text-sm p-0 md:bodytext1 xl:pt-3'>
								<div>
									<p>Kort hår</p>
									<p>Page hår</p>
									<p>Lang hår</p>
									<p className='pt-3 xl:pt-5'>Bundfarve</p>
								</div>
								<div>
									<p>420 kr.</p>
									<p>449 kr.</p>
									<p>520 kr.</p>
									<p className='pt-3 xl:pt-5'>380 kr.</p>
								</div>
							</div>
						</div>
					</div>
					<div className='h-line m-0'></div>
				</details>

				{/*---Inspiration sektion ---*/}
				<div className='my-10 md:flex md:my-16 md:px-8 xl:w-5/6 xl:mx-auto xl:my-20'>
					<div className='md:order-2 md:pl-5 xl:w-full'>
						<img className='img-container' src={behandlinger2} alt='Image of Lume hair mask' />
					</div>
					<div className='pt-5 md:p-0 xl:w-5/6'>
						<p className='heading3'>Inspiration</p>
						<h1 className='title2 md:title3 md:pt-2'>Opdag den perfekte pleje</h1>
						<p className='bodytext1 pt-3'>
							Udforsk vores webshop og find skræddersyede produkter som passer præcist til dit hår.
						</p>

						<p className='bodytext1 pt-3'>
							Giv dit hår den kærlighed det fortjener med vores eksklusive udvalg af shampoo, balsam, hårkur og
							meget mere.
						</p>

						<Link to='/webshop' className='btn mt-5 xl:mt-16'>
							<button className='leading-none'>Til webshop</button>
							<img src={arrowRight} alt='arrow-right' />
						</Link>
					</div>
				</div>

				{/*--- Styling sektion ---*/}
				<details className='group mt-5 md:mt-12 xl:mt-20'>
					<summary className='list-none'>
						<div className='flex items-center cursor-pointer w-fit space-x-3'>
							<h2 className='title2 md:title3'>Styling</h2>
							<IoChevronForwardSharp className='text-2xl md:text-4xl xl:text-6xl group-open:rotate-90 transition-transform shrink-0' />
						</div>
						<div className='h-line m-0 md:mt-2'></div>
					</summary>

					<div className='pl-4 pr-28 pb-5 pt-6 space-y-5 md:p-0 md:space-y-0 md:py-10 md:pl-10 md:grid md:grid-cols-2 md:gap-y-12 xl:gap-y-20 xl:py-16'>
						<div className='md:w-2/3  xl:pl-16'>
							<h3 className='heading1 leading-none'>Permanent</h3>
							<p className='bodytext2 pb-2'>Inklusiv klip</p>
							<div className='flex justify-between bodytext1 text-sm p-0 md:bodytext1 xl:pt-3'>
								<div>
									<p>Kort hår</p>
									<p>Page hår</p>
									<p>Lang hår</p>
								</div>
								<div>
									<p>799 kr.</p>
									<p>849 kr.</p>
									<p>929 kr.</p>
								</div>
							</div>
						</div>

						<div className='md:w-2/3  xl:pl-16'>
							<h3 className='heading1 pb-1 md:pb-2 xl:p-0'>Vask og føntørring</h3>
							<div className='flex justify-between bodytext1 text-sm p-0 md:bodytext1 xl:pt-3'>
								<div>
									<p>Kort hår</p>
									<p>Page hår</p>
									<p>Lang hår</p>
								</div>
								<div>
									<p>199 kr.</p>
									<p>249 kr.</p>
									<p>279 kr.</p>
								</div>
							</div>
						</div>

						<div className='md:w-2/3  xl:pl-16'>
							<h3 className='heading1 leading-none'>Hårkur</h3>
							<p className='bodytext2 pb-2'>
								Forny dit hår med vores INNERENSE hårkur. Behandlingen indebærer vask, en detox maske og en
								hydrate maske. Derudover får du hovedbundsmassage og behandlingen afsluttes med en let styling.
							</p>
							<div className='flex justify-between bodytext1 text-sm pt-3 xl:pt-5 md:bodytext1'>
								<p>INNERENSE hårkur</p>
								<p>925 kr.</p>
							</div>
						</div>
					</div>
					<div className='h-line m-0'></div>
				</details>

				{/*--- Kur sektion ---*/}
				<details className='group mt-5 md:mt-12 xl:mt-20'>
					<summary className='list-none'>
						<div className='flex items-center cursor-pointer w-fit space-x-3'>
							<h2 className='title2 md:title3 '>Kurbehandlinger</h2>
							<IoChevronForwardSharp className='text-2xl md:text-4xl xl:text-6xl group-open:rotate-90 transition-transform shrink-0' />
						</div>
						<div className='h-line m-0 md:mt-2'></div>
					</summary>

					<div className='pl-4 pr-28 py-5 space-y-5 md:p-0 md:space-y-0 md:py-10 md:pl-10 md:grid md:grid-cols-2 md:gap-y-12 xl:gap-y-20 xl:py-16'>
						<div className='md:w-2/3  xl:pl-16'>
							<h3 className='heading1 pb-1 md:pb-2 xl:p-0'>Bryn og vipper</h3>
							<div className='bodytext1 text-sm md:bodytext1 xl:pt-3'>
								<div className='flex justify-between leading-none pt-1'>
									<div>
										<p className=''>Farve af bryn</p>
										<p className='bodytext2'>Inkl. tilretning</p>
									</div>
									<p>149 kr.</p>
								</div>
								<div className='flex justify-between pt-1'>
									<p>Farve af vipper</p>
									<p>99 kr.</p>
								</div>
								<div className='flex justify-between leading-none pt-2'>
									<div>
										<p className=''>Farve af bryn og vipper</p>
										<p className='bodytext2'>Inkl. tilretning</p>
									</div>
									<p>199 kr.</p>
								</div>
							</div>
						</div>

						<div className='md:w-2/3  xl:pl-16'>
							<h3 className='heading1 pb-1 md:pb-2 xl:p-0'>Hænder og fødder</h3>
							<div className='flex justify-between bodytext1 text-sm p-0 md:bodytext1 xl:pt-3'>
								<div>
									<p>Manicure</p>
									<p>Pedicure</p>
									<p>Fodbehandling</p>
								</div>
								<div>
									<p>299 kr.</p>
									<p>369 kr.</p>
									<p>369 kr.</p>
								</div>
							</div>
						</div>

						<div className='md:w-2/3 xl:pl-16'>
							<h3 className='heading1 pb-1 md:pb-2 xl:p-0'>Ansigt</h3>
							<div className='flex justify-between bodytext1 text-sm p-0 md:bodytext1 xl:pt-3'>
								<div>
									<p>Oxygenbehandling</p>
									<p>Deluxe Cleopatra</p>
									<p>Deluxe dybderens</p>
									<p>Japansk lifting</p>
								</div>
								<div>
									<p>699 kr.</p>
									<p>595 kr.</p>
									<p>425 kr.</p>
									<p>575 kr.</p>
								</div>
							</div>
						</div>

						<div className='md:w-2/3 xl:pl-16'>
							<h3 className='heading1 pb-1 md:pb-2 xl:p-0'>Krop</h3>
							<div className='flex justify-between bodytext1 text-sm p-0 md:bodytext1 xl:pt-3'>
								<div>
									<p>Hotstone kropsmassage</p>
									<p>Hotstone rygmassage</p>
									<p>Stone body relax</p>
								</div>
								<div>
									<p>525 kr.</p>
									<p>369 kr.</p>
									<p>850 kr.</p>
								</div>
							</div>
						</div>

						<div className='md:w-2/3 xl:pl-16'>
							<h3 className='heading1 pb-1 md:pb-2 xl:p-0'>Voks</h3>
							<div className='flex justify-between bodytext1 text-sm p-0 md:bodytext1 xl:pt-3'>
								<div>
									<p>Overlæbe</p>
									<p>Armhuler</p>
									<p>Halve ben</p>
									<p>Hele ben</p>
									<p>Bikinilinje</p>
									<p>Ryg</p>
								</div>
								<div>
									<p>80 kr.</p>
									<p>175 kr.</p>
									<p>279 kr.</p>
									<p>375 kr.</p>
									<p>249 kr.</p>
									<p>299 kr.</p>
								</div>
							</div>
						</div>
					</div>
					<div className='h-line m-0'></div>
				</details>

				{/*---Inspiration sektion ---*/}
				<div className='my-10 md:flex md:justify-center md:space-x-10 md:my-16 xl:my-20 xl:space-x-20'>
					<div className='h-72 xl:h-auto xl:w-1/4'>
						<img
							className='img-container max-h-full max-w-full object-top'
							src={behandlinger3}
							alt='Image of Lume hair mask'
						/>
					</div>
					<div className='pt-5 md:p-0 md:w-2/5'>
						<p className='heading3'>Inspiration</p>
						<h1 className='title2 md:title3 md:pt-2'>Klar til et nyt look?</h1>
						<p className='bodytext1 pt-3'>
							Book din næste tid med det samme, og glæd dig til at få fornyet din stil!
						</p>

						<div className='btn mt-5 xl:mt-16'>
							<a href='https://trylle-spejlet.bestilling.nu/'>Book tid</a>
							<img src={arrowRightUp} alt='arrow-right' />
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
