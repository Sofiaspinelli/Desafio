let fs = require ('fs')
const tareas = require ('./data/tareas.json')
let guardarJson = (dato) => fs.writeFileSync('./data/tareas.json',JSON.stringify(dato,null,4),'utf-8')


let archivoTareas = {
    leerJson: tareas,
    listarTareas: function () {
        for (let i = 0; i < tareas.length; i++) {
            console.log (`${i+1}, ${tareas[i].titulo} - ${tareas[i].estado}`)
            
        }
    },
    listarForEach: function () {
        tareas.forEach((tarea,i) => {
            console.log (`${i+1} - ${tarea.titulo} - ${tarea.estado}`)
        });
    
    },
    crearTareas: (titulo,estado) => {
        let tarea = {
            titulo,
            estado
        }
        tareas.push (tarea)
        guardarJson(tareas)
        return console.log(`* ${tarea.titulo} - ${tarea.estado}`)
    }
}