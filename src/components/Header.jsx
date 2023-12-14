import { NavLink } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { TbShoppingBag } from 'react-icons/tb';
import { IoMdHeart } from 'react-icons/io';
import { useState } from 'react';
import arrowBlack from '/src/assets/arrow-right-up-black.svg';

import logo from '/src/assets/logo.png';

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false); // isNavOpen er fra start falsk = Mobil nav er lukket

	return (
		<section>
			<div className='flex items-center justify-between border-b border-black mb-5 md:mb-10 xl:mb-16'>

				<NavLink to='/'>
					<img className='w-24 md:w-36 md:mb-1 xl:w-44' src={logo} alt='Tryllespejlet logo' />
				</NavLink>


				{/*Navigation */}
				<nav className='flex items-center space-x-4'>
					{/*Ikoner til farvoritter og indkøbskurv */}
					<div className='flex items-center space-x-3 md:ml-10 md:order-4'>
						<NavLink to='/favorites' className=''>
							<IoMdHeart className='text-2xl' />
						</NavLink>
						<button className='flex items-center snipcart-checkout '>
							<TbShoppingBag className='text-2xl' />
							<span className='pt-1 snipcart-items-count my-auto w-5'></span>
						</button>
					</div>

					{/*-- Mobile menu --*/}
					<section className='flex md:hidden'>
						{/* Vi laver en 'toggle-effekt' mellem sandt og falsk vha. en arrowfunktion */}
						<div className='flex items-center space-x-4' onClick={() => setIsNavOpen((prev) => !prev)}>
							<IoMenu size={45} />
						</div>

						<div className={isNavOpen ? 'block' : 'hidden'}>
							<div className='flex flex-col justify-center absolute w-full h-screen top-0 left-0  bg-white z-50'>
								<div className='absolute top-0 right-0 py-4 px-4' onClick={() => setIsNavOpen(false)}>
									{/* Ændrer isNavOpen tilbage falsk = nav lukkes */}
									<IoClose size={55} /> {/*Lukke ikon */}
								</div>
								<div
									className='flex flex-col items-center mx-auto space-y-10 title1 w-fit'
									onClick={() => setIsNavOpen(false)}>
									<NavLink to='/'>Hjem</NavLink>
									<button className='flex items-center space-x-3'>
										<a href='https://trylle-spejlet.bestilling.nu/'>Book tid</a>
										<img className='h-6' src={arrowBlack} alt='Black arrow' />
									</button>
									<NavLink to='/behandlinger'>Behandlinger</NavLink>
									<NavLink to='/about'>Mød os</NavLink>
									<NavLink to='/contact'>Kontakt</NavLink>
									<NavLink to='/webshop'>Shop</NavLink>
								</div>
							</div>
						</div>
					</section>

					{/*-- Tablet og laptop menu --*/}
					<div className='hidden md:flex items-center space-x-6 text-base xl:text-lg'>
						<div className='flex items-center w-fit bg-transparent outline text-black h-5 px-1 xl:h-6 xl:px-2 rounded-sm'>
							<a className='leading-none' href='https://trylle-spejlet.bestilling.nu/' target='_blank'>
								Book tid
							</a>
							<img className='pl-2' src={arrowBlack} alt='Black arrow' />
						</div>
						<NavLink to='/behandlinger'>Behandlinger</NavLink>
						<NavLink to='/about'>Mød os</NavLink>
						<NavLink to='/contact'>Kontakt</NavLink>
						<NavLink to='/webshop'>Shop</NavLink>
					</div>

					{/*---Dansk / Engelsk sprog ---*/}
					<div className='hidden md:flex order-last text-sm'>
						<div className='v-line m-0 mr-6'></div>
						<a className='underline' href='#'>
							DA
						</a>
						<p className='px-1'>/</p>
						<a href='#'>EN</a>
					</div>
				</nav>
			</div>
		</section>
	);
}
