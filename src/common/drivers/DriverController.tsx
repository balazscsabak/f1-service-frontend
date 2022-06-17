import { Driver } from '../../types';
import { RiSpeedLine } from 'react-icons/ri';
import { useDrivers, useNotify } from '../../hooks';

type PropTypes = {
	driver: Driver;
};

const DriverController = ({ driver }: PropTypes) => {
	const { notifyInfo, notifySuccess } = useNotify();
	const { driverTakeover, setDrivers } = useDrivers();

	const attemptOvertake = async () => {
		if (driver.place === 1) {
			notifyInfo("HEEEY! I'm already in first place 😎");
			return;
		}

		const controller = new AbortController();
		const res = await driverTakeover(driver, controller.signal);

		if (res) {
			setDrivers(res);

			const rndNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);
			const texts = [
				'What a move',
				'The art of overtaking',
				'Another overtaking maneuver',
			];

			notifySuccess(texts[rndNumber]);
		}
		console.log(res);
	};

	return (
		<div
			className="-rotate-90 text-2xl p-2 bg-gray-100 rounded-xl cursor-pointer"
			onClick={attemptOvertake}
		>
			<RiSpeedLine />
		</div>
	);
};

export default DriverController;
