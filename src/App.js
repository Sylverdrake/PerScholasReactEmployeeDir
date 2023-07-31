import './App.css';
import employees from './models/employees'
import EmployeeListItem from './components/EmployeeListItem';
import EmployeeContact from './components/EmployeeContact';


const state =
{
    employees
}
function App() {
  return (
<div className="App">

<div className='homePage'>

<div className='header'>
Employee Directory
</div>

<input className='searchBar' type='text' placeholder='Search...'></input>
  <div className='employeeList'>
    <EmployeeListItem employeeInfo={state.employees[0]}/>
    <EmployeeListItem employeeInfo={state.employees[1]}/>
    <EmployeeListItem employeeInfo={state.employees[2]}/>
    <EmployeeListItem employeeInfo={state.employees[3]}/>
    <EmployeeListItem employeeInfo={state.employees[4]}/>
    <EmployeeListItem employeeInfo={state.employees[5]}/>
  </div>
</div>

<div className='header'>
<div className='employeePage'>


Employee
</div>

    <div className='employeeStuff'>
    <EmployeeContact employeeInfo={state.employees[0]}/>
    </div>
</div>
</div>
  );
}

export default App;
