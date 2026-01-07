import { tasksCollection } from "../Config/ToDoConfig";
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
     id: setItems.id, 
    title: newTask.title,
    description: newTask.description,
    status: newTask.status,
    priority: newTask.priority,
    deadline: newTask.deadline,
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
 const id = await deleteId.get();
   if (!id.exists) {
    throw new Error('Task not found');
  }
  await deleteId.delete();
}

export const updateTask = async(taskId:string,updateItem : Partial<Task>): Promise<Task>=>{

  const updateId = tasksCollection.doc(taskId);
  const existsOne = await updateId.get();
  if(!existsOne){
    throw new Error("The item is not found");
  }
  await updateId.update(updateItem);
  return{
    id:taskId,
    ...updateItem,

  }as Task;
}