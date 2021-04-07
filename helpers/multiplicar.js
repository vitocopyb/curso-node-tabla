const fs = require('fs');
const color = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let data = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            data += `${base} x ${i} = ${base * i}\n`;
        }
    
        if (listar) {
            console.log('================================='.green)
            console.log('    TABLA DEL:'.green, color.blue(base))
            console.log('================================='.green)
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, data);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}