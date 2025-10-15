const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
      minlength: [2, "El nombre debe tener al menos 2 caracteres"],
    },
    telefono: {
      type: String,
      required: [true, "El teléfono es obligatorio"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.+@.+\..+/, "Formato de email inválido"],
    },
  },
  { timestamps: true }
);

// Índice único para email (por si el collection ya existe, ayuda a reforzar)
clienteSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("Cliente", clienteSchema);
