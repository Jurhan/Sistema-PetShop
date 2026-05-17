const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API do Pet Shop funcionando 🚀");
});

app.get("/pets", (req, res) => {
  res.json([
    { id: 1, nome: "Rex", tipo: "Cachorro" },
    { id: 2, nome: "Mimi", tipo: "Gato" },
    { id: 3, nome: "Bolt", tipo: "Cachorro" }
  ]);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});