// KODET AF KAROLINE LERCHE & SOFIE HYLLEN
// Import af nødvendige afhængigheder fra React og React Router.
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
// Import af de forskellige sider og komponenter.
import HomePage from './pages/HomePage';
import BehandlingerPage from './pages/BehandlingerPage';
import Footer from './components/Footer';
import Header from './components/Header';
import WebshopPage from './pages/WebshopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Favorites from './components/Favourites';
// Import af Framer Motion-komponent til animationer.
import { AnimatePresence } from 'framer-motion';

// Hovedkomponenten App, der indeholder routing og struktur for hele applikationen.
function App() {
	// Returnerer JSX for komponenten.
	return (
		// BrowserRouter omslutter hele applikationen og håndterer navigation med React Router.
		<BrowserRouter>
			{/* Header-komponenten vises på alle sider. */}
			<Header />
			{/* AnimatePresence wrapper anvendes til at håndtere animationer ved skift mellem sider. */}
			<AnimatePresence>
				{/* Routes-komponenten definerer de forskellige ruter (sider) i applikationen. */}
				<Routes>
					
					<Route path='/' element={<HomePage />} />
					<Route path='/behandlinger' element={<BehandlingerPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/webshop' element={<WebshopPage />} />
					<Route path='/products/:id' element={<ProductPage />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='/*' element={<Navigate to='/' />} />
				</Routes>
			</AnimatePresence>
			{/* Footer-komponenten vises på alle sider. */}
			<Footer />
		</BrowserRouter>
	);
}

export default App;
