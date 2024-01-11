// import dotenv from 'dotenv';
// dotenv.config()

import express from 'express';
import routes from './routes/routes.js';
import db from './src/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

try {
    await db.sync();
    console.log(`Database connected: ${process.env.DB_NAME}`);
} catch (error) {
    console.log('Error in connection', error.message);
}

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`); 
})