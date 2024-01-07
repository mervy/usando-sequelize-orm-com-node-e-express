import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import routes from './routes/routes.js';

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(routes);

app.listen(PORT, ()=>{
    console.log(`Server started in port ${PORT}`);
})