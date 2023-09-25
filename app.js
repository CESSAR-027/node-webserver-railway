import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;


//TODO: require('hbs)
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

//contenido estatico
app.use(express.static('public'));


// app.get('/',  (req, res) => {
//   res.send('Wellcome', '')
// });

// app.get('/home', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html')
// });
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Cesar Martinez',
    titulo: 'Curso NodeJs ',
    enc:'home'
  });

});
//  app.get('/home', (req, res) => {
//   res.render('home');
  
//  });
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Andres Robles',
    titulo: 'Curso Flutter ',
    enc:'generic'
  });
  
});
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'hola mundo',
    titulo: 'Curso de la Vida ',
    enc:'elements'
  });
  
});

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/public/404.html')
// })
// app.listen(8080)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})