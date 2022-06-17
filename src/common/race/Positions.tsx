import { useDrivers } from '../../hooks';

const Positions = () => {
	const {
		driversState: { drivers },
	} = useDrivers();

	return (
		<div className="position-box ">
			<div className="my-2 border-b border-gray-500 pb-1">
				<h1 className="text-lg text-center font-extrabold italic">F1-RACE</h1>
			</div>
			<div>
				{drivers.map((driver) => (
					<a href={`#${driver.id}`} key={driver.id}>
						<div className="flex items-center justify-center border-b border-gray-700 text-sm">
							<div className="italic">{driver.place}. </div>
							<div className="ml-3 font-medium">{driver.code}</div>
							<div className="ml-3 font-medium text-xs">
								<img
									style={{ width: 20 }}
									src={`https://countryflagsapi.com/png/${driver.country}`}
								/>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default Positions;
