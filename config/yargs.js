let mostrar = {
    archivo: {
        demand: true,
        alias: 'f',
        desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    country: {
        demand: true,
        alias: 'c',
        desc: ' Permite determinar el país a analizar a través de su código'
    },
    year: {
        default: 2018,
        alias: 'y',
        desc: 'Permite especificar el año para el cual se requiere las estadísticas'
    }
}

let guardar = {
    archivo: {
        demand: true,
        alias: 'f',
        desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    country: {
        demand: true,
        alias: 'c',
        desc: ' Permite determinar el país a analizar a través de su código'
    },
    year: {
        default: 2018,
        alias: 'y',
        desc: 'Permite especificar el año para el cual se requiere las estadísticas'
    },
}

const argv = require('yargs')
    .command('mostrar', 'Este comando publicará las estadísticas en una página web', mostrar)
    .command('guardar', 'Este comando almacenará los resultados en un archivo json', guardar)
    .help().argv;

module.exports = {
    argv
}