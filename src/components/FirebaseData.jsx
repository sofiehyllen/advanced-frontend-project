// KODET AF KAROLINE LERCHE & SOFIE HYLLEN
// Importering af nødvendige biblioteker og komponenter
import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { webshopDatabase } from '/src/firebaseConfig.js';

//--- Komponent til at hente data fra Firebase og kald onFetchData med det opdaterede data ---//
const FirebaseData = ({ onFetchData }) => {
	// Effekt til at hente data fra Firebase, lytte efter ændringer og opdatere komponentens data
	useEffect(() => {
		// Funktion til at hente og opdatere data
		const fetchData = async () => {
			// Lyt efter ændringer i 'products'-samlingen i Firebase-databasen
			onSnapshot(collection(webshopDatabase, 'products'), (data) => {
				// Initialiser et tomt array til at indeholde dokumentdata
				const docs = [];

				// Iterér gennem hvert dokument i samlingen og tilføj data til arrayet
				data.forEach((doc) => {
					docs.push({ id: doc.id, ...doc.data() });
				});

				// Kald onFetchData med det opdaterede data
				onFetchData(docs);
			});
		};

		// Kald fetchData-funktionen
		fetchData();
	}, [onFetchData]); // Lyt kun efter ændringer i onFetchData for at undgå unødvendige opkald

	// Komponenten returnerer null, da den primært har en sideeffekt og ikke returnerer noget til UI'et
	return null;
};

export default FirebaseData;
