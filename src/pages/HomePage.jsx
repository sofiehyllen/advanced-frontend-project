import arrowRightUp from '/Users/SofieHyllen/Dokumenter/3. sem. eks/advanced-frontend-project/advanced-frontend-project/src/assets/arrow-right-up.svg';

import { Link } from 'react-router-dom';

export default function HomePage() {
	return (
		<section>
			<h1 className='title1'>Title 1</h1>
			<h2 className='title2'>Title 2</h2>
			<h3 className='title3'>Title 3</h3>
			<h3 className='heading1'>Heading 1</h3>
			<h4 className='heading2'>Heading 2</h4>

			<p className='bodytext1'>Bodytext 1</p>
			<p className='bodytext2'>Bodytext 2</p>

			<Link to='/behandlinger' className='btn text-xs flex items-center px-2 py-1 md:px-4 md:py-2 xl:px-10 xl:py-3'>
				<button className='tracking-wide pe-1'>Book tid</button>
				<img className='h-3 md:h-6 xl:h-9' src={arrowRightUp} alt='arrow-right' />
			</Link>

			<div className='h-56 w-6/12 mt-2 bg-slate-400 rounded-sm'></div>
			<div className='h-64 w-10/12 my-2 bg-slate-500 rounded-md'></div>
			<div className='h-80 w-12/12 bg-slate-600 rounded-lg'></div>
		</section>
	);
}
