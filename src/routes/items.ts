import { Router, RequestHandler } from "express";
import { addItem, items } from "../data/store";
import { error } from "console";

const router = Router();

const getItems: RequestHandler = (_req, res) => {
  res.status(200).json(items);
};

const createItem: RequestHandler = (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "Name is required and must be a string" });
    return;
  }

  const exists = items.find((i) => i.name.toLowerCase() === name.toLowerCase());
  if (exists) {
    res.status(409).json({ error: "Item with this name already exists" });
    return;
  }
  const newItem = addItem(name);
  res.status(201).json(newItem);
};

const updateItem: RequestHandler = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const numericId = Number(id);
  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "Name is required and must be a string" });
    return;
  }
  const item = items.find((i) => i.id === numericId);
  if (!item) {
    res.status(404).json({ error: "Item not found" });
    return;
  }

  item.name = name;
  res.status(200).json(item);
};

const deleteItem: RequestHandler = (req, res) => {
  const { id } = req.params;
  const numericId = Number(id);
  const index = items.findIndex((i) => i.id === numericId);

  if (index === -1) {
    res.status(404).json({ error: "Item not found!" });
    return;
  }

  items.splice(index, 1);

  res.status(204).send();
};

router.get("/items", getItems);
router.post("/items", createItem);
router.put("/items/:id", updateItem);
router.delete("/items/:id", deleteItem);
export default router;
