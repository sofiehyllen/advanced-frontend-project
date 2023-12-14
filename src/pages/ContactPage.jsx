import React, { useState } from 'react';
import home1 from '/src/assets/home-1.jpg';
import contactCard1 from '/src/assets/kontakt_kort1.jpg';
import contactCard2 from '/src/assets/kontakt_kort2.jpg';
import contactCard3 from '/src/assets/kontakt_kort3.jpg';
import { FaPhone } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { pageFade } from '../components/Animations';
import { motion } from 'framer-motion';

export default function ContactPage() {
	const [fornavn, setFornavn] = useState('');
	const [efternavn, setEfternavn] = useState('');
	const [email, setEmail] = useState('');
	const [besked, setBesked] = useState('');

	const sendEmail = () => {
		const subject = encodeURIComponent('Ny kontaktformularbesked');
		const body = encodeURIComponent(
			`Fornavn: ${fornavn}\nEfternavn: ${efternavn}\nEmail: ${email}\nBesked: ${besked}`
		);
		const mailtoLink = `mailto:kj.lerche@gmail.com?subject=${subject}&body=${body}`;

		window.location.href = mailtoLink;

		// Nulstil formularfeltene hvis nødvendigt
		setFornavn('');
		setEfternavn('');
		setEmail('');
		setBesked('');
	};

	return (
		<motion.section variants={pageFade} initial='hidden' animate='visible'>
			<div className='md:flex'>
				<div className='md:order-2 md:pl-5 xl:w-full md:h-full'>
					<img className='img-container' src={home1} alt='Woman' />
				</div>
				<div className='pt-5 md:p-0'>
					<h2 className='heading3'>Sig hej!</h2>
					<h1 className='title1'>Kontakt os</h1>
					<p className='bodytext1 xl:w-2/3 pt-5'>
						Har du spørgsmål, ønsker en aftale eller vil dele dine tanker med os? Vi er her for at lytte. Du
						er altid velkommen til at ringe ind med spørgsmål, eller sende os en email, for at komme i
						forbindelse med vores dedikerede team.
						<br></br>
						<br></br>
						Vi ser altid frem til at høre fra dig og hjælpe med dine behov. Din skønhed og tilfredshed er
						vores prioritet.
					</p>
					<div className='h-line'></div>
					<div>
						<div className='flex items-center'>
							<FaPhone className='ml-5 text-2xl md:text-4xl' />
							<p className='ml-2 heading3 pl-5'>
								Telefon: <a href='tel:+4598489911'>+45 22 13 09 17</a>
							</p>
						</div>
						<div className='h-line'></div>
						<div className='flex items-center'>
							<IoMail className='ml-5 text-2xl md:text-4xl' />
							<p className='ml-2 heading3 pl-5'>
								Email: <a href='mailto:Trylle-spejlet@hotmail.dk'>Trylle-spejlet@hotmail.dk</a>
							</p>
						</div>
					</div>
					<div className='h-line'></div>
				</div>
			</div>

			<div>
				<h2 className='heading3 mt-20'>Find os</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-6'>
					<div className='border border-black p-4'>
						<a
							href='https://www.google.com/maps/search/?api=1&query=Skagensvej+46,+9982+%C3%85lb%C3%A6k'
							target='_blank'
							rel='noopener noreferrer'>
							<img src={contactCard1} alt='img link' />
							<hr className='border-t border-black my-4'></hr>
							<p className='text-left title1 text-sm md:text-xl xl:text-3xl'>Skagensvej 46, 9982 Ålbæk</p>
						</a>
					</div>

					<div className='border border-black p-4'>
						<a href='#' target='_blank' rel='noopener noreferrer'>
							<img src={contactCard2} alt='img link' />
							<hr className='border-t border-black my-4'></hr>
							<p className='text-left title1 text-sm md:text-xl xl:text-3xl'>Tilmeld vores nyhedsbrev</p>
						</a>
					</div>

					<div className='border border-black p-4'>
						<a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
							<img src={contactCard3} alt='img link' />
							<hr className='border-t border-black my-4'></hr>
							<p className='text-left title1 text-sm md:text-xl xl:text-3xl'>Find os på Instagram</p>
						</a>
					</div>
				</div>
			</div>

			<div className='pt-11 md:p-0'>
				<h2 className='heading3'>Skriv til os</h2>
				<p className='bodytext1 pt-5 pb-5'>
					Udfyld venligst kontaktformularen nedenfor, hvis du ønsker at sende os en besked eller har
					spørgsmål.
					<br></br>
					<br></br>
					Vi værdsætter din tid, og vores team vil gøre deres bedste for at vende tilbage til dig så hurtigt
					som muligt – vi ser frem til at betjene dig!
				</p>
			</div>

			<form className='contact-form border border-black p-5' onSubmit={sendEmail}>
				<h1 className='title2'>Kontaktformular</h1>

				<div>
					<input
						className='form-input'
						id='fornavn'
						type='text'
						placeholder='Fornavn'
						value={fornavn}
						onChange={(e) => setFornavn(e.target.value)}
					/>
					<hr className='border-t border-black pb-4'></hr>
				</div>
				<div className='mb-4'>
					<input
						className='form-input'
						id='efternavn'
						type='text'
						placeholder='Efternavn'
						value={efternavn}
						onChange={(e) => setEfternavn(e.target.value)}
					/>
					<hr className='border-t border-black pb-4'></hr>
				</div>
				<div className='mb-4'>
					<input
						className='form-input'
						id='email'
						type='email'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<hr className='border-t border-black pb-4'></hr>
				</div>
				<div className='mb-4'>
					<textarea
						className='form-input'
						id='besked'
						placeholder='Din besked'
						value={besked}
						onChange={(e) => setBesked(e.target.value)}
					/>
					<hr className='border-t border-black pb-4'></hr>
				</div>
				<div>
					<button className='btn' type='button' onClick={sendEmail}>
						Send
					</button>
				</div>
			</form>
		</motion.section>
	);
}
