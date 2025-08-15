const mongoose =require( "mongoose")
require('dotenv').config();


const Database =async ()=>{
    try{

   const DB= await mongoose.connect(process.env.mongoDbUrl)
   console.log(`MongoDB Connected successfully`);
    }
    catch(e){
        console.log(e.message)
    }
}
module.exports = Database;