import { Link } from 'react-router-dom';

const Page404 = () => {
	return (
		<div className="text-center uppercase w-full h-screen flex items-center justify-center flex-col bg-gray-50">
			<h1 className="text-3xl mb-8">404 - PAGE NOT FOUND!</h1>

			<div>
				<Link
					to={'/drivers'}
					className="bg-yellow-500 px-10 font-bold text-gray-900 rounded-3xl py-3"
				>
					BACK TO THE RACE
				</Link>
			</div>
		</div>
	);
};

export default Page404;
