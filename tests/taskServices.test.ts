import { addNewItem ,deleteItem,getItems,updateTask} from "../src/Services/TaskServices";
import { tasksCollection } from "../src/config/toDoConfig";
import { Task } from "../src/type/tasks";

jest.mock("../src/Config/ToDoConfig");
describe('service file test cases',()=>{


  test("addNewItem, to return the new task with generated id", async () => {
  const mockSet = jest.fn();
  const mockDoc = { id: "eds", set: mockSet };
  (tasksCollection.doc as jest.Mock).mockReturnValue(mockDoc);
  const task = {
    title: "biryani",
    description: "famous one",
    status: "pending",
    priority: "high",
    deadline: "2026-01-01",
  };
  const result = await addNewItem(task as any);
  expect(mockSet).toHaveBeenCalled();
  expect(result.id).toBe("eds");
  expect(result.title).toBe("biryani");
});

test("deleteItem, to throw error an if task does not exist", async () => {
  const mockTheGet = jest.fn().mockResolvedValue({ exists: false });
  (tasksCollection.doc as jest.Mock).mockReturnValue({
    get: mockTheGet,
  });
  await expect(deleteItem("notId")).rejects.toThrow("Task not found");
});

test("getItems, to return all the tasks", async () => {
  const mockTasks: { data: () => Task }[] = [
    { data: () => ({ id: "1", title: "biryani", description: "food", status: "pending", priority: "high", deadline: "2026-01-01" }) },
    { data: () => ({ id: "2", title: "lunch", description: "day", status: "pending", priority: "medium", deadline: "2026-01-02" }) },
  ];
  (tasksCollection.get as jest.Mock).mockResolvedValue({
    forEach: (task: (taskDoc: { data: () => Task }) => void) =>
      mockTasks.forEach(task),
  });
  const result = await getItems();
  expect(result.length).toBe(2);
  expect(result[0].title).toBe("biryani");
});

test("updateTask, to update an existing task", async () => {
  const mockUpdate = jest.fn();
  const mockGet = jest.fn().mockResolvedValue({ exists: true });
  (tasksCollection.doc as jest.Mock).mockReturnValue({
    get: mockGet,
    update: mockUpdate,
  });
  const updatedTask = { title: "dum-biryani" };
  const result = await updateTask("1", updatedTask);
  expect(mockUpdate).toHaveBeenCalledWith(updatedTask);
  expect(result.title).toBe("dum-biryani");
  expect(result.id).toBe("1");
});

test("deleteItem,to delete the task if it exists", async () => {
  const mockDelete = jest.fn();
  const mockGet = jest.fn().mockResolvedValue({ exists: true });
  (tasksCollection.doc as jest.Mock).mockReturnValue({
    get: mockGet,
    delete: mockDelete,
  });
  await deleteItem("1");
  expect(mockGet).toHaveBeenCalled();
  expect(mockDelete).toHaveBeenCalled();
});
})