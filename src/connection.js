//el uso de “promise” es necesario porque las consultas a bases de datos externas implican tratamientos
//de asincronía y, para usar async y await con la librería, necesitamos realizar la
//importación como se explica
const mysql = require('mysql2/promise');

// la funcion createPool toma un objeto como parametro.
// Se encarga de devolver un conjunto de conexiones anteriores a la base de datos
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'sakila'
});

module.exports = connection;

