import React from 'react';
import myImage from './employeepic.jpg';


function EmployeeListItem(props) 
{
return (
        <div className="employee">
        <div className="pic"><img src={myImage} alt="" /></div>
        
        <div className="employeeID">
        <div className="employeeName">{props.employeeInfo.employeeName}</div>
        <div className="employeeTitle">{props.employeeInfo.employeeTitle}</div>
        </div>

        </div>
        )
}

export default EmployeeListItem