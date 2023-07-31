import React from 'react';
import myImage from './employeepic.jpg';

function EmployeeContact(props) {
return (
<div className="employeeC">


<div className="employeeCID">
<div className="contactPic"><img src={myImage} alt="" /></div>
        <div className="employeeName">{props.employeeInfo.employeeName}</div>
        <div className="employeeTitle">{props.employeeInfo.employeeTitle}</div>
</div>
<div className="contactBox">
    <div className="employeeCInfo" id='contact'>Office #: {props.employeeInfo.officePhone}</div>
    <div className="employeeCInfo" id='contact'>Mobile #: {props.employeeInfo.mobilePhone}</div>
    <div className="employeeCInfo" id='contact'>SMS #: {props.employeeInfo.smsPhone}</div>
    <div className="employeeCInfo" id='contact'>Email: {props.employeeInfo.employeeEmail}</div>
</div>

    </div>
)
}

export default EmployeeContact