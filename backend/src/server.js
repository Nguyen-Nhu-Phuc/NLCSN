import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import {connectDB} from './config/db.js';

import courseRouter from './routes/course.route.js';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';

dotenv.config();
connectDB();


const app = express();
app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: false }));



// routes
app.use("/api/course", courseRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})