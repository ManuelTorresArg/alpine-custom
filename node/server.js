// node/server.js
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('¡Hola desde la aplicación Node.js!');
});

app.post('/api/data', (req, res) => {
  console.log('Datos recibidos:', req.body);
  res.json({ message: 'Datos recibidos y procesados', data: req.body });
});

app.listen(port, () => {
  console.log(`Node.js app listening at http://localhost:${port}`);
});