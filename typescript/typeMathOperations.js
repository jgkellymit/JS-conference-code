var parseOrderOfOperations = (function () {
    function parseOrderOfOperations(array_from_commandline) {
        this.ourArguments = array_from_commandline;
        this.stringToCalculate;
        this.results;
    }
    parseOrderOfOperations.prototype.orderOfOperations = function () {
        var fullString = "";
        for (var i = 2; i < this.ourArguments.length; i++) {
            fullString += this.ourArguments[i];
        }
        this.stringToCalculate = fullString;
        var arrayFromString = fullString.split("");
        var result = this.doMath(arrayFromString);
        this.results = result;
    };
    parseOrderOfOperations.prototype.doMath = function (array) {
        var first_number = "";
        var output = -1;
        for (var index = 0; index < array.length; index++) {
            var value = array[index];
            if (index + 1 === array.length) {
                return parseFloat(first_number + value);
            }
            if (value === "+") {
                return parseFloat(first_number) + this.doMath(array.slice(index + 1));
            }
            else if (value === "-") {
                return parseFloat(first_number) - this.doMath(array.slice(index + 1));
            }
            else if (value === "*") {
                return this.calcMult(first_number, array.slice(index + 1));
            }
            else if (value === "/") {
                return this.calcDiv(first_number, array.slice(index + 1));
            }
            else if (value === "#") {
                return this.calcExp(first_number, array.slice(index + 1));
            }
            else {
                first_number += value;
            }
        }
        return output;
    };
    parseOrderOfOperations.prototype.calcMult = function (first_number, array) {
        var second_number = "";
        for (var index = 0; index < array.length; index++) {
            var value = array[index];
            if (index + 1 === array.length) {
                return parseFloat(first_number) * parseFloat(second_number + value);
            }
            if (value === "+" || value === "-" || value === "*" || value === "/") {
                var evaluated = parseFloat(first_number) * parseFloat(second_number);
                return this.doMath([evaluated.toString()].concat(array.slice(index)));
            }
            else if (value === "#") {
                return parseFloat(first_number) * this.calcExp(second_number, array.slice(index + 1));
            }
            else {
                second_number += value;
            }
        }
        ;
        return -1;
    };
    parseOrderOfOperations.prototype.calcDiv = function (first_number, array) {
        var second_number = "";
        for (var index = 0; index < array.length; index++) {
            var value = array[index];
            if (index + 1 === array.length) {
                return parseFloat(first_number) / parseFloat(second_number + value);
            }
            if (value === "+" || value === "-" || value === "*" || value === "/") {
                var evaluated = parseFloat(first_number) / parseFloat(second_number);
                return this.doMath([evaluated.toString()].concat(array.slice(index)));
            }
            else if (value === "#") {
                return parseFloat(first_number) / this.calcExp(second_number, array.slice(index + 1));
            }
            else {
                second_number += value;
            }
        }
        ;
        return -1;
    };
    parseOrderOfOperations.prototype.calcExp = function (first_number, array) {
        var second_number = "";
        for (var index = 0; index < array.length; index++) {
            var value = array[index];
            if (index + 1 === array.length) {
                return Math.pow(parseFloat(first_number), parseFloat(second_number + value));
            }
            if (value === "+" || value === "-" || value === "*" || value === "/" || value === "#") {
                var evaluated = Math.pow(parseFloat(first_number), parseFloat(second_number));
                return this.doMath([evaluated.toString()].concat(array.slice(index)));
            }
            else {
                second_number += value;
            }
        }
        ;
        return -1;
    };
    return parseOrderOfOperations;
}());
//module.exports = parseOrderOfOperations;
var calcExprFromCommandLine = new parseOrderOfOperations(process.argv);
calcExprFromCommandLine.orderOfOperations();
console.log(calcExprFromCommandLine.results);
