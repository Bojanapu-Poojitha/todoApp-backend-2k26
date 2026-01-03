import { Router } from "express";
import { addItem,getTask,deleteTask } from "../Controllers/TasksController";

const router= Router();

router.post('/', addItem);
router.get('/',getTask);
router.delete('/:id',deleteTask);

export default router;