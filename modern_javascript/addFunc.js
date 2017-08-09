function addFunction (argv){
  var sum = parseFloat(argv[2]) + parseFloat(argv[3])
  console.log(sum)
}

addFunction(process.argv)
