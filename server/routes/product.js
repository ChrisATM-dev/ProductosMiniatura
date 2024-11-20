const router = require("express").Router();
const pool = require("../db");


router.get("/", async(req, res) =>{
    try {

        const result = await pool.query("select * from productos")
        res.json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
});

router.get("/:categoria?", async (req, res) => {
    try {
        const { categoria } = req.params;  // Obtener la categoría de la URL
        const result = await pool.query("select * from productos where categoria = $1",[categoria]);

        res.json(result.rows);  // Enviar los productos como respuesta

      } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
      }
});

module.exports = router;