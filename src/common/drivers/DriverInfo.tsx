import { Driver } from '../../types';

type PropTypes = {
	driver: Driver;
};

const DriverInfo = ({ driver }: PropTypes) => {
	return (
		<div className="whitespace-nowrap">
			<div className="font-bold">
				{driver.firstname} {driver.lastname}
			</div>
			<div className="class-sm">{driver.team}</div>
			<div className="class-sm font-medium">{driver.code}</div>
			<div className="flex justify-end">
				<div className="mr-4 flex items-center font-semibold justify-center -mt-4 text-lg w-8 h-8 rounded-full bg-yellow-500">
					{driver.place}
				</div>
			</div>
		</div>
	);
};

export default DriverInfo;
