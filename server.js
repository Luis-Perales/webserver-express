const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

//Obtener el puerto en herolu, si no obtiene nada usa el 3000
const port = process.env.PORT || 3000;

//middewale, es una instrucion o un callback que se va a ejecutar siempre, no importa que url 
//es la que la persona pida, le pasamoa el directorio a mostar

app.use(express.static(__dirname + '/public'));

// Express HBS engine
//de esta madera le decimos a hbs que ya tiene un directorio que va a contener todos mis parciales
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


//Si se tiene el servicio estatico esto no funcionara
//esto lo ocupamos para renderizar archivos .hbs
app.get('/', (req, res) => {
    //res.send('Hola Mundo')

    //Renderizamos el home.hbs
    res.render('home', {
        nombre: 'luis'
    });
});

app.get('/about', (req, res) => {
    //res.send('Hola Mundo')

    //Renderizamos el home.hbs
    res.render('about');
});
// app.get('/data', (req, res) => {
//     res.send('Hola Data');
// });


//Esto tambien puede resivir una callback
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});

//Un helpers node es mas que una funcion que se dispara cuando el
//template lo requiera