const { argv } = require('./config/yargs');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        let listado = getListado();
        listado.forEach(element => {
            console.log('========Por hacer========'.green);
            console.log('Tarea: ', element.descripcion);
            console.log('Estado: ', element.completado);
            console.log('========================='.green);
        });
        break;

    case 'crear':
        let tarea = crear(argv.descripcion)
        console.log(tarea);
        break;

    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('No reconocido');
        break;
}