const express = require("express");
const cors = require("cors");
const app = express();

//middleware
app.use(express.json());
app.use(cors());

// Rutas
app.use("/product", require("./routes/product"));



app.listen(5000, () => {
    console.log("server is running on port 5000");
})