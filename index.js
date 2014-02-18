var csv = require('csv');
var extend = require('./extend');
var querystring = require('querystring');
var http = require('http');

var SEMRushAPI = function(apiKey, options){
	this.configure({ apiKey: apiKey, options:options });
};

module.exports = SEMRushAPI;

(function() {

	this.options = {
		hostname    : 'us.api.semrush.com',
        path        : '/',
        userAgent   : 'node-semrush (https://github.com/ithinkdancan/node-semrush)',
		apiKey: ''
	};

	this.defaultParams = {
		export			: 'api',
        action			: 'report',
        display_limit	: '10',
	};

	this.configure = function(options) {
		extend(this.options, options);
    };


    this.domain_rank = function(domain, customParams, cb) {
		this._doRequest('domain_rank', domain, customParams, cb);
    };

    this.domain_organic = function(domain, customParams, cb) {
		this._doRequest('domain_organic', domain, customParams, cb);
    };

    this.domain_organic_organic = function(domain, customParams, cb) {
		this._doRequest('domain_organic_organic', domain, customParams, cb);
    };

    this.domain_adwords_adwords = function(domain, customParams, cb) {
		this._doRequest('domain_adwords_adwords', domain, customParams, cb);
    };

    this.domain_adwords = function(domain, customParams, cb) {
		this._doRequest('domain_adwords', domain, customParams, cb);
    };

    this._doRequest = function (type, domain, customParams, cb) {

		var params = {
			type: type,
			domain: domain,
			key: this.options.apiKey
		};

		extend(params, this.defaultParams, customParams);

		var path = 'http://' + this.options.hostname + '/?' + querystring.stringify(params);

		var req = http.get(path, function(res) {
			
			var data = [];

			res
				.on('data', function(chunk) { data.push(chunk); })
				.on('end', function() {

					var urldata = data.join('').trim();

					if(urldata.indexOf('ERROR') === 0){
						cb(new Error('response.error:' + urldata), null);
					} else {
						csv().from.string(urldata, {delimiter: ';', columns: true}).to.array(function(result){
							cb(null, result);
						});
					}
				})
				.on('error', function (err) {
					cb(new Error('response.error:' + err), null);
				});

		});

    };

}).call(SEMRushAPI.prototype);