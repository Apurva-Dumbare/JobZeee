import mongoose from 'mongoose';

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "MERN_STACK_JOBSEEKING"
    
    }).then(()=>{
        console.log("Connected to database!")
    }).catch(()=>{
        console.log(`Some error while connectong to the database!!! ${err}`);
    })
}