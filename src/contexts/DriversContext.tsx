import React from 'react';
import { useReducer, createContext } from 'react';
import { DriversStateType, DriversActions } from '../types/index';

const initState: DriversStateType = {
	drivers: [],
};

const DriversContext = createContext<{
	driversState: DriversStateType;
	driversDispatch: React.Dispatch<DriversActions>;
}>({ driversState: initState, driversDispatch: () => null });

const DriversReducer = (
	state: DriversStateType,
	action: DriversActions
): DriversStateType => {
	switch (action.type) {
		case 'SET_DRIVERS':
			return { ...state, drivers: action.payload };

		default:
			return state;
	}
};

interface PropTypes {
	children: JSX.Element;
}

const DriversProvider = ({ children }: PropTypes): JSX.Element => {
	const [driversState, driversDispatch] = useReducer(DriversReducer, initState);

	return (
		<DriversContext.Provider value={{ driversState, driversDispatch }}>
			{children}
		</DriversContext.Provider>
	);
};

export { DriversContext, DriversProvider };
