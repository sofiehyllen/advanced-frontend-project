import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BehandlingerPage from './pages/BehandlingerPage';
import Footer from './components/Footer';
import Header from './components/Header';
import WebshopPage from './pages/WebshopPage';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/behandlinger' element={<BehandlingerPage />} />
				<Route path='/webshop' element={<WebshopPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
