import {Router} from 'express'
import CreateEmployee from '../controllers/createEmployee.js';
import GetEmployee from '../controllers/getEmployee.js';
import GetSingleEmployee from '../controllers/getSingleEmployee.js';
import DeleteEmployee from '../controllers/DeleteEmployee.js';
import UpdateEmployee from '../controllers/UpdateEmployee.js';

const EmployeeRouter = Router()


EmployeeRouter.post("",CreateEmployee)
EmployeeRouter.get("",GetEmployee)
EmployeeRouter.get("/:id",GetSingleEmployee)
EmployeeRouter.put("/:id",UpdateEmployee)
EmployeeRouter.delete("/:id",DeleteEmployee)


export default EmployeeRouter;