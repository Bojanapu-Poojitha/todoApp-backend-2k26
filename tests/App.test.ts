import request from 'supertest';
import {app} from '../src/App';
import { addNewItem, getItems } from '../src/Services/TaskServices';


jest.mock('../src/Services/TaskServices',()=>({
    addNewItem: jest.fn(),
    getItems:jest.fn()
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
        
    });

    test('/get method, to display all items',async()=>{
        const tasks =[
            {
                id:'1',
                title:'poojitha',
                description:'this is my name',
                status:'in progress',
                priority:'high',
                deadline :'2026-01-03'
            },
            {
                id:'4',
                title:'kalyan',
                description:'my bro name',
                status:'pending',
                priority:'medium',
                deadline:'2026-01-05'
            },

        ];
        (getItems as jest.Mock).mockResolvedValue(tasks);
        const response = await request(app).get('/tasks');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Items');
        expect(response.body.data).toEqual(tasks);
    })
})