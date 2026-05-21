import React from 'react';
import { useState } from 'react';

function Developers() {
    const [developers, setDevelopers]= useState([
        {id: 1, name: "elsayed mohamed", position: "full stack dev"}
    ]);
    const [showForm, setShowForm] = useState(false);
    //temp storages for the forms inputs to cach its changes
    const [nameInput, setNameInput]= useState("");
    const [posInput, setPosInput]= useState("");
    // the save value func
    const handleAddDev = (e)=>{
        e.preventDefault(); // no refresh for pages
        if (nameInput.trim()=== ""|| posInput.trim()==="") return;
        //new dev creat
        const newDeveloper = {
            id: Date.now(),
            name: nameInput,
            position: posInput
        };
        //refresh the old array
        setDevelopers([...developers, newDeveloper]);
        // reset inputs to default values
        setNameInput("");
        setPosInput("");
        // colse form after save
        setShowForm(false);
    };


  return (
    <div className='p-4'>
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>developers management</h2>
            <button className='btn btn-primary' onClick={()=>setShowForm(!showForm)}>{showForm? "close form": "add new developer"}</button>
        </div>
        {showForm && (
            <form onSubmit={handleAddDev} className="card p-3 mb-4 shadow-sm">
                <h5 className="mb-3">add new developer</h5>
                <div className="row g-3">
                    <div className="col-md-5">
                        <input type="text"
                        className='form-control'
                        placeholder='developer name'
                        value={nameInput}
                        onChange={(e)=> setNameInput(e.target.value)} />
                    </div>
                    <div className="col-md-5">
                        <input type="text"
                         className="form-control"
                         placeholder='position (e.g. frontend)'
                         value= {posInput}
                         onChange={(e)=> setPosInput(e.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <button type='submit' className='btn btn-success w-100'>save</button>
                    </div>
                </div>
            </form>
        )}
            
{/* showing data table */}
        <table className='table table-hover border' >
            <thead className="table-light">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

            {developers.map((dev, index)=>(
                <tr key={dev.id}>
                    <td>{index+ 1}</td>
                    <td>{dev.name}</td>
                    <td>{dev.position}</td>
                    <td>
                        <button className='btn btn-sm btn-danger'>delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
}

export default Developers
