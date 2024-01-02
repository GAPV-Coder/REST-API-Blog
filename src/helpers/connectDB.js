import mongoose from 'mongoose';
import config from '../config.js';

const { mongo_uri } = config;

mongoose.connection.setMaxListeners(0);

const connectionDB = async () => {
    try {
        const connection = await mongoose.connect(mongo_uri);
        console.log('Successful database connection');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectionDB;
