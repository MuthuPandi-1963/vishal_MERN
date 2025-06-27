import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    age : {
        type : Number,
    },
    position : {
        type : String,
        default : "Labour"
    },
    salary :{
        type : Number,
        default : 0
    }
},{timestamps:true})

const EmployeeModel = mongoose.model("emp",EmployeeSchema)

export default EmployeeModel;