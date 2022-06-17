import { Driver } from '../../types';
import CarImg from '../../assets/images/f1_car.png';
import { API_URLS } from '../../static';
import { motion } from 'framer-motion';

type PropTypes = {
	driver: Driver;
};

const DriverBox = ({ driver }: PropTypes) => {
	return (
		<motion.div>
			<motion.div
				whileHover={{ scale: 1.1 }}
				layout
				className="w-24 h-24 md:w-40 md:h-40 relative"
			>
				<img alt="car-img" src={CarImg} className="w-full h-full opacity-90" />
				<img
					alt="driver-img"
					src={`${API_URLS.BASE}${driver.imgUrl}`}
					className="absolute w-12 h-12 md:w-20 md:h-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-6 bg-slate-100 bg-opacity-30 border border-yellow-600 p-1"
				/>
			</motion.div>
		</motion.div>
	);
};

export default DriverBox;
