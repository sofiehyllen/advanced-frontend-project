// KODET AF KAROLINE LERCHE & SOFIE HYLLEN
// Importér nødvendige biblioteker og billeder
import { NavLink } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { TbShoppingBag } from 'react-icons/tb';
import { IoMdHeart } from 'react-icons/io';
import { useState } from 'react';
import arrowBlack from '/src/assets/arrow-right-up-black.svg';
import logo from '/src/assets/logo.png';

//--- Header komponenten indeholder strukturen for hjemmesidens header ---//
export default function Header() {
	// State til styring af mobilnavigationens åbenhed/lukning
	const [isNavOpen, setIsNavOpen] = useState(false);

	// Returnér JSX-struktur for header
	return (
		<section>
			{/* Overordnet container med header-indhold, inkl. logo og navigation */}
			<div className='flex items-center justify-between border-b border-black mb-5 md:mb-10 xl:mb-16'>
				{/* Link til hjemmesiden med logo */}
				<NavLink to='/'>
					<img className='w-24 md:w-36 md:mb-1 xl:w-44' src={logo} alt='Tryllespejlet logo' />
				</NavLink>

				{/* Navigationsektion indeholdende ikoner, mobilmenu og desktopmenu */}
				<nav className='flex items-center space-x-4'>
					{/* Ikoner til favoritter og indkøbskurv */}
					<div className='flex items-center space-x-3 md:ml-10 md:order-4'>
						<NavLink to='/favorites'>
							<IoMdHeart className='text-2xl' />
						</NavLink>
						<button className='flex items-center snipcart-checkout '>
							<TbShoppingBag className='text-2xl' />
							<span className='pt-1 snipcart-items-count my-auto w-5'></span>
						</button>
					</div>

					{/* Mobilmenu */}
					<section className='flex md:hidden'>
						{/* Mobilmenuknappen med toggle-effekt */}
						<div className='flex items-center space-x-4' onClick={() => setIsNavOpen((prev) => !prev)}>
							<IoMenu size={45} />
						</div>

						{/* Indhold af mobilmenu baseret på isNavOpen-tilstanden */}
						<div className={isNavOpen ? 'block' : 'hidden'}>
							<div className='flex flex-col justify-center absolute w-full h-screen top-0 left-0  bg-white z-50'>
								{/* Lukkeikon til mobilmenu */}
								<div className='absolute top-0 right-0 py-4 px-4' onClick={() => setIsNavOpen(false)}>
									<IoClose size={55} />
								</div>

								{/* Links i mobilmenu og 'toggle-effekt' ved klik */}
								<div onClick={() => setIsNavOpen(false)}>
									<div className='flex flex-col items-center mx-auto space-y-10 title1 w-fit'>
										<NavLink to='/'>Hjem</NavLink>
										<button className='flex items-center space-x-3'>
											<a href='https://trylle-spejlet.bestilling.nu' target='_blank'>
												Book tid
											</a>
											<img className='h-6' src={arrowBlack} alt='Black arrow' />
										</button>
										<NavLink to='/behandlinger'>Behandlinger</NavLink>
										<NavLink to='/about'>Mød os</NavLink>
										<NavLink to='/contact'>Kontakt</NavLink>
										<NavLink to='/webshop'>Shop</NavLink>
									</div>
									<div className='flex justify-center text-base pt-20'>
										<a className='underline' href='https://tryllespejlet.sofiehyllen.dk/'>
											DA
										</a>
										<p className='px-1'>/</p>
										<a href='https://tryllespejlet.en.sofiehyllen.dk/'>EN</a>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Desktopmenu til tablet og laptop */}
					<div className='hidden md:flex items-center space-x-6 text-base xl:text-lg'>
						{/* Book tid link med pilikon og desktopmenu links */}
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

					{/* Sprogmenu til dansk/engelsk sprogvalg */}
					<div className='hidden md:flex order-last text-sm'>
						{/* Vertikal streg som separator */}
						<div className='v-line m-0 mr-6'></div>
						<a className='underline' href='https://tryllespejlet.sofiehyllen.dk/'>
							DA
						</a>
						<p className='px-1'>/</p>
						<a href='https://tryllespejlet.en.sofiehyllen.dk/'>EN</a>
					</div>
				</nav>
			</div>
		</section>
	);
}
