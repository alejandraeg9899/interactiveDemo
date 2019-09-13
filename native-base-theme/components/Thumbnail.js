import variable from './../variables/platform';

export default (variables = variable) => {
	const thumbnailTheme = {
		'.square': {
			borderRadius: 0,
			'.mini': {
				width: 28,
				height: 28,
				borderRadius: 0,
			},
			'.small': {
				width: 34,
				height: 34,
				borderRadius: 0,
			},
			'.card': {
				width: 65,
				height: 65,
				borderRadius: 0,
			},
			'.large': {
				width: 100,
				height: 100,
				borderRadius: 0,
			},
			'.xlarge': {
				width: 140,
				height: 140,
				borderRadius: 0,
			},

		},
		'.mini': {
			width: 28,
			height: 28,
			borderRadius: 14,
			'.square': {
				borderRadius: 0,
			},
		},
		'.small': {
			width: 34,
			height: 34,
			borderRadius: 17,
			'.square': {
				borderRadius: 0,
			},
		},
		'.card': {
			width: 65,
			height: 65,
			borderRadius: 35,
			'.square': {
				borderRadius: 0,
			},
		},
		'.large': {
			width: 100,
			height: 100,
			borderRadius: 50,
			'.square': {
				borderRadius: 0,
			},
		},
		'.xlarge': {
			width: 140,
			height: 140,
			borderRadius: 70,
			'.square': {
				borderRadius: 0,
			},
		},
		width: 50,
		height: 50,
		borderRadius: 25,
	};

	return thumbnailTheme;
};
