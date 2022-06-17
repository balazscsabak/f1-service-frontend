import { useEffect } from 'react';
import { useDrivers } from '../../hooks';
import { API_URLS } from '../../static';

const Drivers = () => {
	const { driversState, getDrivers, setDrivers } = useDrivers();

	useEffect(() => {
		let controller = new AbortController();
		let unMounted = false;

		(async () => {
			const _drivers = await getDrivers(controller.signal);

			if (!unMounted && _drivers) {
				setDrivers(_drivers);
			}
		})();

		return () => {
			unMounted = true;
			controller.abort();
		};
	}, []);

	return <div>Drivers</div>;
};

export default Drivers;
