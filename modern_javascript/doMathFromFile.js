var parseOrderOfOperations = require('./parseOrderOfOperations.js')
var fs = require('fs')

function readFile(filename){
  fs.readFile("C:/Users/jagkel/glens_js_tutorial/modern_javascript/" + 'math_text', function(err, data){
    var lines = data.toString().split("\r\n");
    for(var ii = 0; ii < lines.length -1; ii++){
      line = lines[ii];
      var calcExprFromFileLine = new parseOrderOfOperations([null,null,line]); //to simulate cmd line arg
      calcExprFromFileLine.orderOfOperations();
      console.log(calcExprFromFileLine.results);
    }
  })
}

readFile(process.argv[2]);
