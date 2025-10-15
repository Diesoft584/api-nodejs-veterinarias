const express = require("express");
const Mascota = require("../models/Mascota");
const Cliente = require("../models/Cliente");
const router = express.Router();

/**
 * POST /mascotas
 * Crea una mascota vinculada a un cliente (requiere cliente_id)
 */
router.post("/mascotas", async (req, res) => {
  try {
    const { cliente_id } = req.body;
    if (!cliente_id) {
      return res.status(400).json({ message: "cliente_id es obligatorio" });
    }

    // Validar que el cliente exista
    const existeCliente = await Cliente.findById(cliente_id);
    if (!existeCliente) {
      return res.status(404).json({ message: "El cliente asociado no existe" });
    }

    const nueva = new Mascota(req.body);
    const guardada = await nueva.save();
    res.status(201).json(guardada);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear mascota", error: error.message });
  }
});

/**
 * GET /mascotas
 * Filtro por cliente: /mascotas?cliente_id=ID
 * Si no se envía cliente_id, lista todas (opcional para pruebas)
 */
router.get("/mascotas", async (req, res) => {
  try {
    const { cliente_id } = req.query;
    const filtro = cliente_id ? { cliente_id } : {};
    const mascotas = await Mascota.find(filtro).populate(
      "cliente_id",
      "nombre email"
    );
    res.json(mascotas);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener mascotas", error: error.message });
  }
});

module.exports = router;
