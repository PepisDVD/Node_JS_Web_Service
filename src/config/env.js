//Cargar configuración de variables de entorno
import env from 'dotenv' //Forma actualizada
//require('dotenv').config();

//Cargar configuración para personalizar por el tipo de variable
import ennvar from 'env-var' //Forma actualizada
//const { get }  = require('env-var');

env.config();

//Configuramos las variables de entorno del archivo externo .env
export const envs = {
    PORT: ennvar.get('PORT').required().asPortNumber(), //seteamos a númro
    PUBLIC_PATH: ennvar.get('PUBLIC_PATH').default('public').asString()
}

//Exportamos las variables configuradas
//module.exports = {
//    envs
//}

