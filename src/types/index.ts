export type Driver = {
	id: number;
	code: string;
	firstname: string;
	lastname: string;
	country: string;
	team: string;
	place: number;
	imgUrl: string;
};

export type DriversStateType = {
	drivers: Driver[];
};

export type DriversActions = {
	type: 'SET_DRIVERS';
	payload: Driver[];
};
