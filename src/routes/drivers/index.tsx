import { useEffect, useState } from 'react';
import Spinner from '../../common/elements/Spinner';
import Positions from '../../common/race/Positions';
import RaceTrackMap from '../../common/race/RaceTrackMap';
import { useDrivers, useNotify } from '../../hooks';
import DriversWrapper from '../../modules/drivers/DriversWrapper';
import { API_URLS } from '../../static';

const Drivers = () => {
	const [loading, setLoading] = useState(false);
	const { driversState, getDrivers, setDrivers } = useDrivers();
	const { notifyError } = useNotify();

	useEffect(() => {
		let controller = new AbortController();
		let unMounted = false;

		setLoading(true);

		(async () => {
			const _drivers = await getDrivers(controller.signal);

			if (unMounted) {
				return;
			}

			if (_drivers) {
				setDrivers(_drivers);
			} else {
				notifyError('Server error, please try again later');
			}
		})();

		setLoading(false);

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

			{loading && <Spinner />}
		</div>
	);
};

export default Drivers;
