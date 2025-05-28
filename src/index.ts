import express from "express";
import itemRoutes from "./routes/items";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", itemRoutes);

app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.listen(PORT, () => {
  console.log(`Hello I'm listening on http://localhost:${PORT}`);
});
