import { Driver } from '../../types';
import CarImg from '../../assets/images/f1_car.png';
import { API_URLS } from '../../static';

type PropTypes = {
	driver: Driver;
};

const DriverBox = ({ driver }: PropTypes) => {
	return (
		<div className="w-40 h-40 relative">
			<img src={CarImg} className="w-full h-full opacity-90" />
			<img
				src={`${API_URLS.BASE}${driver.imgUrl}`}
				className="absolute w-20 h-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-6 bg-slate-100 bg-opacity-30 border border-yellow-600 p-1"
			/>
		</div>
	);
};

export default DriverBox;
