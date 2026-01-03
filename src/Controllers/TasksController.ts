import { Request, Response } from "express";
import { Task } from "../type/Tasks";
import { addNewItem,getItems, deleteItem, updateTask } from "../Services/TaskServices";
import { messaging } from "firebase-admin";
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
export const deleteTask = async(req:Request,res:Response)=>{
  try{
  const {id} = req.params;
   await deleteItem(id);
   res.status(200).json({message:"item is deleted successfully"});
  }
  catch(e){
   res.status(500).json({message:'something went wrong'});
  }


}

export const update = async(req:Request,res:Response)=>{
  try{
    const id = req.params.id;
    const updatedTask: Partial<Task>= req.body;
    const newUpdate = await updateTask(id,updatedTask);
    res.status(200).json({message:"task is updated perfectly"})
  }
  catch(e){
    res.status(500).json({message:"something went wrong while updating"});
  }
}
