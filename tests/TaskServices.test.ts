import { addNewItem ,deleteItem,getItems,updateTask} from "../src/Services/TaskServices";
import { tasksCollection } from "../src/Config/ToDoConfig";
import { Task } from "../src/type/Tasks";

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
})