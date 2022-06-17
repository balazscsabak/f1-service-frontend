import { useEffect } from 'react';
import Positions from '../../common/race/Positions';
import RaceTrackMap from '../../common/race/RaceTrackMap';
import { useDrivers } from '../../hooks';
import DriversWrapper from '../../modules/drivers/DriversWrapper';
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

	return (
		<div>
			<div>
				<DriversWrapper />
			</div>
			<RaceTrackMap />
			<Positions />
		</div>
	);
};

export default Drivers;
