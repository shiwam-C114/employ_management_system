import React from 'react'

function Display(props) {

    console.log(props,"data");
  return (
    <div>
            {props.data.map(employee => (  
              <div style={{border: "2px black solid", margin: "20px"}}>  
                <p>name: {employee.name}</p>
                <p>department: {employee.department}</p>
                <p>gender: {employee.gender}</p>
                <p>role: {employee.role}</p>
                <p>salary: {employee.salary}</p>

              </div>  
            ))}  
    
    </div>
  )
}

export default Display