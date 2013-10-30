var fs = require('fs');
var csv = require('csv');
var mysql      = require('mysql');
var moment = require('moment');
var connection = mysql.createConnection("mysql://b04d97151df013:23c3e27c@us-cdbr-azure-east-c.cloudapp.net/burger");

//this mysql has no bulk insert permissions. might as well just iterate it over time

/*csv()
.from.path(__dirname+'/testers.csv', { delimiter: ',', escape: '"' })
.transform(function(row){
	row[0] = parseInt(row[0]);
	row[4] = moment(row[4]).format('YYYY-MM-DD HH:MM:SS');
	return row;
})
.on('record', function(row, index){
	if(index > 0){
		var row = {
			testerId: row[0],
			firstName: row[1],
			lastName: row[2],
			country: row[3],
			lastLogin: row[4]
		};

		connection.query("INSERT INTO Testers SET ?", row, function(err){
			if(err){
				console.log(err);
			}
		});
	}
}).on('end', function(count){
	connection.end();
})*/

//BUGS
/*csv()
.from.path(__dirname+'/bugs.csv', { delimiter: ',', escape: '"' })
.transform(function(row){
	row[0] = parseInt(row[0]);
	row[1] = parseInt(row[1]);
	row[1] = parseInt(row[1]);
	return row;
})
.on('record', function(row, index){
	if(index > 0){
		var row = {
			bugId: row[0],
			deviceId: row[1],
			testerId: row[2],
		};

		connection.query("INSERT INTO bugs SET ?", row, function(err){
			if(err){
				console.log(err);
			}
		});
	}
}).on('end', function(count){
	connection.end();
})*/

/*csv()
.from.path(__dirname+'/devices.csv', { delimiter: ',', escape: '"' })
.transform(function(row){
	row[0] = parseInt(row[0]);
	return row;
})
.on('record', function(row, index){
	if(index > 0){
		var row = {
			deviceId: row[0],
			description: row[1]
		};

		connection.query("INSERT INTO devices SET ?", row, function(err){
			if(err){
				console.log(err);
			}
		});
	}
}).on('end', function(count){
	connection.end();
});*/

/*csv()
.from.path(__dirname+'/tester_device.csv', { delimiter: ',', escape: '"' })
.transform(function(row){
	row[0] = parseInt(row[0]);
	row[1] = parseInt(row[1]);
	return row;
})
.on('record', function(row, index){
	if(index > 0){
		var row = {
			testerId: row[0],
			deviceId: row[1]
		};

		connection.query("INSERT INTO testersdevices SET ?", row, function(err){
			if(err){
				console.log(err);
			}
		});
	}
}).on('end', function(count){
	connection.end();
});*/