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
    { nome: "Rex", tipo: "Cachorro" },
    { nome: "Mimi", tipo: "Gato" }
  ]);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});