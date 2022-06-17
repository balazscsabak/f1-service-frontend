import { toast } from 'react-toastify';

const useNotify = () => {
	const notifyInfo = (text: string) => {
		toast.info(text, {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	const notifySuccess = (text: string) => {
		toast.success(text, {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	const notifyError = (text: string) => {
		toast.error(text, {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	return {
		notifyError,
		notifyInfo,
		notifySuccess,
	};
};

export default useNotify;
