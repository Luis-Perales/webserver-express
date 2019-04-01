const http = require('http');


/*Para poder ecuchar peticiones peticiones http primero tenemos que crear el servidor
y esto resive un callback y este callback va a recibir las solicitudes y las respuestas que le vamos
a enviar */
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Luis',
            edad: 24,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        // res.write('Hola Mundo');
        res.end(); //ya terminamos de escribir la respuesta

    })
    .listen(8080);
/*Una vez creado el servidor, se tiene que especificar que puerto es la que va a estar ecuchando */

console.log('Escuchando en el puerto 8080');