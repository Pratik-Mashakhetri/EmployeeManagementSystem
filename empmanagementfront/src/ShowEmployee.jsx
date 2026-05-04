import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ShowEmployee() {

    let [employees, setEmployees] = useState([]);


    let [searchby, setSearchby] = useState("")         // Searching cirteria
    let [keyword, setKeyword] = useState("")           // User input for searching 
    let [searchresult, setSearchresult] = useState([]) // array to store searching data(records)

  


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
    }, [])


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
                                       
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
            <div>
            </div>

        </div>
    )
}
