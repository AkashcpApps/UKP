import React from "react";
import RegistrationForm from "./Register";
import './Settings.css';
import { DataGrid } from '@material-ui/data-grid';
import * as Constants from "../utils/Constants";

const axios=require('axios');

  
const columns = [
  { field: 'FirstName', headerName: 'FirstName', width: 170 },
  { field: 'LastName', headerName: 'LastName', width: 170 },
  { field: 'Level', headerName: 'Level', width: 170 },
  { field: 'Email', headerName: 'Email', width: 170 },
  { field: 'PhoneNumber', headerName: 'PhoneNumber', width: 170 },
  { field: 'UserName', headerName: 'UserName', width: 170 },
  { field: 'RoleID', headerName: 'RoleID', width: 170 },
];
  
export const Settings = () => {
  return (
    <div className="settings">
      <h1>Andmin settings and configuraions would go here.</h1>
    </div>
  );
};
 
export const Register = () => {
 
    return (
        <div style={{ marginLeft: '260px' }}>
         
            <div className="new-registraion-form-header">
                <h3>Setup New Account</h3>
            </div>
            <div>
                <RegistrationForm />
            </div>
        </div>
  );
};
  
export const AllUsers = () => {
  const [pageSize, setPageSize] = React.useState(30);
  const [rows, setRows] = React.useState([]);
  return (
    <div className="allusers">
       {
             React.useEffect(() => {
              axios.get(Constants.url+'UKP/rest/endpoints/GetAllUser')
              .then(res=>{
                setRows(res.data.mUserList);
  
              }).catch(err=>{
  
              })
              }, [])
           
          }
  <div style={{ height: 500, width: '80%' ,margin:8 }}>
      <DataGrid
            getRowId={(r) => r.Id}
                rows={rows}
                rowHeight={25}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[10, 20, 30, 50]}
                pagination
                filterModel={{
                  items: [
                    { columnField: 'FirstName',
                      operatorValue: 'contains', 
                      value: '' },
                  ],
                }}
            />
    </div>
    </div>
  );
};

export const UserRoles = () => {
  return (
    <div className="userroles">
      <h1>List of different roles available are displayed.</h1>
    </div>
  );
};

export const SendSMS = () => {
  return (
    <div className="sendsms">
      <h1>Provisions to enter multiple numbers and a message text to be sent. Or Chose the users from the list of users and send the message all the selected users.</h1>
    </div>
  );
};

export const SendEmail = () => {
  return (
    <div className="sendemail">
      <h1>Provision to enter multple email ids separated by ';' and to enter the subject and body text to send across. Also select the list of users from the list and send the email to all selected users.</h1>
    </div>
  );
};

export const UploadFile = () => {
  return (
    <div className="uploadfile">
      <h1>Provision to upload the file</h1>
    </div>
  );
};

export const Config = () => {
  return (
    <div className="config">
      <h1>AWS Server configuraion and others should go here. For us I don't think this has any relavance.</h1>
    </div>
  );
};

export const ResetPassword = () => {
  return (
    <div className="resetpassword">
      <h1>Change password provisions for the current user.</h1>
    </div>
  );
};