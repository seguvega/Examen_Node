## Plataformas Web P56 - EXAMEN
Aplicación en NodeJS que permite leer los datos de las
Suscripciones a telefonía celular móvil, publicadas por el Banco
Mundial y publicar las estadísticas de un determinado país en un
año específico.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

 * **Git** .- https://git-scm.com<br/><br/>
 * **Node.js** .- https://nodejs.org. Tenga en cuenta que la versión debe ser igual o superior a la versión 8.<br/><br/>
 * **Npm** .- Administrador de paquetes Node.js, viene con Node.js. Asegúrese de que la versión npm sea igual o superior a la versión 5.
<br/>
<!-- 
**Nota.-** Instalar la versión en linux 12.x
   ```
   sudo apt-get install curl
   curl -sLhttps://deb.nodesource.com/setup_12.x | sudo -E bash -
   sudo apt-get install nodejs
   ``` -->
   
 <!-- * **Windows**
 1. Instalar Visual Studio Code
    https://code.visualstudio.com/download
 2. Instalar node.js
    https://nodejs.org/es/
 3. Instalar la extensión del terminal en Visual Studio Code
    En Visual Studio Code, puede abrir una terminal integrada, inicialmente comenzando en la raíz de su espacio de trabajo. -->


### Instalación 🔧

_Cuando haya completado la configuración de herramientas, debe descargar el código de la aplicación. La forma más fácil de hacerlo es clonar el repositorio de GitHub:_

```
git clone https://github.com/karlaVane/Proyecto-VII-Node.JS.git
```

_Una vez completado la clonación, se debe instalar los módulos npm_

```
cd Proyecto-VII-Node.JS && npm install --save
```

## Ejecutando las pruebas ⚙️

Descargar la data de la siguiente dirección web: [Suscripciones a telefonía celular móvil](http://api.worldbank.org/v2/es/indicator/IT.CEL.SETS?downloadformat=csv)


Para ejecutar y visualizar los resultados en consola y guardar en un archivo .txt, se deberá ingresar los parámetros según el comando:
```
 node app.js mostrar -f="db/datos.csv" -c="ECU" -y=2000
```
```
node app.js guardar -f="db/datos.csv" -c="ECU" -y=1999 
```

