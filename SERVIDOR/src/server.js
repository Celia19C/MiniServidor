const express = require('express');
const app = express();


//CONFIGURACIÓN:
app.use(express.static('src')); //siempre donde esté el server y los archivos de js que quieres utilizar
app.set('view engine','pug'); //el motor de interfaz es pug, porque express usa sistemas de plantillas, en este caso pug (u otros), no html.
app.set('views', 'views'); //

//ROUTES:
app.get('/', (req, res) => {
    res.render('index'); //'/' la raiz y que te pinte como respuesta index.pug
});

app.get('/api/personal-data', (request, response) => { //Crear la api para pedir datos. /api/ y el nombre que le quieres dar a tu api. Les pasas la petición y la llamada y ya creas tu array (o whatever)
    console.log('Declara la variable con los datos a enviar. RECIBE LA PETICION');
    let personalData = [
        {
            name: 'Gloria',
            surname: 'Fernández',
            age: 38
        },
        {
            name: 'Silvia',
            surname: 'de Lucas',
            age: 49
        },
        {
            name: 'Isaac',
            surname: 'de Lucas',
            age: 7
        }
    ];


response.setHeader('Content-Type', 'application/json'); //Se crea la cabecera, info adicional. Es como un HEAD de html
response.send(JSON.stringify(personalData));  
//Esto es para enviar mi objeto al cliente por eso lo convertimos en un objeto plano. Para que se quede almacenado en el servidor. Luego en la parte de front tienes que hacer los contrario. Y con el send metes los datos en el servidor
})




//START APP 
app.listen(4000, () => console.log('El puerto corre')); //En el puerto 3000



//En el GET le dices la ruta
//En el send es lo que mandas al cliente, como string. Nuestro cliente es main.js