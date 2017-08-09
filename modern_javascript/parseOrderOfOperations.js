class parseOrderOfOperations{
  constructor (array_from_commandline){
    this.ourArguments = array_from_commandline;
    this.stringToCalculate;
    this.results;
  }

  orderOfOperations(){
    var fullString = "";
    for (var i = 2; i < this.ourArguments.length; i ++){
      fullString += this.ourArguments[i];
    }
    this.stringToCalculate = fullString;
    var arrayFromString = Array.from(fullString);
    for(let index = 0; index < arrayFromString.length; index ++){
      const value = arrayFromString[index];
      this.checkValidCharacter(value);
    }
    const result = this.doMath(arrayFromString);
    this.results = result;
  }

  doMath(array){
    var first_number = "";
    const output = -1;
    for(let index = 0; index < array.length; index ++){
      const value = array[index];
      if (first_number === "" && value === "-"){ //to handle negative numbers
        first_number += "-";
        continue;
      }
      if (index + 1  === array.length){ //we have reached end of expression
        return parseFloat(first_number + value);
      }
      if (value === "+"){
        return parseFloat(first_number) + this.doMath(array.slice(index + 1));
      }
      else if (value === "-"){
        return parseFloat(first_number) - this.doMath(array.slice(index + 1));
      }
      else if (value === "*"){
        return this.calcMult(first_number, array.slice(index + 1));
      }
      else if (value === "/"){
        return this.calcDiv(first_number, array.slice(index + 1));
      }
      else if (value === "#"){
        var evaluated = this.calcExp(first_number, array.slice(index + 1));
        if (evaluated[1] == 0){
          return evaluated[0];
        }
        //adding the evaluated as the beginning of next input array
        return this.doMath([evaluated[0].toString()].concat(array.slice(array.length - evaluated[1])))
      }
      else{
        first_number += value;
      }
    }
    return output;
  }

  calcMult(first_number, array){
    var second_number = "";
    for(let index = 0; index < array.length; index ++){
      const value = array[index];
      if (second_number === "" && value === "-"){ //to handle negative numbers
        second_number += "-";
        continue;
      }
      if (index + 1 === array.length){
        return parseFloat(first_number) * parseFloat(second_number + value);
      }
      if (value === "+" || value === "-" || value === "*" || value === "/"){
        var evaluated = parseFloat(first_number) * parseFloat(second_number);
        return this.doMath([evaluated.toString()].concat(array.slice(index)));
      }
      else if (value === "#"){
        var exp_index = this.calcExp(second_number, array.slice(index + 1));
        var evaluated = parseFloat(first_number) * exp_index[0];
        if (exp_index[1] == 0){
          return evaluated;
        }
        return this.doMath([evaluated.toString()].concat(array.slice(array.length - exp_index[1])))      }
      else{
        second_number += value;
      }
    };
  }

  calcDiv(first_number, array){
    var second_number = "";
    for(let index = 0; index < array.length; index ++){
      const value = array[index];
      if (second_number === "" && value === "-"){ //to handle negative numbers
        second_number += "-";
        continue;
      }
      if (index + 1 === array.length){
        return parseFloat(first_number) / parseFloat(second_number + value);
      }
      if (value === "+" || value === "-" || value === "*" || value === "/"){
        var evaluated = parseFloat(first_number) / parseFloat(second_number);
        return this.doMath([evaluated.toString()].concat(array.slice(index)));
      }
      else if (value === "#"){
        var exp_index = this.calcExp(second_number, array.slice(index + 1));
        var evaluated = parseFloat(first_number) / exp_index[0];
        if (exp_index[1] == 0){
          return evaluated;
        }
        return this.doMath([evaluated.toString()].concat(array.slice(array.length - exp_index[1])))
      }
      else{
        second_number += value;
      }
    };
  }

  calcExp(first_number, array){
    var second_number = "";
    for(let index = 0; index < array.length; index ++){
      const value = array[index];
      if (second_number === "" && value === "-"){ //to handle negative numbers
        second_number += "-";
        continue;
      }
      if (index + 1 === array.length){
        return [Math.pow(parseFloat(first_number),parseFloat(second_number + value)),0];
      }
      if (value === "+" || value === "-" || value === "*" || value === "/" || value === "#"){
        return [Math.pow(parseFloat(first_number),parseFloat(second_number)), array.length - index];
      }
      else{
        second_number += value;
      }
    };
    return -1
  }

  checkValidCharacter(character){
    var valid_character = ['1','2','3','4','5','6','7','8','9','0','#','-','+','/','*', ' '];
    if (!valid_character.includes(character)){
      throw new Error("Invalid character input: " + character);
    }
    return true;
  }

}

module.exports = parseOrderOfOperations;

// var calcExprFromCommandLine = new parseOrderOfOperations(process.argv);
// calcExprFromCommandLine.orderOfOperations();
// console.log(calcExprFromCommandLine.results);
