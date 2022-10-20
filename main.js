var moment = require('moment');
var unique = require('uniq');

var myDate = new Date();
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

var myCoolDate = moment(myDate).format('MMMM Do YYYY, h:mm:ss a');
var uniqueData = unique(data);

console.log(myCoolDate);
console.log(unique(data));