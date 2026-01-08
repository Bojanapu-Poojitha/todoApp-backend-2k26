import express, { Request } from "express";
import router from "./routes/TaskRouter";
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config();
export const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.use(express.json());
app.use('/tasks', router);
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
