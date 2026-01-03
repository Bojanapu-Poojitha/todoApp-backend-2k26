import { tasksCollection } from "../Config/ToDoConfig";
import { db } from "../Config/ToDoConfig";
import { Task } from "../type/Tasks";
export const addNewItem = async (newTask: Task): Promise<Task> => {
  const setItems = tasksCollection.doc();

  await setItems.set({
    id: setItems.id,
    title: newTask.title,
    description: newTask.description,
    status: newTask.status,
    priority: newTask.priority,
    deadline: newTask.deadline,
  });
  return {
    ...newTask,
  };
};

export const getItems = async (): Promise<Task[]> => {
  const result = await tasksCollection.get();
  const totalItems: Task[] = [];

  result.forEach((task) => totalItems.push(task.data() as Task));
  return totalItems;
};

export const deleteItem = async(taskId:string):Promise<void>=>{
  const deleteId = tasksCollection.doc(taskId);

  await deleteId.delete();
}