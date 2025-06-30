import EmployeeModel from "../models/employee.js"

const UpdateEmployee = async(req,res)=>{
    try {
        const {id} = req.params;
        const {name,age,position,salary} = req.body
        // if(!name || !age || !position || !salary){

        // }
        
        if(!id){
            return res.status(404).json({
                data : null,
            success : false,
            message : "Id not found"
            })
        }
        const Employee  = await EmployeeModel.findById(id);
        if(!Employee){
            return res.status(404).json({
                data : null,
            success : false,
            message : "Employee not found"
            })
        }
        Employee.name = name || Employee.name;
        Employee.age = age || Employee.age;
        Employee.position = position || Employee.position;
        Employee.salary = salary || Employee.salary;
        await Employee.save();
        console.log(Employee);
        
        
        return res.json({
            data : Employee,
            success : true,
            message : "Employee updated successfully"
        })
    } catch (error) {
        res.json({
            data :{},
            success : false,
            message : error.message
        })
        
    }
}

export default UpdateEmployee;