function parseMultOperations(arguments){
  var fullString = ""
  for (var i = 2; i < arguments.length; i ++){
    fullString += arguments[i]
  }
  arrayFromString = Array.from(fullString);
  arrayFromString.reduce(function(value, incoming, index){
    if(value === ""){
      return [0,"+",incoming]
    }
    if(incoming === '+'){
      return [doOperation(value[0],parseFloat(value[2]),value[1]),'+',""]
    }
    if(incoming === '-'){
      return [doOperation(value[0],parseFloat(value[2]),value[1]),'-',""]
    }
    if(incoming === '/'){
      return [doOperation(value[0],parseFloat(value[2]),value[1]),'/',""]
    }
    if(incoming === '*'){
      return [doOperation(value[0],parseFloat(value[2]),value[1]),'*',""]
    }
    if (index === arrayFromString.length - 1){
      console.log(doOperation(value[0],parseFloat(value[2] + incoming),value[1]));
    }
    return [value[0], value[1], value[2]+incoming]
  }, "");
}

function doOperation(first, second, op){
  if(op === "+"){
    return first + second;
  };
  if (op === "-"){
    return first - second;
  }
  if (op === "*"){
    return first * second;
  }
  if (op === "/"){
    return first / second;
  }
}

//module.exports = parseMultOperations;
parseMultOperations(process.argv);
