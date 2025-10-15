const express = require("express");
const dotenv = require("dotenv");
const dbconnect = require("./config/db");
const clientesRoutes = require("./routes/clientesRoutes");
const mascotasRoutes = require("./routes/mascotasRoutes");

dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.send("El servidor esta funcionando correctamente");
});

// Montar rutas base
app.use("/api", clientesRoutes); // /api/clientes
app.use("/api", mascotasRoutes); // /api/mascotas

// Conexión DB + levantar servidor
dbconnect()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`El servidor esta corriendo en el puerto ${PORT}`);
    });
  })
  .catch(() => {
    console.log(
      "No se pudo iniciar el servicio debido a un error en la base de datos"
    );
  });
