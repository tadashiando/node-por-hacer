const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
}

const completado = {
    demand: true,
    alias: 'c'
}

const opt = {
    descripcion
};

const optUpdate = {
    descripcion,
    completado
};

const argv = require('yargs')
    // .command('listar', 'Listar tareas', opts)
    .command('crear', 'Crear tareas', opt)
    .command('actualizar', 'Actualizar tareas', optUpdate)
    .command('listar', 'Tareas por hacer')
    .command('borrar', 'Borrar tarea', opt)
    .help()
    .argv;

module.exports = {
    argv
}