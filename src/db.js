import { Sequelize} from 'sequelize';
import dotenv from 'dotenv/config.js';

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPass = process.env.DB_PASS;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    //Passar os dados para o sequelize
    dialect: 'mysql',
    host: dbHost,
});

export default sequelize;