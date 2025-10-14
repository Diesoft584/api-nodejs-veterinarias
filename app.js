const express = require("express");
const app = express();
const dbconnet = require("./config/db");

// Middleware para parsear JSON
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.send("El servidor esta funcionando correctamente");
});

// Conexión a la base de datos e inicio del servidor
dbconnet()
  .then(() => {
    app.listen("3000", () => {
      console.log("El servidor esta corriendo en el puerto 3000");
    });
  })
  .catch((err) => {
    console.log(
      "No se pudo iniciar el servicio debido a un error en la base de datos"
    );
  });
