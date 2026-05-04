import React, { useEffect, useState } from 'react'
import EmployeeDashboard from './EmployeeDashboard';
import axios from 'axios';

export const LeaveApplication = () => {

    let [empid, setEmpid] = useState(0);
    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");
    let [fromdate, setFromdate] = useState("")
    let [todate, setTodate] = useState("")
    let [reason, setReason] = useState("")
    let [reload, setReload] = useState(true)
    let [showmodel, setShowModel] = useState(false)
    let [leaveid,setLeaveid]=useState(0);

    let [allleave, setAllleave] = useState([]);

    let today=new Date().toISOString().split("T")[0];

    useEffect(() => {

        let user = JSON.parse(localStorage.getItem("userinfo"))

        setEmpid(user.empid)
        setFirstname(user.firstname)
        setLastname(user.lastname)

        axios.get(`http://localhost:65535/findAllLeaveByEmpId?empid=${user.empid}`)
            .then((res) => {
                console.log(res.data)
                setAllleave(res.data)
            })
            .catch(() => {
                alert("Error in fetching all leaves")
            })
    }, [reload])


    let applyleave = (e) => {
        e.preventDefault();

        let leave = { firstname, lastname, fromdate, todate, reason, employee: { "empid": empid } }

        axios.post("http://localhost:65535/applyForLeave", leave)
            .then((res) => {
                if (res.data == "Applied For Leave Successfully") {
                    alert(res.data)
                    setReload(!reload)
                }
            })
            .catch(() => {
                alert("Something went wrong with apply leave")
            })
    }

    let cancelleave = (leaveid) => {
        let permit = window.confirm("Are you sure you want to cancel leave???")

        if (permit) {
            axios.delete(`http://localhost:65535/cancelLeave?leaveid=${leaveid}`)
                .then((res) => {
                    if (res.data = "Leave Cancelled Succesfully") {
                        alert(res.data)
                        setReload(!reload)
                    }

                })
                .catch(() => {
                    alert("Leave Cancelled Succesfully..")
                })
        }
    }

    let readytoudapte = (e) => {


        setShowModel(true)

        setFromdate(e.fromdate);
        setTodate(e.todate);
        setReason(e.reason);
        setLeaveid(e.leaveid)
    }

    let updateleave=(e)=>{
        e.preventDefault();
        let upleave={fromdate,todate,reason}
        axios.put(`http://localhost:65535/updateLeave?leaveid=${leaveid}`,upleave)
        .then((res)=>{
            console.log(res.data)
            if(res.data=="Leave Updated Succesfully..."){
                alert(res.data)
                setReload(!reload)
                setShowModel(false)
            }

        })
        .catch(()=>{
            alert("Failed To Updaed")
        })
    }
    return (
        <div>
            <form onSubmit={applyleave}>

                <h1>Apply For Leave</h1>


                <div className="row">
                    <div className="col-md-2 mb-2">
                        <label className="form-label">Emp ID</label>
                        <input type="text" className="form-control" value={empid} />
                    </div>

                    <div className="col-md-4 mb-6">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" value={firstname} />
                    </div>
                    <div className="col-md-4 mb-6">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" value={lastname} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-6">
                        <label className="form-label">From Date</label>
                        <input type="date" className="form-control"  min={today} onChange={(event) => { setFromdate(event.target.value) }} />
                    </div>
                    <div className="col-md-4 mb-6">
                        <label className="form-label">To Date</label>
                        <input type="date" className="form-control" onChange={(event) => { setTodate(event.target.value) }} />
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-4 mb-6">
                        <label className="form-label">Reason</label>
                        <textarea className='form-control' onChange={(event) => { setReason(event.target.value) }}></textarea>
                    </div>
                </div>

                <button className='btn btn-primary'>Apply For Leave</button>

            </form><br />

            <h1>Your leave Stats</h1>


            <table className='table table-bordered'>
                <thead className='table-primary'>
                    <tr>
                        <th>Emp ID:</th>
                        <th>Leave ID:</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>Reason</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {allleave.map((e) => (
                        <tr key={e.id}>
                            <td>{empid}</td>
                            <td>{e.leaveid}</td>
                            <td>{e.firstname}</td>
                            <td>{e.lastname}</td>
                            <td>{e.fromdate}</td>
                            <td>{e.todate}</td>
                            <td>{e.reason}</td>
                            <td>{e.status}</td>
                            <td className='d-flex gap-2 justify-content-center'>
                                <button className='btn btn-danger' onClick={() => { cancelleave(e.leaveid) }}>Cancel</button>
                                <button className='btn btn-warning' disabled={e.status == "Approved"} onClick={() => { readytoudapte(e) }}>Update</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

            {showmodel ? 
            <form >
            <div class="modal start d-flex" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Update Leave Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{setShowModel(false)}}></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                    <div className="col-md-4 mb-6">
                        <label className="form-label">From Date</label>
                        <input type="date" className="form-control" value={fromdate} onChange={(e) => { setFromdate(e.target.value) }} />
                    </div>
                    <div className="col-md-4 mb-6">
                        <label className="form-label">To Date</label>
                        <input type="date" className="form-control" value={todate} onChange={(e) => { setTodate(e.target.value) }} />
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-4 mb-6">
                        <label className="form-label">Reason</label>
                        <textarea className='form-control'value={reason} onChange={(e) => { setReason(e.target.value) }}></textarea>
                    </div>
                </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{setShowModel(false)}}>Close</button>
                            <button type="button" class="btn btn-primary" onClick={updateleave}>Update Leave</button>
                        </div>
                    </div>
                </div>
            </div>
            </form>

      
                : null}
        </div>
    )
}
