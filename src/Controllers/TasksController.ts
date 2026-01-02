import { Request, Response } from "express";
import { Task } from "../type/Tasks";

export const addItem = async (req: Request, res: Response) => {
  const newItem: Task = req.body;

  if (!newItem.title) {
    return res.status(400).json({ message: "task title is mandatory" });
  }
  const task: Task = {
    id: "",
    title: newItem.title,
    description: newItem.description,
    status: newItem.status || "pending",
    priority: newItem.priority || "medium",
    deadline: newItem.deadline,
  };
  return res.status(201).json({ message: "item added successfully", task });
};
