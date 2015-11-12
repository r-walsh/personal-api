module.exports = {

	getName: function( req, res ) {
		res.send({ name: 'Daffy Duck' });
	},

	getLocation: function( req, res ) {
		res.send({ location: 'Timbuktu' });
	},

	getOccupations: function( req, res ) {
		if (!req.query.order) {
			res.send({ occupations: occupations });
		}

		if (req.query.order === 'asc') {
			res.send({ occupations: occupations.sort() });
		} else if (req.query.order === 'desc') {
			res.send({ occupations: occupations.reverse() });
		} else {
			res.send('Query not recognized.');
		}
	},

	latestOccupation: function( req, res ) {
		res.send({ latestOccupation: occupations[occupations.length - 1] });
	},

	getHobbies: function( req, res ) {
		res.send({ hobbies: hobbies });
	},

	getHobbiesByType: function( req, res ) {
		var hobbiesByType = [];
		hobbies.forEach(function( hobby ) {
			if (hobby.type === req.params.type) {
				hobbiesByType.push(hobby);
			}
		});
		res.send({ hobbiesByType: hobbiesByType });
	}
}

var hobbies = [{
			name: 'Watching cartoons'
		,	type: 'current'
	},
	{
			name: 'Quacking'
		,	type: 'past'
	}
];

var occupations = ['Thwarting Buggs Bunny', 'Tomfoolery'];