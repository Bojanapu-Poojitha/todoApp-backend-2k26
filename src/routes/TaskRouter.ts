import { Router } from "express";
import { addItem,getTask,deleteTask, update } from "../controllers/tasksController";

const router= Router();

router.post('/', addItem);
router.get('/',getTask);
router.delete('/:id',deleteTask);
router.put('/:id',update);
export default router;