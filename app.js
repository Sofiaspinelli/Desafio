let process = require ('process')
let archivo = require ('./funcionesDeTareas')

let accion = process.argv [2]
let accion2=process.argv[3]
let accion3=process.argv[4]

switch (accion) {
    case 'listar':
        console.log ("Listado de tareas")
        console.log ("-----------------")
        archivo.listarTareas();
        break;
    case 'crear':

        console.log ("\nTu tarea fue creada con exito")
        console.log ("-------------------------------")
        archivo.crearTareas(accion2,accion3)
        break;
    case undefined:
        console.log("Atencion!! - Tienes que pasar una accion. Por favor intentente con las siguientes operaciones:\n-listar\n-superlistar\n-agregar\n-filtrar\n-------------");
        break;
    default:
        console.log("No se encuentra la operacion solicitada");
        break;
}