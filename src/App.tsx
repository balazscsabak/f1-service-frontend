import { Route, Routes } from 'react-router-dom';
import Page404 from './routes/404';
import Drivers from './routes/drivers';
import Home from './routes/home';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="drivers" element={<Drivers />} />
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
}

export default App;
