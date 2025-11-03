import express from 'express';
import routes from './routes/index.js';
import cors from "cors";

const app = express();

// 🔹 Habilita CORS para permitir peticiones desde cualquier origen
app.use(cors());

// o, si quieres permitir solo tu frontend:
app.use(cors({
  origin: "http://localhost:5173"
}));

// Resto de tu configuración...
app.use(express.json());

// Ejemplo de ruta
app.get("/api/users", (req, res) => {
  res.json([{ name: "Andrés" }, { name: "Carlos" }]);
});

app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));

const app = express();
app.use(express.json())

app.set('port', 3000)



app.use('/', routes)

export default app;