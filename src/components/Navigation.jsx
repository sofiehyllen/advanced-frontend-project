import { NavLink } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';

export default function Navigation() {
	const [isNavOpen, setIsNavOpen] = useState(false); // isNavOpen er fra start falsk = Mobil nav er lukket

	return (
		<section>
			<div className='flex items-center justify-between border-b border-black'>
				<div className='text-lg w-fit'>
					<NavLink to='/'>Logo</NavLink>
				</div>
				<nav>
					{/*-- Mobile menu --*/}
					<section className='flex md:hidden'>
						<div onClick={() => setIsNavOpen((prev) => !prev)}>
							{/*Vi laver en 'toggle-effekt' mellem sandt og falsk vha. en arrowfunktion */}
							<IoMenu size={45} /> {/*Burgermenu ikon */}
						</div>

						<div className={isNavOpen ? 'block' : 'hidden'}>
							<div className='flex flex-col justify-center absolute w-full h-screen top-0 left-0  bg-white z-10'>
								<div className='absolute top-0 right-0 py-4 px-4' onClick={() => setIsNavOpen(false)}>
									{/*Ændrer isNavOpen tilbage falsk = nav lukkes */}
									<IoClose size={45} /> {/*Lukke ikon */}
								</div>
								<div className='flex flex-col items-center space-y-10 title1'>
									<NavLink to='/'>Book tid</NavLink>
									<NavLink to='/behandlinger'>Behandlinger</NavLink>
									<NavLink to='/'>Mød os</NavLink>
									<NavLink to='/'>Kontakt</NavLink>
									<NavLink to='/'>Shop</NavLink>
								</div>
							</div>
						</div>
					</section>

					{/*-- Tablet og laptop menu --*/}
					<div className='hidden md:block space-x-10 text-xs xl:text-xxs'>
						<NavLink to='/'>Book tid</NavLink>
						<NavLink to='/behandlinger'>Behandlinger</NavLink>
						<NavLink to='/'>Mød os</NavLink>
						<NavLink to='/'>Kontakt</NavLink>
						<NavLink to='/'>Shop</NavLink>
					</div>
				</nav>
			</div>
		</section>
	);
}
