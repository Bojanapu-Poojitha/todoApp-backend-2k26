import { Request, Response } from "express";
import { Task } from "../type/Tasks";
import { addNewItem,getItems } from "../Services/TaskServices";
const tasks: Task[] = [];
export const addItem = async (req: Request, res: Response) => {
  try {
    const newTask: Task = req.body;
    const task = await addNewItem(newTask);

    res.status(201).json({ message: "new item created", data: task });
  } catch (e) {
    res.status(500).json({ message: "failing" });
  }
};
export const getTask = async (req: Request, res: Response) => {
  try {
    const allItems = await getItems();
    res.status(200).json({ message: "Items", data: allItems });
  } catch (e) {
    res.status(500).json({ message: "failed to get items" });
  }
};

