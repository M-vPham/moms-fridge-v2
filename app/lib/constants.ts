import dotenv from 'dotenv';
dotenv.config();

export const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_URI_USERNAME}:${process.env.MONGODB_URI_PASSWORD}@cluster-0.niqmbaz.mongodb.net/`;
