import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BehandlingerPage from './pages/BehandlingerPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/behandlinger' element={<BehandlingerPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
