let resta = require ('./resta')
let suma = require('./suma')

let calculadora = {
    suma : suma(12,8),
    resta : resta(20,10)


}
let num1 = +arg[4];
let num2 = +arg [4]
switch (argv[2]) {
    case "suma" :
        console.log(suma());
        
        break;
    case "resta": 
    console.log(resta());

    default:
        break;
}