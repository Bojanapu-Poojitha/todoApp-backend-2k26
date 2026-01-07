import express, { Request } from "express";
import router from "./routes/TaskRouter";
import cors from 'cors';
const app = express();
app.use(cors());
const PORT = 3000;

app.use(express.json());
app.use('/tasks', router);
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
