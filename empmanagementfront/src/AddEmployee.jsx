import axios from 'axios';
import React from 'react'
import { useState } from 'react';
export default function AddEmployee() {


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

 // let add=process.env.REACT_APP_SERVER_IP

  let handleprofile = (event) => {

    let file = event.target.files[0];
    console.log(file);
    let filepath = `./assets/img/${file.name}`;
    setProfile(filepath);
  }

  let validation = () => {
    if (
      firstname === "" ||
      middlename === "" ||
      lastname === "" ||
      email === "" ||
      dob === "" ||
      contactno === 0 ||
      gender === "" ||
      edu === "" ||
      address === "" ||
      aadharno === 0 ||
      panno === "" ||
      profile === "" ||
      designation === "" ||
      department === "" ||
      exp === 0 ||
      salary === 0 ||
      worklocation === "" ||
      reportingmanager === "" ||
      status === "") {
      alert("Please Enter All the Fields")
      return true;
    }
    else if (!/^[A-Za-z]{2,16}$/.test(firstname)) {
      alert("Please enter only alphabates in FirstName")
      return true;
    }
    else if (!/^[A-Za-z]{2,16}$/.test(middlename)) {
      alert("Please enter only alphabates in Middlename")
      return true;
    }
    else if (!/^[A-Za-z]{2,16}$/.test(lastname)) {
      alert("Please enter only alphabates in Lastname")
      return true;
    }
    else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
      alert("Invalid email");
      return true;
    }
    else if (!/^[0-9]{10}$/.test(contactno)) {
      alert("Please Enter Valid 10 digit Contact NO")
      return true;
    }
    else if (salary < 0) {
      alert("Salary Must be greater than 0")
      return true;
    }
  }

  let addemp = (event) => {
    event.preventDefault();

    if (validation()) {
      return false;
    }
    let newemp = {
      firstname, middlename, lastname, email, dob, contactno, gender, edu
      , address, aadharno, panno, profile, designation, department, exp, salary, worklocation
      , reportingmanager, status, joiningdate
    }

    axios.post(`${app}/addEmp`, newemp)
      .then((res) => {
        if (res.data == "Employee Added Successfully") {
          alert(res.data)
          console.log("Success")
        }
      })
      .catch((error) => {
        alert("Something went wrong with addemp")
      })
  }

  return (
    <div>
      <form onSubmit={addemp}>

        {/* Main Title */}
        <h2 className="text-center text-danger bg-warning  mb-4">
          Employee Registration Form
        </h2>

        {/* Personal Info */}
        <h5 className="text-dark border-bottom pb-2 mb-3">
          Personal Details
        </h5>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" onChange={(event) => { setFirstname(event.target.value) }} />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Middle Name</label>
            <input type="text" className="form-control" onChange={(event) => { setMiddlename(event.target.value) }} />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" onChange={(event) => { setLastname(event.target.value) }} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" onChange={(event) => { setEmail(event.target.value) }} />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="date" className="form-control" onChange={(event) => { setDob(event.target.value) }} />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Contact No</label>
            <input type="number" className="form-control" onChange={(event) => { setContactno(event.target.value) }} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Gender</label>
            <select className="form-control" onChange={(event) => { setGender(event.target.value) }} >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Education</label>
            <input type="text" className="form-control" onChange={(event) => { setEdu(event.target.value) }} />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" onChange={(event) => { setAddress(event.target.value) }} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Aadhar No</label>
            <input type="number" className="form-control" onChange={(event) => { setAadharno(event.target.value) }} />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">PAN No</label>
            <input type="text" className="form-control" onChange={(event) => { setPanno(event.target.value) }} />
          </div>
        </div>

        {/* Work Info */}
        <h5 className="text-dark border-bottom pb-2 mt-4 mb-3">
          Work Details
        </h5>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Designation</label>
            <input type="text" className="form-control" onChange={(event) => { setDesignation(event.target.value) }} />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Department</label>
            <input type="text" className="form-control" onChange={(event) => { setDepartment(event.target.value) }} />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Experience (Years)</label>
            <input type="number" className="form-control" onChange={(event) => { setExp(event.target.value) }} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Salary</label>
            <input type="number" className="form-control" onChange={(event) => { setSalary(event.target.value) }} />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Work Location</label>
            <input type="text" className="form-control" onChange={(event) => { setWorklocation(event.target.value) }} />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Reporting Manager</label>
            <input type="text" className="form-control" onChange={(event) => { setReportingmanager(event.target.value) }} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Status</label>
            <select className="form-control" onChange={(event) => { setStatus(event.target.value) }} >
              <option>Select Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Joining Date</label>
            <input type="date" className="form-control" onChange={(event) => { setJoiningdate(event.target.value) }} />
          </div>
        </div>

        {/* Profile Image */}
        <div className="mb-3">
          <label className="form-label">Profile Image</label>
          <input type="file" className="form-control" accept="image/*" onChange={(event) => { handleprofile(event) }} />
        </div>
        {/*  Profile Preview */}
        <div className="mb-3">
          <label className="form-label" >Profile Preview</label>
          <img src={profile} style={{ "height": "300px", "width": "300px" }}></img>
        </div>

        <div className="text-center">
          <button className="btn btn-primary px-4">Submit</button>
        </div>

      </form>
    </div>
  )
}
