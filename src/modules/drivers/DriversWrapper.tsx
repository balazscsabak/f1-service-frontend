import DriverBox from '../../common/drivers/DriverBox';
import DriverController from '../../common/drivers/DriverController';
import DriverInfo from '../../common/drivers/DriverInfo';
import { useDrivers } from '../../hooks';

const DriversWrapper = () => {
	const {
		driversState: { drivers },
	} = useDrivers();

	return (
		<div>
			<div className="max-w-xs w-full mx-auto">
				{drivers.map((driver, i) => (
					<div
						className={`flex w-full ${
							i % 2 == 0 ? 'justify-start' : 'justify-end'
						} -mb-4`}
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
					</div>
				))}
			</div>
		</div>
	);
};

export default DriversWrapper;
