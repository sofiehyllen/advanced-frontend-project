import behandlingerHeader from '/src/assets/behandlinger-1.jpg';
import { IoChevronForwardSharp } from 'react-icons/io5';

export default function BehandlingerPage() {
	return (
		<section>
			<div className='md:flex'>
				<div className='md:order-2 md:w-5/6 md:pl-8 xl:w-2/3'>
					<h1 className='title1 md:title2'>Tid til forandring?</h1>
					<p className='bodytext1'>
						Opdag vores skønne klip og behandlinger og lad dig inspirere inden dit næste besøg hos
						Tryllespejlet - vores team står klar til at forvandle dit hår.
					</p>
				</div>
				<div className='w-full'>
					<img className='img-container pt-2' src={behandlingerHeader} alt='Woman' />
				</div>
			</div>

			<div>
				{/* Klip sektion */}
				<details className='group mt-5 md:mt-10'>
					<summary className='list-none'>
						<div className='flex items-center cursor-pointer w-fit space-x-3'>
							<h2 className='title2 md:title3 '>Klip</h2>
							<IoChevronForwardSharp className='text-2xl md:text-4xl xl:text-6xl group-open:rotate-90 transition-transform shrink-0' />
						</div>
						<div className='h-line m-0 md:mt-2'></div>
					</summary>

					<div className='pl-4 pr-28 py-5 space-y-5 md:p-0 md:space-y-0 md:py-10 md:pl-10 md:grid md:grid-cols-2 md:gap-y-12 xl:gap-y-20 xl:py-16'>
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

				{/* Farve sektion */}
				<details className='group mt-5  md:mt-10 xl:mt-12'>
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

				{/* Styling sektion */}
				<details className='group mt-5  md:mt-10 xl:mt-12'>
					<summary className='list-none'>
						<div className='flex items-center cursor-pointer w-fit space-x-3'>
							<h2 className='title2 md:title3'>Styling</h2>
							<IoChevronForwardSharp className='text-2xl md:text-4xl xl:text-6xl group-open:rotate-90 transition-transform shrink-0' />
						</div>
						<div className='h-line m-0 md:mt-2'></div>
					</summary>

					<div className='pl-4 pr-28 py-5 space-y-5 md:p-0 md:space-y-0 md:py-10 md:pl-10 md:grid md:grid-cols-2 md:gap-y-12 xl:gap-y-20 xl:py-16'>
						<div className='md:w-2/3  xl:pl-16'>
							<h3 className='heading1 pb-1 md:pb-2 xl:p-0'>Permanent</h3>
							<p className='bodytext2'>Inklusiv klip</p>
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
							<h3 className='heading1 pb-1 md:pb-2 xl:p-0'>Hårkur</h3>
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
			</div>
		</section>
	);
}
