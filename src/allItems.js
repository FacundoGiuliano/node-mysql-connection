//importaremos la conexión
const connection = require('./connection');

//Nos permite enviar comandos MySQL como un parámetro de cadena que se ejecutan y devuelven una respuesta.
// usamos async en la función allItems y await en la conexión responsable de interactuar con la base de datos.
// Esto es necesario porque no sabemos cuándo nos responderá el banco y solo podemos continuar 
// con la ejecución después de recibir algún resultado de este.
const allItems = async () => { //
    const [query] = await connection.execute('SELECT * FROM sakila.actor');
    return query;
};

module.exports = allItems;