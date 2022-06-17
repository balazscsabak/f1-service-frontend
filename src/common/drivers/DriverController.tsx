import { Driver } from '../../types';
import { RiSpeedLine } from 'react-icons/ri';

type PropTypes = {
	driver: Driver;
};

const DriverController = ({ driver }: PropTypes) => {
	const attemptOvertake = () => {
		console.log('ATTEMPT');
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
