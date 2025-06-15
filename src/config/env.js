//Cargar configuración de variables de entorno
require('dotenv').config();
//Cargar configuración para personalizar por el tipo de variable
const { get }  = require('env-var');

//Configuramos las variables de entorno del archivo externo .env
const envs = {
    PORT: get('PORT').required().asPortNumber(), //seteamos a númro
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

//Exportamos las variables configuradas
module.exports = {
    envs
}

