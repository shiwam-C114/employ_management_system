
import { useState } from 'react';
import './App.css';
import Display from './display';

function App() {
  const [name, setName] = useState("")
  const [dept, setDept] = useState("")
  const [gender, setGender] = useState("")
  const [role, setRole] = useState("")
  const [salary, setSalary] = useState("")
  const [data, setData] = useState([])

  function postData() {
    fetch("http://localhost:3000/employee",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        department:dept,
        gender:gender,
        role:role,
        salary:salary
      })
    })

    fetch("http://localhost:3000/employee").then(res=>res.json()).then(data=>{setData(data);
  console.log(data)})
  }

  function filter(value) {
    if (value === "") {
      fetch(`http://localhost:3000/employee`).then(res=>res.json()).then(data=>{Display({data})})
      
    }else{
      fetch(`http://localhost:3000/employee?department=${value}`).then(data=>{Display({data})})
  }
}

  return (
  
    <div className="App">
     <h1>Employee</h1> 
     <div>
      <input type="text" name="" id="" placeholder='name'  onChange={(e)=>{setName(e.target.value)}} />
      <input type="text" name="" id="" placeholder='department' onChange={(e)=>{setDept(e.target.value)}} />
      <input type="text" name="" id="" placeholder='gender' onChange={(e)=>{setGender(e.target.value)}} />
      <input type="text" name="" id="" placeholder='role' onChange={(e)=>{setRole(e.target.value)}} />
      <input type="text" name="" id="" placeholder='salary' onChange={(e)=>{setSalary(e.target.value)}} />
      <button onClick={()=>{postData()}} >Add employee</button>
     </div>

     <button onClick={()=>{filter("")}}>Show All Departments</button>
     <button onClick={()=>{filter("Marketing")}}>Show Marketing</button>
     <button onClick={()=>{filter("HR")}}>Show HR</button>
     <button onClick={()=>{filter("IT")}}>Show IT</button>
     <button onClick={()=>{filter("Finance")}}>Show Finance</button>

    <Display data={data} />

    </div>
  );
}

export default App;
