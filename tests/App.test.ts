import request from 'supertest';
import {app} from '../src/App';
import { addNewItem } from '../src/Services/TaskServices';

jest.mock('../src/Services/TaskServices',()=>({
    addNewItem: jest.fn()
}));

describe('the testing for controller and services', ()=>{
    
})