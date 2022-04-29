import { MongoClient } from 'mongodb';

export const sampleRoute = {
    method: 'get',
    path: '/sample',
    handler: async (req, res) => {
        res.send("This is a sample route!");
    },
};