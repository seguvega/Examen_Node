const argv = require("./config/yargs").argv;
const colors = require("colors");
const obtenerData = require("./buscador/generarDatos").obtenerData;
const crearArchivo = require("./buscador/crearTxt").crearArchivo;
// node app.js mostrar -f="db/datos.csv" -c="ECU" -y=2000
// node app.js guardar -f="db/datos.csv" -c="ECU" -y=1999 

let data;
const menu = () => {
    let comando = argv._[0];
    switch (comando) {
        case "mostrar":
            console.log("------------------------------------------------------".rainbow);
            console.log(`Datos: ${data.datosPais[3]}`.green);
            console.log(`Pais: ${data.datosPais[1]}`.green);
            console.log(`Año: ${argv.anio}`.green);
            console.log(`Valor: `.green, `${data.datosPais[0]}`);
            console.log("----------------------FIN DEL PROGRAMA-----------------".rainbow);
            break;
        case "guardar":
            console.log("Generando Archivo....".green);
            console.log("");
            crearArchivo(data, argv)
                .then((mensaje) => console.log(colors.white(mensaje)))
                .catch((err) => console.log(colors.red(err)));
            break;
        default:
            console.log("Comando no existente");
            break;
    }
};

const ejecutar = async() => {
    data = await obtenerData(argv.pais, argv.anio.toString(), argv.archivo);
    menu();
    return data;
};

ejecutar()
    .then()
    .catch((err) => {
        console.log(colors.red(err));
    });