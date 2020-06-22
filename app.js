const argv  = require('./config/yargs').argv;
const colors = require('colors');

const toDo = require('./to-do/to-do');



let comando = argv._[0];

switch ( comando ){
    case 'crear':
       let tarea =  toDo.crear(argv.descripcion);
       console.log(tarea);
        break;
    
    case 'listar':
       let listToDo = toDo.getToDoList();
       console.log('============== TO DO LIST ============='.green);
       listToDo.map( (item) => {
           console.log( item.descripcion );
           console.log(' estado: ', item.completado );
           console.log('  ');
       })
       console.log('========================================'.green);
        break;

    case 'actualizar':
        let updated = toDo.updateToDo(argv.descripcion, argv.completado);
       console.log(updated);
        break;

    case 'prioridades':
        console.log('Muestra la  lista de prioridades');
        break;

    case 'borrar':
       let borrar = toDo.deleteToDo(argv.descripcion);
        break;

    default:
        console.log('Comando no reconocido.');
        break;
}
