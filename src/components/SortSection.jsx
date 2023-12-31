// KODET AF KAROLINE LERCHE & SOFIE HYLLEN
// Importér nødvendige biblioteker og komponenter
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// IMPORTERING AF BILLEDER //
import kollega1 from '/src/assets/pernille.jpg';
import kollega2 from '/src/assets/eva.jpg';
import kollega3 from '/src/assets/rasmus.jpg';
import kollega4 from '/src/assets/klaus.jpg';
import kollega5 from '/src/assets/maja.jpg';
import kollega6 from '/src/assets/juliette.jpg';
import kollega7 from '/src/assets/sofie.jpg';
import kollega8 from '/src/assets/magnus.jpg';
import kollega9 from '/src/assets/karoline.jpg';
import kollega10 from '/src/assets/julie.jpg';

// SortSection komponenten håndterer filtrering og visning af medarbejdere baseret på kategorier
const SortSection = () => {
	const [selectedCategory, setSelectedCategory] = useState('all'); // State-hook til at styre den valgte kategori

	// Funktion til håndtering af klik på kategori-knapperne
	const handleButtonClick = (category) => {
		setSelectedCategory(category);
	};

	// Funktion til håndtering af klik på pileknappen for at vise alle kategorier
	const handleArrowClick = () => {
		handleButtonClick('all');
	};

	// Array med medarbejdere og deres information
	const categories = [
		{ id: 1, category: ['frisør'], title: 'Frisør/Ejer', name: 'Pernille Thomsen', src: kollega1 },
		{ id: 2, category: ['frisør', 'kosmetolog'], title: 'Frisør/Kosmetolog', name: 'Eva Nipali', src: kollega2 },
		{ id: 3, category: ['frisør'], title: 'Frisør/Barberer', name: 'Rasmus Bjerggaard', src: kollega3 },
		{ id: 4, category: ['frisør'], title: 'Frisør/Barberer', name: 'Klaus Sezani', src: kollega4 },
		{ id: 5, category: ['frisør'], title: 'Frisør', name: 'Maja Stjerne', src: kollega5 },
		{ id: 6, category: ['frisør', 'kosmetolog'], title: 'Frisør/Kosmetolog', name: 'Juliette Hansen', src: kollega6 },
		{ id: 7, category: ['kosmetolog'], title: 'Kosmetolog', name: 'Sofie Bro', src: kollega7 },
		{ id: 8, category: ['kosmetolog'], title: 'Kosmetolog', name: 'Magnus Johansen', src: kollega8 },
		{ id: 9, category: ['kosmetolog'], title: 'Kosmetolog', name: 'Karoline Vinter', src: kollega9 },
		{ id: 10, category: ['kosmetolog'], title: 'Kosmetolog', name: 'Julie Sommer', src: kollega10 },
	];

	// Filtrer medarbejdere baseret på den valgte kategori
	const filteredCategories =
		selectedCategory === 'all' ? categories : categories.filter((c) => c.category.includes(selectedCategory));

	// Returnér JSX-struktur for sortering og visning af medarbejdere
	return (
		<div>
			{/* Knappe til at filtrere medarbejdere baseret på kategori */}
			<div className='flex items-center justify-end space-x-4'>
				<Link
					to='#'
					className={`heading3 py-2 px-4 ${selectedCategory === 'all' ? 'underline underline-offset-2' : ''}`}
					onClick={() => handleButtonClick('all')}>
					Alle
				</Link>
				<Link
					to='#'
					className={`heading3 py-2 px-4 ${selectedCategory === 'frisør' ? 'underline underline-offset-2' : ''}`}
					onClick={() => handleButtonClick('frisør')}>
					Frisør
				</Link>
				<Link
					to='#'
					className={`heading3 py-2 px-4 ${selectedCategory === 'kosmetolog' ? 'underline underline-offset-2' : ''}`}
					onClick={() => handleButtonClick('kosmetolog')}>
					Kosmetolog
				</Link>
			</div>

			{/* Visning af medarbejdere baseret på filtrering */}
			<div className='mt-4 flex flex-wrap justify-center'>
				{filteredCategories.map((item) => (
					<div key={item.id} className='mb-8 text-center w-1/2 xl:w-1/3'>
						<div className='border border-black p-4 m-1'>
							{/* Vis billede, navn og titel for hver medarbejder */}
							<img src={item.src} alt={item.name} className='w-30 h-30 mx-auto mb-6' />
							<hr className='border-t border-black my-4'></hr>
							<p className='mt-4 text-left title1 text-sm md:text-2xl xl:text-3xl'>{item.name}</p>
							<p className='mt-2 text-left heading3'>{item.title}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

// Eksportér SortSection komponenten som standard
export default SortSection;
