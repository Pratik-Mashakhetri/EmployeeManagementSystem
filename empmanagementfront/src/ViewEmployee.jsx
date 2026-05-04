import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ViewEmployee() {

    let [employees, setEmployees] = useState([]);
    let [reload, setReload] = useState(false)
    let [showmodel, setShowmodel] = useState(false)
    let [empid, setempid] = useState(0);
    // Personal Info
    let [firstname, setFirstname] = useState("");
    let [middlename, setMiddlename] = useState("");
    let [lastname, setLastname] = useState("");
    let [email, setEmail] = useState("");
    let [dob, setDob] = useState("");   // yyyy-mm-dd
    let [contactno, setContactno] = useState(0);
    let [gender, setGender] = useState("");

    // Additional Info
    let [edu, setEdu] = useState("");
    let [address, setAddress] = useState("");
    let [aadharno, setAadharno] = useState(0);
    let [panno, setPanno] = useState("");
    let [profile, setProfile] = useState("");

    // Job Info
    let [designation, setDesignation] = useState("");
    let [department, setDepartment] = useState("");
    let [exp, setExp] = useState();
    let [salary, setSalary] = useState(0.0);
    let [worklocation, setWorklocation] = useState("");
    let [reportingmanager, setReportingmanager] = useState("");
    let [status, setStatus] = useState("");

    // Joining Date
    let [joiningdate, setJoiningdate] = useState("");  // yyyy-mm-dd

    let [searchby, setSearchby] = useState("")         // Searching cirteria
    let [keyword, setKeyword] = useState("")           // User input for searching 
    let [searchresult, setSearchresult] = useState([]) // array to store searching data(records)

    let handleprofile = (e) => {

        let file = e.target.files[0];
        console.log(file);
        let filepath = `./assets/img/${file.name}`;
        setProfile(filepath);
    }


    useEffect(() => {
        axios.get("http://localhost:65535/getAllEmp")
            .then((res) => {
                if (res.data != null) {
                    console.log(res.data);
                    setEmployees(res.data);
                }
            })
            .catch((error) => {
                alert("Error In Get Operation")
            })
    }, [reload])


    let deleteemp = (empid) => {

        let permit = window.confirm("Are you sure to delete this record???")
        if (permit) {
            axios.delete(`http://localhost:65535/deleteEmp?empid=${empid}`)
                .then((res) => {
                    if (res.data == "Employee Deleted Succesfully") {
                        alert(res.data)
                        setReload(!reload);
                    }
                })
                .catch(() => {
                    alert("Error In Delete")
                })
        }
    }
    let readytoupdate = (emp) => {
        setShowmodel(true);
        setempid(emp.empid)

        // Personal Info
        setFirstname(emp.firstname);
        setMiddlename(emp.middlename);
        setLastname(emp.lastname);
        setEmail(emp.email);
        setDob(emp.dob);
        setContactno(emp.contactno);
        setGender(emp.gender);

        // Additional Info
        setEdu(emp.edu);
        setAddress(emp.address);
        setAadharno(emp.aadharno);
        setPanno(emp.panno);
        setProfile(emp.profile);

        // Job Info
        setDesignation(emp.designation);
        setDepartment(emp.department);
        setExp(emp.exp);
        setSalary(emp.salary);
        setWorklocation(emp.worklocation);
        setReportingmanager(emp.reportingmanager);
        setStatus(emp.status);

        // Joining Date
        setJoiningdate(emp.joiningdate);
    }

    let updateemp = (e) => {
        e.preventDefault();

        let upemp = {
            firstname, middlename, lastname, email, dob, contactno, gender, edu
            , address, aadharno, panno, profile, designation, department, exp, salary, worklocation
            , reportingmanager, status, joiningdate
        }

        axios.put(`http://localhost:65535/updateEmp?empid=${empid}`, upemp)
            .then((res) => {
                if (res.data == "Employee Record Updated Successfully") {
                    alert(res.data);
                    setShowmodel(false);
                    setReload(!reload);
                }
            })
            .catch((err) => {
                alert("Something went wrong with update...")
            })
    }

    let searchemp = () => {
        let url;


        if (searchby == "firstname") {
            url = `http://localhost:65535/ByFirstname?firstname=${keyword}`;
        }
        else if (searchby == "lastname") {
            url = `http://localhost:65535/ByLastname?lastname=${keyword}`;
        }
        else if (searchby == "designation") {
            url = `http://localhost:65535/ByDesignation?designation=${keyword}`;
        }
        else if (searchby == "department") {
            url = `http://localhost:65535/ByDepartment?department=${keyword}`;
        }
        else if (searchby == "empid") {
            let keyword1 = parseInt(keyword)
            url = `http://localhost:65535/ById?empid=${keyword1}`;
        }
        else {
            alert("Please Enter Valid Criteria")
        }

        axios.get(url)
            .then((res) => {
                if (res.data.length == 0 || res.data==null) {
                    alert(`No Matching Record found for the given ${searchby} 
                        we are showing all employee...`)
                   setSearchresult([]);
                }
                else {
                //    // setSearchresult([])
                //     setSearchresult([res.data])
                if(Array.isArray(res.data)){
                    setSearchresult(res.data)
                }else{
                    setSearchresult([res.data])
                }
                 
                }
            })
            .catch(() => {
                alert("Error In Get Search Operation")
            })
    }
    return (
        <div>

            <div className='d-flex gap-2'>
                Search By: <select onChange={(e) => { setSearchby(e.target.value) }}>
                    <option>Search</option>
                    <option value="firstname">By Firstname</option>
                    <option value="lastname">By Lastname</option>
                    <option value="department">By Department</option>
                    <option value="designation">By Designation</option>
                    <option value="empid">By EmpID</option>
                </select>

                {searchby && <div className='d-flex gap-2 '>
                    <input type='text' placeholder={`Enter ${searchby}`} onChange={(e) => { setKeyword(e.target.value) }}></input>
                    <button className='btn btn-primary ' onClick={searchemp}>Search</button>
                </div>}

            </div>

            <div className='container-fluid'>
                <div className='row mb-5 gy-3'>
                    {
                        (searchresult.length > 0 ? searchresult : employees).map((emp) =>
                            <div className='col-3'>
                                <div class="card" style={{ "width": "18rem" }}>
                                    <img src={emp.profile} class="card-img-top" alt="Profile Image"></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{emp.firstname} {emp.middlename} {emp.lastname}</h5>
                                        <p class="card-text">
                                            <p>EmpId: <strong>{emp.empid}</strong></p>
                                            <p>Email: <strong>{emp.email}</strong></p>
                                            <p>Contact Number: <strong>{emp.contactno}</strong></p>
                                            <p>Department: <strong>{emp.department}</strong></p>
                                            <p>Designation: <strong>{emp.designation}</strong></p>
                                            <p>DOB :<strong>{emp.dob}</strong></p>
                                        </p>
                                        <div className='d-flex gap-2 justify-content-center'>
                                            <button className='btn btn-warning' onClick={() => { readytoupdate(emp) }}>Update</button>
                                            <button className='btn btn-danger' onClick={() => { deleteemp(emp.empid) }}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
            <div>

                {showmodel ? <div class="modal start d-block">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Update Employee Details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={() => { setShowmodel(false) }}></button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={updateemp}>
                                    {/* Personal Info */}
                                    <h5 className="text-dark border-bottom pb-2 mb-3">
                                        Personal Details
                                    </h5>

                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Middle Name</label>
                                            <input type="text" className="form-control" value={middlename} onChange={(e) => { setMiddlename(e.target.value) }} />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" value={lastname} onChange={(e) => { setLastname(e.target.value) }} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Date of Birth</label>
                                            <input type="date" className="form-control" value={dob} onChange={(e) => { setDob(e.target.value) }} />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Contact No</label>
                                            <input type="number" className="form-control" value={contactno} onChange={(e) => { setContactno(e.target.value) }} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Gender</label>
                                            <select className="form-control" value={gender} onChange={(e) => { setGender(e.target.value) }} >
                                                <option>Select Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Education</label>
                                            <input type="text" className="form-control" value={edu} onChange={(e) => { setEdu(e.target.value) }} />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Address</label>
                                            <input type="text" className="form-control" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Aadhar No</label>
                                            <input type="number" className="form-control" value={aadharno} onChange={(e) => { setAadharno(e.target.value) }} />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">PAN No</label>
                                            <input type="text" className="form-control" value={panno} onChange={(e) => { setPanno(e.target.value) }} />
                                        </div>
                                    </div>

                                    {/* Work Info */}
                                    <h5 className="text-dark border-bottom pb-2 mt-4 mb-3">
                                        Work Details
                                    </h5>

                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Designation</label>
                                            <input type="text" className="form-control" value={designation} onChange={(e) => { setDesignation(e.target.value) }} />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Department</label>
                                            <input type="text" className="form-control" value={department} onChange={(e) => { setDepartment(e.target.value) }} />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Experience (Years)</label>
                                            <input type="number" className="form-control" value={exp} onChange={(e) => { setExp(e.target.value) }} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Salary</label>
                                            <input type="number" className="form-control" value={salary} onChange={(e) => { setSalary(e.target.value) }} />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Work Location</label>
                                            <input type="text" className="form-control" value={worklocation} onChange={(e) => { setWorklocation(e.target.value) }} />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Reporting Manager</label>
                                            <input type="text" className="form-control" value={reportingmanager} onChange={(e) => { setReportingmanager(e.target.value) }} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Status</label>
                                            <select className="form-control" value={status} onChange={(e) => { setStatus(e.target.value) }} >
                                                <option>Select Status</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Joining Date</label>
                                            <input type="date" className="form-control" value={joiningdate} onChange={(e) => { setJoiningdate(e.target.value) }} />
                                        </div>
                                    </div>

                                    {/* Profile Image */}
                                    <div className="mb-3">
                                        <label className="form-label">Profile Image</label>
                                        <input type="file" className="form-control" accept="image/*" onChange={(e) => { handleprofile(e) }} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Profile Preview</label>
                                        <img src={profile}></img>
                                    </div>

                                    <div className="text-center">
                                        <button className="btn btn-primary px-4">Update Employee</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                    : null}
            </div>

        </div>
    )
}
