import { useContext } from 'react';
import { DriversContext } from '../contexts';
import { API_URLS } from '../static';
import axios from 'axios';
import { Driver } from '../types';

export default function useDrivers() {
	const { driversState, driversDispatch } = useContext(DriversContext);

	const getDrivers = async (signal: AbortSignal): Promise<Driver[] | false> => {
		let drivers: Driver[] = [];

		try {
			const res = await axios.get<Driver[]>(API_URLS.GET_DRIVERS, {
				signal: signal,
			});

			if (res.status !== 200 || !res.data || res.data.length < 0) {
				throw new Error('Error on requesting pilots');
			}

			drivers = res.data;
		} catch (error) {
			return false;
		}

		return drivers;
	};

	const setDrivers = (drivers: Driver[]) => {
		driversDispatch({ type: 'SET_DRIVERS', payload: drivers });
	};

	const driverTakeover = async (driver: Driver, signal: AbortSignal) => {
		try {
			const res = await axios.post<Driver[]>(
				`${API_URLS.BASE}/api/drivers/${driver.id}/overtake`,
				{
					signal: signal,
				}
			);

			if (res.status !== 200 || !res.data || res.data.length < 0) {
				throw new Error('Error on attempting takeover!');
			}

			return res.data as Driver[];
		} catch (error) {
			return false;
		}
	};

	return {
		driversState,
		getDrivers,
		setDrivers,
		driverTakeover,
	};
}
