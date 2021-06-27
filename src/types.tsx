export type ListItem = {
	id: String;
	name: String;
	users: User[];
	description: String;
	img: String;
	occupation: String;
	detail: [];
};

export type HistoryItem = {
	id: String;
	name: String;
	occupation: String;
	lastViewed: String;
	img: String;
};

export type User = {
	id: String;
	name: String;
	imageUrl: String;
};
