import { Driver } from '../../types';
import { motion } from 'framer-motion';
type PropTypes = {
	driver: Driver;
};

const DriverInfo = ({ driver }: PropTypes) => {
	return (
		<motion.div className="whitespace-nowrap">
			<motion.div layout>
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
			</motion.div>
		</motion.div>
	);
};

export default DriverInfo;
