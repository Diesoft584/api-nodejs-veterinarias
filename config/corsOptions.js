//config/corsOptions.js

const corsOptions = {
  origin: ["https://react-veterinarias-app.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = corsOptions;
