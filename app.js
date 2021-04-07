require('colors');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// visualiza los argumentos enviados desde la consola
// console.log(process.argv);

// // extrea informacion del arreglo
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');

// console.log(arg3);
// console.log(base);

// const base = 3;

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));
// ==================================================

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));