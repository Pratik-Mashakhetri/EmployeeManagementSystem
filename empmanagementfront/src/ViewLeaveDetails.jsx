import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ViewLeaveDetails = () => {
    let [empid, setEmpid] = useState(0);

    let [result, setResult] = useState([])
    let viewleave = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:65535/findAllLeaveByEmpId?empid=${empid}`)
            .then((res) => {
                alert(res.data)
                console.log(res.data)
                setResult(res.data);
            })
            .catch((err) => {
                alert("Error in fetching Leave Details By Empid")
            })
    }
    return (
        <div>
            <h1>Leave Details</h1>
            <form onSubmit={viewleave}>
                Enter Emp: <input
                    type="number"
                    onChange={(event) => { setEmpid(event.target.value) }}
                />
                <button>Submit</button>
            </form><br />

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
                    {result.map((e) => (
                        <tr key={e.id}>
                            <td>{empid}</td>
                            <td>{e.leaveid}</td>
                            <td>{e.firstname}</td>
                            <td>{e.lastname}</td>
                            <td>{e.fromdate}</td>
                            <td>{e.todate}</td>
                            <td>{e.reason}</td>
                            <td>{e.status}</td>
                         
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}
