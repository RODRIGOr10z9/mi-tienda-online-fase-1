const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.post("/comprar", (req, res) => {
    console.log("Compra realizada:", req.body);
    res.send("Compra exitosa");
});

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
