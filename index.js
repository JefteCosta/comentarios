const app = require('express')();
const consign = require('consign');

//const database = require('./src/config/database');

//app.db = database;

  consign()
  .then('./src/server/Models')
  //.then('./src/server/Config/passport.js')
  .then('./src/server/Config/Middlewares')
  .then('./src/server/lib')
  .then('./src/server/Controllers/api')
  .then('./src/server/Config/routes.js')
  .into(app)

  app.listen(3001, () => {
    console.log('sistema iniciado com sucesso prota: 3001');
  })
