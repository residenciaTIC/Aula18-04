import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { questionsRouter } from './router/questionsRouter.js';


const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(express.json());
app.use(cors());

app.use('/questoes', questionsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
