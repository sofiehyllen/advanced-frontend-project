import { NavLink } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { TbShoppingBag } from 'react-icons/tb';
import { IoMdHeart } from 'react-icons/io';
import { useState } from 'react';

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false); // isNavOpen er fra start falsk = Mobil nav er lukket

	return (
		<section>
			<div className='flex items-center justify-between border-b border-black mb-5 md:mb-10 xl:mb-16'>
				<div className='heading1'>
					<NavLink to='/'>Logo</NavLink>
				</div>

				{/*Navigation */}
				<nav className='flex items-center space-x-4'>
					{/*Ikoner til farvoritter og indkøbskurv */}
					<div className='flex ml-10 md:order-4'>
						<IoMdHeart className='icon-size mr-4 xl:mr-5' />
						<button className='snipcart-checkout'>
							<TbShoppingBag className='icon-size mr-1' />
						</button>
						<span className='snipcart-items-count pt-1'></span>
					</div>

					{/*-- Mobile menu --*/}
					<section className='flex md:hidden'>
						{/* Vi laver en 'toggle-effekt' mellem sandt og falsk vha. en arrowfunktion */}
						<div className='flex items-center space-x-4' onClick={() => setIsNavOpen((prev) => !prev)}>
							<IoMenu size={45} />
						</div>

						<div className={isNavOpen ? 'block' : 'hidden'}>
							<div className='flex flex-col justify-center absolute w-full h-screen top-0 left-0  bg-white z-10'>
								<div className='absolute top-0 right-0 py-4 px-4' onClick={() => setIsNavOpen(false)}>
									{/* Ændrer isNavOpen tilbage falsk = nav lukkes */}
									<IoClose size={45} /> {/*Lukke ikon */}
								</div>
								<div className='flex flex-col items-center space-y-10 title1'>
									<NavLink to='/'>Book tid</NavLink>
									<NavLink to='/behandlinger'>Behandlinger</NavLink>
									<NavLink to='/about'>Mød os</NavLink>
									<NavLink to='/contact'>Kontakt</NavLink>
									<NavLink to='/webshop'>Shop</NavLink>
								</div>
							</div>
						</div>
					</section>

					{/*-- Tablet og laptop menu --*/}
					<div className='hidden md:block space-x-10 text-base xl:text-lg'>
						<NavLink to='/'>Book tid</NavLink>
						<NavLink to='/behandlinger'>Behandlinger</NavLink>
						<NavLink to='/about'>Mød os</NavLink>
						<NavLink to='/contact'>Kontakt</NavLink>
						<NavLink to='/webshop'>Shop</NavLink>
						
					</div>
				</nav>
			</div>
		</section>
	);
}
