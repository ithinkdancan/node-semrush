 node-semrush - An SEMRush API library for Node.js
====================

This module provides calls to the [SEMRushAPI](http://www.semrush.com/api.html) for [Nodejs](http://nodejs.org).


Installation
------------
You can install this through npm: npm install node-semrush

You can also install via git by cloning: `git clone https://github.com/ithinkdancan/node-semrush.git /path/to/semrush-api`

Usage
-----
    var SEMRushAPI = require('node-semrush');
    var semrush = new SEMRushAPI('<YOUR API KEY>');
    
    semrush.<ReportType>('<DOMAIN>', {<RequestParams>}, function(err, response) {
      if (err) throw err;

      // See http://www.semrush.com/api.html for format of returned object
      var report = response;

      // Do something with data
    });