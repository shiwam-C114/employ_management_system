
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [dept, setDept] = useState("")
  const [gender, setGender] = useState("")
  const [role, setRole] = useState("")
  const [salary, setSalary] = useState("")

  function postData() {
    fetch("http://localhost:3000/employee").then(res=>res.json()).then(console.log)
    console.log(name,dept, gender,role,salary);
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



    </div>
  );
}

export default App;
