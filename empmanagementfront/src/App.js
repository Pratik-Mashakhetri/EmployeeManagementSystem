import logo from './logo.svg';
import './App.css';
import AddEmployee from './AddEmployee';
import ViewEmployee from './ViewEmployee';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import ContactUs from './ContactUs';
import Home from './Home';
import AdminDashboard from './AdminDashboard';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import ShowEmployee from './ShowEmployee';
import EmpNavbar from './EmpNavbar';
import EmployeeDashboard from './EmployeeDashboard';
import RegisterUser from './RegisterUser';
import { FirstPage } from './FirstPage';
import CommanNavBar from './CommanNavBar';
import { LeaveApplication } from './LeaveApplication';
import { ViewLeaveDetails } from './ViewLeaveDetails';
import { ManageLeaves } from './ManageLeaves';



function App() {
  return (
    <div className="App">    


      <BrowserRouter>
      <AddContext/>
      
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route path="/ourservices" element={<OurServices></OurServices>}></Route>
          <Route path="/viewemp" element={<ViewEmployee></ViewEmployee>}></Route>
          <Route path="/addemp" element={<AddEmployee></AddEmployee>}></Route>
          <Route path="/admindashboard" element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path="/showemp" element={<ShowEmployee></ShowEmployee>}></Route>
          <Route path="/registeruser" element={<RegisterUser></RegisterUser>}></Route>
          <Route path='/' element={<FirstPage></FirstPage>}></Route>
          <Route path="/leaveapplication" element={<LeaveApplication></LeaveApplication>}></Route>
          <Route path='/manageleaves' element={<ManageLeaves></ManageLeaves>}></Route>
        </Routes>
      </BrowserRouter>


      {/* <ViewLeaveDetails></ViewLeaveDetails> */}

   
    </div>
  );
}

export default App;

function AddContext(){

  let isloggedin=JSON.parse(localStorage.getItem("isloggedin"))
  let user=JSON.parse(localStorage.getItem("userinfo"))
  let location=useLocation();

  let  publicpages=["/","/home","/aboutus","/contactus","/ourservices"]
  return(
    <div>
      {
        (isloggedin && user  && location.pathname!="/registeruser" ) && 
        (user.role.toLowerCase()=="admin"?<AdminNavbar/>:<EmpNavbar/>)
      }

      {
        (!isloggedin && !user) &&
        publicpages.includes(location.pathname)?<CommanNavBar></CommanNavBar>:null
      }
    </div>
  )
}
