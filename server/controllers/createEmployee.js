import EmployeeModel from "../models/employee.js"

const CreateEmployee = async(req,res)=>{
    try {
        const {name,age,position,salary} = req.body
        const newEmployee  = await EmployeeModel.create({
            name ,
            position  : position || "Labour",
            age,
            salary
        })
        return res.json({
            data : newEmployee,
            success : true,
            message : "Employee added successfully"
        })
    } catch (error) {
        res.json({
            data :{},
            success : false,
            message : error.message
        })
        
    }
}

export default CreateEmployee;