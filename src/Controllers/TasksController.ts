import { Request, Response } from "express";
import { Task } from "../type/Tasks";
import { addNewItem } from "../Services/TaskServices";
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
export const getItems = async (req: Request, res: Response) => {
  return res.status(200).json({ tasks });
};

