import { MongoClient } from 'mongodb'

export default function getDbClient(): MongoClient {
    const client = new MongoClient(process.env.MONGODB_URI as string);
    return client;
} 