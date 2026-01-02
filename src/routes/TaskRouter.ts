import { Router } from "express";
import { addItem,getItems } from "../Controllers/TasksController";

const router= Router();

router.post('/', addItem);
router.get('/',getItems);

export default router;