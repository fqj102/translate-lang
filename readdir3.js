//전체읽음
var fs = require('fs');
fs.readFile('C:\\project\\PHP_WEB\\public\\dist\\js\\validation.js', 'utf8', function(err, data){
    console.log(data);
});