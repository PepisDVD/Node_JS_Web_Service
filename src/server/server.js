import express from 'express'
//const express = require("express") //Para impotar librería de express

import path from 'path'
//const path = require("path") //Para leer las carpetas externas

export const startServer = (options) => {
    //Inicializamos variables
    const { port, public_path = 'public'} = options;

    const app = express(); //ejecutamos toda la aplicación Express

    //Express que todos los archivos dentro de public (o lo que diga public_path) se sirvan directamente cuando el usuario los pida por URL
    app.use(express.static(public_path));
    //Para manejar las peticiones
    //Este es un “catch-all” (captura-todo): Cualquier ruta que no coincida con un archivo existente se responde con el archivo index.html.
    //req: requiest -> Petición que nos hace, por ejemplo, el navegador.
    //res: response -> Lo que se responderá
    app.get("/*path", (req, res) => {
    
            //Para acceder a todas las carpetas externas | Hacemos dinámico el public
            const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
            //Definimos que ante cualquier pedido de ulr en nuestro servidor, siempre estaremos deolviendo el index.html
            res.sendFile(indexPath)
        })  
    
    app.listen(port, () => {
        console.log(`Server escuchando en puerto ${port}`);
    });
}

//Exportamos config
//module.exports = {
//    startServer
//};