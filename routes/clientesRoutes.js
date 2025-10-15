const express = require("express");
const Cliente = require("../models/Cliente");
const router = express.Router();

/**
 * GET /clientes
 * Lista todos los clientes
 */
router.get("/clientes", async (req, res) => {
  try {
    const clientes = await Cliente.find().sort({ createdAt: -1 });
    res.json(clientes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener clientes", error: error.message });
  }
});

/**
 * GET /clientes/:id
 * Obtiene un cliente por ID
 */
router.get("/clientes/:id", async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente)
      return res.status(404).json({ message: "Cliente no encontrado" });
    res.json(cliente);
  } catch (error) {
    res
      .status(400)
      .json({ message: "ID inválido o error al buscar", error: error.message });
  }
});

/**
 * POST /clientes
 * Crea un cliente
 */
router.post("/clientes", async (req, res) => {
  try {
    const nuevo = new Cliente(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    // Manejo de duplicado de email
    if (error.code === 11000) {
      return res.status(400).json({ message: "El email ya está registrado" });
    }
    res
      .status(400)
      .json({ message: "Error al crear cliente", error: error.message });
  }
});

/**
 * PUT /clientes/:id
 * Actualiza un cliente
 */
router.put("/clientes/:id", async (req, res) => {
  try {
    const actualizado = await Cliente.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!actualizado)
      return res.status(404).json({ message: "Cliente no encontrado" });
    res.json(actualizado);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "El email ya está registrado" });
    }
    res
      .status(400)
      .json({ message: "Error al actualizar cliente", error: error.message });
  }
});

/**
 * DELETE /clientes/:id
 * Elimina un cliente
 */
router.delete("/clientes/:id", async (req, res) => {
  try {
    const eliminado = await Cliente.findByIdAndDelete(req.params.id);
    if (!eliminado)
      return res.status(404).json({ message: "Cliente no encontrado" });
    res.json({ message: "Cliente eliminado" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al eliminar cliente", error: error.message });
  }
});

module.exports = router;
