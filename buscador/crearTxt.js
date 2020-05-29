const fs = require('fs');
let arch = [];
let crearArchivo = (datos, arg) => {
    return new Promise((resolve, reject) => {
        arch.push([`Datos: ${datos.datosPais[3]}\n`]);
        arch.push([`Pais: ${datos.datosPais[1]}\n`]);
        arch.push([`Año: ${arg.anio}\n`]);
        arch.push([`Valor: ${datos.datosPais[0]}\n`]);
        console.log(`Nombre del archivo ${datos.datosPais[2]}-${arg.anio}.txt`);
        //let data = JSON.stringify(datos);
        fs.writeFile(`resultados/${datos.datosPais[2]}-${arg.anio}.txt`, arch, (err) => {
            if (err)
                reject(err);
            else
                resolve(`EL archivo del pais ${datos.datosPais[2]} del año ${arg.anio} se a Guardado en la carpeta Resultados`);
        });
    });
}
module.exports = {
    crearArchivo
}