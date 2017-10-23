var friendsData = require('../data/friends.js');
var path = require('path');


var totalDifference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

// JSON pushed to array


	app.post('/api/friends', function(req, res){

		var greatMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var usrData 	= req.body;
		var usrName 	= usrData.name;
		var usrImage 	= usrData.image;
		var usrScores 	= usrData.scores;

		var totalDifference = 0;

		
		for(var i = 0; i < [friendsData].length-1; i++){
			console.log(friendsData[i].name);
			totalDifference = 0;

			//Loop for difference
			for(var j = 0; j < 10; j++){
				totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friends[i].scores[j]));
				if (totalDifference <= greatMatch.friendDifference){

					// Reset the bestMatch to be the new friend. 
					greatMatch.name = friendsData[i].name;
					greatMatch.photo = friendsData[i].photo;
					greatMatch.matchDifference = totalDifference;
				}
			}
		}

		friendsData.push(usrData);
 
		res.json(greatMatch);
	});
};