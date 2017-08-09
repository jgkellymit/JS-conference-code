function parseOperation (argv){
  var first_number;
  var operand;
  var second_number;
  if (argv.length === 5){
    first_number = parseFloat(argv[2])
    second_number = parseFloat(argv[4])
    operand = argv[3]
  }
  else if (argv.length === 4){
    if(argv[2].includes("+") || argv[2].includes('-') || argv[2].includes('/') || argv[2].includes('*')){
      second_number = parseFloat(argv[3])
      first_number = parseFloat(argv[2].substring(0,argv[2].length - 1))
      operand = argv[2].substring(argv[2].length - 1, argv[2].length)
    }
    else{
      first_number = parseFloat(argv[2])
      second_number = parseFloat(argv[3].substring(1, argv[3].length))
      operand = argv[3][0]
    }
  }
  else if(argv.length === 3){
    var operand_index;
    if (argv[2].indexOf("+") !== -1){
      operand_index = argv[2].indexOf("+")
    }
    if (argv[2].indexOf("-") !== -1){
      operand_index = argv[2].indexOf("-")
    }
    if (argv[2].indexOf("*") !== -1){
      operand_index = argv[2].indexOf("*")
    }
    if (argv[2].indexOf("/") !== -1){
      operand_index = argv[2].indexOf("/")
    }
    first_number = parseFloat(argv[2].substring(0,operand_index))
    operand = argv[2][operand_index]
    second_number = parseFloat(argv[2].substring(operand_index + 1, argv[2].length))
  }
  else{
    console.log("Too many arguments.")
  }
  if(operand === '+'){
    console.log(first_number + second_number);
  }
  if(operand === '-'){
    console.log(first_number - second_number);
  }
  if(operand === '/'){
    console.log(first_number / second_number);
  }
  if(operand === '*'){
    console.log(first_number * second_number);
  }
}

cleanParseOperation(process.argv);

function cleanParseOperation(arguments){
  var fullString = ""
  for (var i = 2; i < arguments.length; i ++){
    fullString += arguments[i]
  }
  console.log("calculating...")
  var operand_index;
  if (fullString.indexOf("+") !== -1){
    operand_index = fullString.indexOf("+")
  }
  if (fullString.indexOf("-") !== -1){
    operand_index = fullString.indexOf("-")
  }
  if (fullString.indexOf("*") !== -1){
    operand_index = fullString.indexOf("*")
  }
  if (fullString.indexOf("/") !== -1){
    operand_index = fullString.indexOf("/")
  }
  first_number = parseFloat(fullString.substring(0,operand_index))
  operand = fullString[operand_index]
  second_number = parseFloat(fullString.substring(operand_index + 1, fullString.length))
  if(operand === '+'){
    console.log(first_number + second_number);
  }
  if(operand === '-'){
    console.log(first_number - second_number);
  }
  if(operand === '/'){
    console.log(first_number / second_number);
  }
  if(operand === '*'){
    console.log(first_number * second_number);
  }
}
