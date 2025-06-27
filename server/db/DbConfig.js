import mongoose from 'mongoose'
const DbConfig = async ()=>{
    try{

    const response = await mongoose.connect("mongodb+srv://muthupandir74738:zVVrq6ctQoSOI5eX@cluster0.ssb6tbm.mongodb.net/dummy")
    console.log(response.connection.host , "Database Connected Successfully");
    

    }catch(err){
        console.log(err);
        process.exit(0);
        
  
  }
}

export default DbConfig;