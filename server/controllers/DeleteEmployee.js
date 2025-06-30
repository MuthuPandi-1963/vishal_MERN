import EmployeeModel from "../models/employee.js"

const DeleteEmployee = async(req,res)=>{
    try {
        const {id} = req.params;
        
        if(!id){
            return res.status(404).json({
                data : null,
            success : false,
            message : "Id not found"
            })
        }
        const Employee  = await EmployeeModel.findByIdAndDelete(id)
        console.log(Employee);
        
        if(!Employee){
            return res.status(404).json({
                data : null,
            success : false,
            message : "Employee not found"
            })
        }
        return res.json({
            data : Employee,
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

export default DeleteEmployee;