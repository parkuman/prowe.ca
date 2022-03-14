type Experience = {
	title: string;
	company: {
		name: string;
		url: string;
	};
	startDate: string;
	endDate?: string;
	points: string[];
};

export default Experience;
