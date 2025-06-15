//Importamos de env.js
const { envs } = require('./config/env.js')
const { startServer } = require('./server/server.js')

//Función de prueba
const main = () => {
    //Cargamos la configuracion inicial
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
} 

//Función agnóstica = Sin nombre
//Función autoconvocada > Creamos la función y la ejecutamos con () al final 
//¿Por qué lo creamos así? Es que queremos que sea asíncrona. Es la única forma
( async () => {
    main()
})()