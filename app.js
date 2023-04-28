import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;


import indexRoute from './routes/apiRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import detailRoute from './routes/detailRoute.js';

app.use("/", [indexRoute, categoryRoute, detailRoute]);
app.set('view engine', 'ejs')
app.listen(port, ()=>{
    console.log(`Connected at PORT ${port}`);
})