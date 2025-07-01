import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";
import EmployeeForm from "./EmployeeForm";
import EditEmployeeForm from "./EditEmployeeForm";

export default function EmployeeDetails({ state, setState }) {
  const [employeeData, setEmployeeData] = useState([]);
  const [editData, setEditData] = useState({});
  const bgURL = import.meta.env.VITE_BACKEND_URL;
  const fetchEmployees = async () => {
    try {
      const res = await axios.get(`${bgURL}/employee`);
      const { success, message, data } = res.data;

      if (!success) {
        alert(message);
        return;
      }
      if (success) {
        // alert(message);
      }
      setEmployeeData(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${bgURL}/employee/${id}`);
      const { success, message, data } = res.data;

      if (!success) {
        alert(message);
        return;
      }
      if (success) {
        setState((prev) => !prev);
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = (val) => {
    setEditData({ ...val });
  };
  useEffect(() => {
    fetchEmployees();
  }, [state]);
  return (
    <div>
      <h1>Employee Details</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((val, id) => (
            <>
              {editData._id == val._id && <EditEmployeeForm form={val} />}
              <tr key={id}>
                <td>{id + 1}</td>

                <td>
                  {editData._id == val._id ? (
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter a name"
                      defaultValue={val.name}
                    />
                  ) : (
                    val.name
                  )}
                </td>
                <td>{val.age}</td>
                <td>{val.position}</td>
                <td>{val.salary}</td>
                <td> 
                  <button onClick={() => handleEdit(val)}>
                    <FaEdit />
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(val._id)}>
                    <RiDeleteBin7Fill />
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
