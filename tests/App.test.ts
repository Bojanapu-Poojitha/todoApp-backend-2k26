import request from 'supertest';
import {app} from '../src/App';
import { addNewItem } from '../src/Services/TaskServices';

jest.mock('../src/Services/TaskServices',()=>({
    addNewItem: jest.fn()
}));

describe('the testing for controller and services', ()=>{
    test('/post method, to add a new task ', async()=>{
        const task = {
            title:'poojit',
            description:'this is my name',
            status:'in progress',
            priority:'medium',
            deadline:'2026-01-05'
        };
        (addNewItem as jest.Mock).mockResolvedValue(task);

        const response = await request(app).post('/tasks').send(task);
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('new item created');
        expect(response.body.data).toEqual(task);
        
    })
})