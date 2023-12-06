import behandlingerKvinde from '/src/assets/behandlinger-1.jpg';
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
					<img className='img-container pt-2' src={behandlingerKvinde} alt='Woman' />
				</div>
			</div>

			<h1 className='title1 mt-56'>Title 1</h1>
			<h2 className='title2'>Title 2</h2>
			<h3 className='title3'>Title 3</h3>
			<h4 className='heading1'>Heading 1</h4>
			<h5 className='heading2'>Heading 2</h5>
			<h6 className='heading3'>Heading 3</h6>
			<p className='bodytext1'>Bodytext 1</p>
			<p className='bodytext2'>Bodytext 2</p>
		</section>
	);
}
