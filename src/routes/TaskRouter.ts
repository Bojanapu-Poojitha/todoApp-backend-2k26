import { Router } from "express";
import { addItem } from "../Controllers/TasksController";

const router= Router();

router.post('/', addItem);

export default router;