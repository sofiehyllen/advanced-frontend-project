import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BehandlingerPage from './pages/BehandlingerPage';
import Footer from './components/Footer';
import Header from './components/Header';
import WebshopPage from './pages/WebshopPage';
import ProductPage from './pages/ProductPage';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/behandlinger' element={<BehandlingerPage />} />
				<Route path='/webshop' element={<WebshopPage />} />
				<Route path='/products/:id' element={<ProductPage />} />
				<Route path='/*' element={<Navigate to='/' />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
