import axios, { all } from 'axios'
import { AlignRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export const ManageLeaves = () => {
        let [empid, setEmpid] = useState(0);

    let [result, setResult] = useState([])
    let [allrecords,setAllRecords]=useState([])
    let [reload,setReload]=useState(false)

    useEffect(()=>{
        axios.get("http://localhost:65535/findAllLeave")
        .then((res)=>{
            setAllRecords(res.data)
            console.log(res.data)

        })
        .catch(()=>{
            alert("Error In Fetching All Records")
        })
    },[reload])

    let viewleave = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:65535/findAllLeaveByEmpId?empid=${empid}`)
            .then((res) => {
                console.log(res.data)
                setResult(res.data);
            })
            .catch((err) => {
                alert("Error in fetching Leave Details By Empid")
            })
    }

    let updatestatus=(e,action)=>{
        axios.put(`http://localhost:65535/updateLeaveStatus?leaveid=${e.leaveid}&action=${action}`)
        .then((res)=>{
            if(res.data=="Leave status updated Succesfully")
            {
                alert(`Leave ${action} Successfully`)
                setReload(!reload);
            }
        })
        .catch(()=>{
            alert("Something went with approval")
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
                    {(result.length>0?result:allrecords).map((e) => (
                        <tr key={e.id}>
                            <td>{e.employee?.empid}</td>
                            <td>{e.leaveid}</td>
                            <td>{e.firstname}</td>
                            <td>{e.lastname}</td>
                            <td>{e.fromdate}</td>
                            <td>{e.todate}</td>
                            <td>{e.reason}</td>
                            <td>{e.status}</td>
                            <td className='d-flex gap-2 justify-content-center'>
                                    <button className='btn btn-success' disabled={e.status=="Approved"} onClick={()=>{updatestatus(e,"Approved")}}>Approve</button>
                                     <button className='btn btn-danger' disabled={e.status=="Approved"} onClick={()=>{updatestatus(e,"Rejected")}}>Reject</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
  )
}
