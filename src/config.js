import dotenv from 'dotenv';
dotenv.config();

const config = {
    port: process.env.PORT,
    mongo_uri: process.env.MONGODB_URI,
};

export default config;
