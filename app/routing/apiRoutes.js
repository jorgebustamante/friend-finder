//pull in routes and exports
var path = require("path");
var friends = require('../data/friends.js');
module.exports = function(app){

    //all entries
    app.get('/api/friends', function(req, res) {
		res.json(friends);
    });
    //add entry 
    app.post('/api/friends', function(req, res) {
        var input = req.body
        var responses = input.scores
        var matchName = '';
		var matchImage = '';
        var totalDifference = 10000;
        
        //need for loop here to go through match array
        for (var i = 0; i < friends.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			// console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				// console.log('Closest match found = ' + diff);
				// console.log('Friend name = ' + friends[i].name);
				// console.log('Friend image = ' + friends[i].photo);

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}
        friends.push(input);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

    });

    
    
}

