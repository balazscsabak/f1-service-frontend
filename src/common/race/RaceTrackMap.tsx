import RaceTrackImg from '../../assets/images/race-track.svg';

const RaceTrackMap = () => {
	return (
		<div className="race-track-map fixed right-10 top-10 w-60 border-4 p-4 rounded-xl border-gray-600">
			<img src={RaceTrackImg} alt="race-track-img" />
		</div>
	);
};

export default RaceTrackMap;
