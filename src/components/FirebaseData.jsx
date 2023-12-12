import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { webshopDatabase } from '/src/firebaseConfig.js';

const FirebaseData = ({ onFetchData }) => {
	useEffect(() => {
		const fetchData = async () => {
			onSnapshot(collection(webshopDatabase, 'products'), (data) => {
				const docs = [];
				data.forEach((doc) => {
					docs.push({ id: doc.id, ...doc.data() });
				});

				onFetchData(docs);
			});
		};

		fetchData();
	}, [onFetchData]);

	return null;
};

export default FirebaseData;
