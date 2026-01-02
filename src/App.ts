import express, { Request } from "express";
import router from "./routes/TaskRouter";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/tasks', router);
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
