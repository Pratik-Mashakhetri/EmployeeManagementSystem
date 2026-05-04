import axios from 'axios';
import { LogIn } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterUser() {
    const [isRegistered, setIsRegistered] = useState(false);

    // Registration Data States
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [contactno, setContactno] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [role, setRole] = useState('Employee');
    const [gender, setGender] = useState('');
    const [empid, setEmpid] = useState('');
    const navigate = useNavigate();

    // --- VALIDATION LOGIC ---
    const validateRegistration = () => {
        // 1. Check if any field is empty
        if (!firstname || !lastname || !email || !contactno || !username || !password || !confirmpassword || !gender || !empid) {
            alert("All fields are mandatory!");
            return false;
        }

        // 2. Username: Only characters (letters) allowed
        const usernameRegex = /^[A-Za-z]+$/;
        if (!usernameRegex.test(username)) {
            alert("Username must contain only alphabetic characters.");
            return false;
        }

        // 3. Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // 4. Password validation: 8-20 chars, 1 uppercase, 1 special, 1 numeric
        // Explanation: (?=.*[A-Z]) (at least one uppercase), (?=.*\d) (at least one digit), (?=.*[@$!%*?&]) (at least one special symbol)
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be 8-20 characters long, include at least one uppercase letter, one number, and one special symbol (@$!%*?&).");
            return false;
        }

        // 5. Confirm Password
        if (password !== confirmpassword) {
            alert("Passwords do not match!");
            return false;
        }

        return true;
    };

    const handleregistration = (e) => {
        e.preventDefault();

        // Run validations first
        // if (!validateRegistration()) return;

        axios.get(`http://localhost:65535/ById?empid=${empid}`)
            .then((response) => {
                let arr = Object.keys(response.data);
                if (arr.length === 0) {
                    alert("Please Enter The Valid Employee Id")
                } else {
                    let user = { firstname, lastname, email, contactno, username, password, confirmpassword, gender, empid, role }
                    axios.post("http://localhost:65535/register", user)
                        .then((response) => {
                            if (response.data === "User Registration Succesfull") {
                                alert(response.data);
                                setIsRegistered(true);
                            } else {
                                alert(response.data);
                            }
                        })
                        .catch(() => alert("Something is Wrong with backend"));
                }
            })
            .catch(() => alert("Something Is Wrong"));
    }

    const login = (e) => {
        e.preventDefault();

        
        // Simple empty check for login
        if (!username || !password) {
            console.error();    
            alert("Please provide both username and password.");
            return;
        }

        let userlogin = { username, password }
        axios.post("http://localhost:65535/login", userlogin)
            .then((response) => {
                if (response.data) {
                    let user = response.data
                    alert(`Welcome ${user.firstname} ${user.lastname}`)

                    localStorage.setItem("userinfo",JSON.stringify(response.data))
                    localStorage.setItem("isloggedin","true")

                    if (user.role.toLowerCase() === "admin") {
                        navigate("/admindashboard")
                    } else {
                        navigate("/employeedashboard")
                    }
                }
            })
            .catch((err)=>{
                alert("Wrong Username Or Passowrd...")
            });
           
    }

    return (
        <div className="container mt-5">
            {isRegistered ? (
                /* LOGIN FORM */
                <div className="d-flex justify-content-center">
                    <form className="p-4 border rounded shadow-sm w-50 bg-white" onSubmit={login}>
                        <h1 className="text-center mb-4">User Login Form</h1>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Username</label>
                            <input type="text" className="form-control" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Password</label>
                            <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="submit">Login</button>
                            <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => setIsRegistered(false)}>
                                New User? Click here to Register
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                /* REGISTRATION FORM */
                <div className="d-flex justify-content-center">
                    <form className="p-4 border rounded shadow-sm w-75 bg-white" onSubmit={handleregistration}>
                        <h1 className="text-center mb-4">User Registration</h1>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="fw-bold">First Name</label>
                                <input type="text" className="form-control" onChange={(e) => setFirstname(e.target.value)} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="fw-bold">Last Name</label>
                                <input type="text" className="form-control" onChange={(e) => setLastname(e.target.value)} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="fw-bold">Email</label>
                                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="fw-bold">Contact No</label>
                                <input type="number" className="form-control" onChange={(e) => setContactno(e.target.value)} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="fw-bold">Username</label>
                                <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="fw-bold">Employee ID</label>
                                <input type="number" className="form-control" onChange={(e) => setEmpid(e.target.value)} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="fw-bold">Password</label>
                                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="fw-bold">Confirm Password</label>
                                <input type="password" className="form-control" onChange={(e) => setConfirmpassword(e.target.value)} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="fw-bold">Role</label>
                                <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                                    <option value="Admin">Admin</option>
                                    <option value="Employee">Employee</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="d-block fw-bold">Gender</label>
                                <div className="mt-2">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="Male" id="male" onChange={(e) => setGender(e.target.value)} />
                                        <label className="form-check-label" htmlFor="male">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" value="Female" id="female" onChange={(e) => setGender(e.target.value)} />
                                        <label className="form-check-label" htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-grid gap-2 mt-4">
                            <button className="btn btn-success" type="submit">Register</button>
                            <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => setIsRegistered(true)}>
                                Already Registered? Click here to Login
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}