import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer>
			<div className='grid grid-cols-2 heading3 pt-5 gap-y-5 md:pt-16 md:grid-cols-4 xl:grid-cols-5'>
				<div className='flex flex-col relative'>
					<h4>Nyhedsbrev</h4>
					<input
						className='placeholder-zinc-500 focus:outline-none transition-opacity focus:opacity-50 uppercase w-min'
						type='email'
						name='email'
						id='email'
						placeholder='Skriv din mail her'
					/>
					<button type='submit' className='btn absolute bottom-0 left-0 px-3 py-1 xl:px-5'>
						Tilmeld
					</button>
				</div>

				<div className='md:mx-auto'>
					<div className='flex flex-col items-end md:items-start'>
						<h4>Kontakt</h4>
						<a href='#' className='text-zinc-500 hover:text-inherit w-fit'>
							Instagram
						</a>
						<a href='#' className='text-zinc-500 hover:text-inherit w-fit'>
							Facebook
						</a>
						<a href='#' className='text-zinc-500 hover:text-inherit w-fit'>
							+45 98 48 99 11
						</a>
					</div>
				</div>

				<div className='flex justify-center items-center col-span-2 order-5 md:col-span-4 xl:col-span-1 xl:order-none'>
					<h1 className='heading1'>Logo</h1>
				</div>

				<div className='md:mx-auto'>
					<div className='flex flex-col'>
						<h4>Data</h4>
						<Link className='text-zinc-500 hover:text-inherit w-fit' to='/'>
							Persondata
						</Link>
						<Link className='text-zinc-500 hover:text-inherit w-fit' to='/'>
							Cookies
						</Link>
					</div>
				</div>

				<div className='text-right'>
					<h4>Åbningstider</h4>
					<div className='flex flex-col items-end text-zinc-500'>
						<p>Tir-Fre: 09-17:30</p>
						<p>Lør: 09-13</p>
						<p>Søn: Lukket</p>
						<p>Man: Lukket</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
