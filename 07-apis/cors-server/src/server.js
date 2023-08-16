import express from "express";
import cors from "cors";

const app = express();

// Configurar CORS para que acepte peticiones de un dominio en particular
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

// Configurar express para recibir datos en formato JSON
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "Hola desde el server!" });
});

app.get("/api/query", (req, res) => {
  const { name, age } = req.query;
  console.log({ name, age });
  res.json({ message: `Nombre: ${name}, Edad: ${age}` });
});

app.use(express.json());

app.post("/api/body", (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Nombre: ${name}, Edad: ${age}` });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
