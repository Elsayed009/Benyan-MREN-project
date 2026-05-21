import React from "react";
import { useState } from "react";




function Users({setHasDraft}){
    const [users, setUsers]= useState([
        {id:1, name: "mohamed noh", email: "mohamed@test.com"}
    ]);
const [showForm, setShowForm] = useState(false);
  const [nameInput, setNameInput] = useState("");

  const handleInputChange = (e) => {
    const val = e.target.value;
    setNameInput(val); 

    if (val.trim() !== "") {
      setHasDraft(true);
    } else {
      setHasDraft(false); 
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (nameInput.trim() === "") return;

    const newUser = {
      id: Date.now(),
      name: nameInput,
      email: `${nameInput.toLowerCase().replace(" ", "")}@example.com`
    };

    setUsers([...users, newUser]);
    setNameInput("");
    setHasDraft(false); // badge
    setShowForm(false);
  };



return (
    <div className='p-4'>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>sers Management</h2>
        <button className='btn btn-primary' onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "Add New User"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAddUser} className="card p-3 mb-4 shadow-sm">
          <h5 className="mb-3">add new user</h5>
          <div className="row g-3">
            <div className="col-md-10">
              <input 
                type="text" 
                className='form-control' 
                placeholder='Type user name...' 
                value={nameInput}
                onChange={handleInputChange} 
              />
            </div>
            <div className="col-md-2">
              <button type='submit' className='btn btn-success w-100'>save</button>
            </div>
          </div>
        </form>
      )}

      <table className='table table-hover border'>
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Users