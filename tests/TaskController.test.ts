import { Request,Response } from "express";
import { addItem,getTask,deleteTask,update } from "../src/Controllers/TasksController";
import * as TaskServices from '../src/Services/TaskServices';

jest.mock('../src/Services/TaskServices');
describe('the taskController is ',()=>{
    
})