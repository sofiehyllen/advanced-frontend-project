import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BehandlingerPage from './pages/BehandlingerPage';
import Footer from './components/Footer';
import Header from './components/Header';
import WebshopPage from './pages/WebshopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Favorites from './components/Favourites';
import { AnimatePresence } from 'framer-motion';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<AnimatePresence>
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
			<Footer />
		</BrowserRouter>
	);
}

export default App;
