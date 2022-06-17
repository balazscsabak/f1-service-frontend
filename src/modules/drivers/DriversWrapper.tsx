import DriverBox from '../../common/drivers/DriverBox';
import DriverController from '../../common/drivers/DriverController';
import DriverInfo from '../../common/drivers/DriverInfo';
import { useDrivers } from '../../hooks';
import { AnimatePresence, motion } from 'framer-motion';
import FlagImg from '../../assets/images/flag-race.png';

const DriversWrapper = () => {
	const {
		driversState: { drivers },
	} = useDrivers();

	return (
		<div>
			<div className="w-64 mb-10 mx-auto">
				<img src={FlagImg} alt="flag-race-img" />
			</div>

			<motion.div layout className="max-w-xs w-full mx-auto">
				<AnimatePresence>
					{drivers.map((driver, i) => (
						<motion.div
							id={`${driver.id}`}
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							exit={{ opacity: 1 }}
							layout
							key={driver.id}
							className={`flex w-full justify-center ${
								i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
							} mb-4 md:-mb-4`}
						>
							<div className="relative select-none">
								<DriverBox driver={driver} />
								<div
									className={`absolute top-1/2 -mt-6 ${
										i % 2 === 1 ? 'left-full pl-3' : 'right-full pr-3'
									}`}
								>
									<DriverInfo driver={driver} />
								</div>
								<div
									className={`absolute top-1/2 -translate-y-1/2 ${
										i % 2 === 0 ? 'left-full pl-5' : 'right-full pr-5'
									}`}
								>
									<DriverController driver={driver} />
								</div>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};

export default DriversWrapper;
