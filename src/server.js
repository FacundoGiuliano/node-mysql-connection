// importar express
const express = require('express');
const allItems = require('./allItems');

//ejecutando express
const app = express();

//utilizaremos solicitudes y respuestas en formato json
app.use(express.json());

//el servidor funcionara en el puerto:
const PORT = 3303;
app.listen(3303, () => {console.log(`Funcionando en el puerto: ${PORT}`)});

// devuelve una respuesta con un estado y un json que reciba el resultado de la funcion allitems.
app.get('/', async (req, res) => {
    const query = await allItems();
    return res.status(201).json(query);
});

