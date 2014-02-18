var fs = require('fs');

var SimilarWebAPI = {

	traffic: function (domain, cb) {
		fs.readFile('./mock/similarweb/traffic.json', 'utf8', cb);
	},

	EstimatedTraffic: function (domain, cb) {
		fs.readFile('./mock/similarweb/EstimatedTraffic.json', 'utf8', cb);
	},

	engagement: function (domain, cb) {
		fs.readFile('./mock/similarweb/engagement.json', 'utf8', function(err, data){
			cb(err, JSON.parse(data));
		});
	},

	SocialReferringSites: function (domain, cb) {
		fs.readFile('./mock/similarweb/SocialReferringSites.json', 'utf8', function(err, data){
			cb(err, JSON.parse(data));
		});
	},

	leadingreferringsites: function (domain, cb) {
		fs.readFile('./mock/similarweb/leadingreferringsites.json', 'utf8', function(err, data){
			cb(err, JSON.parse(data));
		});
	},

	leadingdestinationsites: function (domain, cb) {
		fs.readFile('./mock/similarweb/leadingdestinationsites.json', 'utf8', function(err, data){
			cb(err, JSON.parse(data));
		});
	}

	

}

module.exports = SimilarWebAPI