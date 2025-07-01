import EmployeeModel from "../models/employee.js"

const GetEmployee = async(req,res)=>{
    try {
        const Employees  = await EmployeeModel.find()
        return res.json({
            data : Employees,
            success : true,
            message : "Employee fetched successfully"
        })
    } catch (error) {
        res.json({
            data :{},
            success : false,
            message : error.message
        })
        
    }
}

export default GetEmployee;