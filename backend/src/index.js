const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * const express Contém todas as funcionalidades do express
 * const app Armazena a aplicação
 */

/**
 * Antes de todas requisições, o express converter os JSON em objeto para o javascript entender
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle
 * NoSQL: MongoDB, CouchDB
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

/**
 * IMPORTANTE: QUANDO DAR UM NPM INSTALL EM ALGUMA DEPENDENCIA DEVE SE LEMBRAR DE VERIFICAR SE IRA UTILIZAR SOMENTE EM DESENVOLVIMENTO
 * NPM INSTALL NODEMON -D (-D SIGNIFICA QUE SERÁ SOMENTE UTILIZADA PARA DESENVOLVIMENTO)
 */

/**
 * NPM - INSTALA UM PACOTE
 * NPX - EXECUTA UM PACOTE
 */
