import mongoose from 'mongoose'
const DbConfig = async ()=>{
    try{

    const response = await mongoose.connect(process.env.MONGO_DB_URL)
    console.log(response.connection.host , "Database Connected Successfully");
    

    }catch(err){
        console.log(err);
        process.exit(0);
        
  
  }
}

export default DbConfig;