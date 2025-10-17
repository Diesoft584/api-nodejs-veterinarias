const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dbconnect = require("./config/db");
const clientesRoutes = require("./routes/clientesRoutes");
const mascotasRoutes = require("./routes/mascotasRoutes");
const corsOptions = require("./config/corsOptions");
const app = express();

dotenv.config();

//Configuración de cors
app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.send("El servidor está funcionando correctamente");
});

// Montar rutas base
app.use("/api", clientesRoutes); // /api/clientes
app.use("/api", mascotasRoutes); // /api/mascotas

// Endpoint de estado del sistema
app.get("/api/status", (req, res) => {
  const estadoDB =
    mongoose.connection.readyState === 1 ? "Conectada" : "Desconectada";

  res.json({
    api: "🩺 API Veterinarias funcionando correctamente",
    baseDeDatos: estadoDB,
    horaServidor: new Date().toLocaleString(),
  });
});

// Conexión DB + levantar servidor
dbconnect()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`✅ El servidor está corriendo en el puerto ${PORT}`);
      console.log(`CORS configurado para http://localhost:5173`);
    });
  })
  .catch(() => {
    console.log(
      "❌ No se pudo iniciar el servicio debido a un error en la base de datos"
    );
  });
