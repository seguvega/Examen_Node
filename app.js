const argv = require("./config/yargs").argv;
const colors = require("colors");
const obtenerData = require("./buscador/generarDatos").obtenerData;
const crearArchivo = require("./buscador/crear-json.controller").crearArchivo;
// node app.js mostrar -f="db/datos.csv" -c="ECU" -y=1997
// node app.js guardar -f="db/datos.csv" -c="ECU" -y=1997 -o="HolaMundo

let data;
const menu = () => {
    let comando = argv._[0];
    switch (comando) {
        case "mostrar":
            console.log("------------------------------------------------------".rainbow);
            console.log("Datos:	Personas que usan Internet (% de la población)".green);
            console.log(`Pais: ${data.datosPais[1]}`.green);
            console.log(`Año: ${argv.year}`.green);
            console.log(`Valor: `.green, `${data.datosPais[0]}`);
            console.log("----------------------FIN DEL PROGRAMA-----------------".rainbow);
            break;
        case "guardar":
            console.log("Generando Archivo...".blue);
            crearArchivo(datosPais, argv.out)
                .then((mensaje) => console.log(colors.green(mensaje)))
                .catch((err) => console.log(colors.red(err)));
            break;
        default:
            console.log("Comando no existente");
            break;
    }
};

const ejecutar = async() => {
    data = await obtenerData(argv.country, argv.year.toString(), argv.archivo);
    menu();
    return data;
};

ejecutar()
    .then()
    .catch((err) => {
        console.log(colors.red(err));
    });