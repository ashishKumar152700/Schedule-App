import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {AllUserPage as UserTable} from "./Pages/template/UserMaster/AllUserPage";
import Dashboard from "./Pages/template/DashBoard/Dashboard";
import Login from "./Pages/template/Login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import Adduser from "./Pages/template/UserMaster/Adduser";
import {ManualRouter} from "./ManualRouter";
import Scheduler from "./Pages/template/Scheduler/Scheduler";
import Configuration from "./Pages/template/ConfigMaster/Configuration";
import AddConfig from "./Pages/template/ConfigMaster/AddConfig";
import UpdateConfig from "./Pages/template/ConfigMaster/UpdateConfig";
import EditUser from "./Pages/template/UserMaster/EditUser";
import ChangePasswordForm from "./Pages/template/ChangePassword/ChangePassword";
import Profile from "./Pages/template/UserInfo/Profile";
import AddEmailConfig from "./Pages/template/EmailConfig/AddEmailConfig";
import SMTPserver from "./Pages/template/SMTP Server/SMTPserver";
import { EmailConigList } from "./Pages/template/EmailConfig/EmailConfigList";
import SMTPList from "./Pages/template/SMTP Server/SMTPList";
import UpdateSMTPServer from "./Pages/template/SMTP Server/UpdateSMTPServer";



// const navigate = useNavigate()

const routes = { 
      "/Login"  : <Login/>,
      "/users" : <UserTable/>,
      "/dashBoard" : <Dashboard/>, 
      "/adduser" : <Adduser/>,
      "/scheduler" : <Scheduler/>,
      "/configuraton" : <Configuration/>,
      "/addConfiguraton" : <AddConfig/>,
      "/updateConfiguration" : <UpdateConfig/>,
      "/updateUser" : <EditUser/>,
      "/changepassword" : <ChangePasswordForm/>,
      "/profile" : <Profile/>,
      "/addemail" : <AddEmailConfig/>,
      "/smtpserver" : <SMTPserver/>,
      "/allemailconfig" : <EmailConigList/>,
      "/allsmtplist" : <SMTPList/>,
      "/updatesmtp" : <UpdateSMTPServer/>,


    };


    
    
function App() {
    
  return (
    <>
      <Router>
        <ManualRouter routes={routes} />
      </Router>
    </>
  );
}

export default App;
