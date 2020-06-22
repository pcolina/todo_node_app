let descripcion = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
}

let completado = {
    completado: {
        demand: true,
        alias: 'c'
    },
}

const argv = require('yargs')
        .command('crear', 'Crea una tarea por hacer', descripcion )
        .command('actualizar', 'Acutualiza el estado de completado por hacer',{ descripcion, completado}  )
        .command('listar', 'Muestra todas las tareas' )
        .command('borrar', 'Elimina la tareas', descripcion )
        .argv;


module.exports = {
    argv
}