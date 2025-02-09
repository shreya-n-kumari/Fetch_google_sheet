import React from 'react'
import { useState, useEffect } from 'react';

const FetchData = () => {

    // get data functions
      const [employees, setEmployees] = useState([]);
    
      useEffect(() => {
        fetch("https://script.google.com/macros/s/AKfycbwV8Ql1loOs5wB592EyPz02MD83lCOAtRUMZ3veOOOHcFMCdwLqmcMQFEDz_Nq43Qg/exec") // Replace with your deployed Google Apps Script URL
          .then((response) => response.json())
          .then((data) => setEmployees(data))
          .catch((error) => console.log("Error fetching data:", error));
      }, []);

    //   post data function
      const handleSubmit = (e)=>{
        e.preventDefault()
        const url = "https://script.google.com/macros/s/AKfycbwRlWJvFOFvmjkkOsUSH6OIzwFHhFE0_rEqz-_L9CPwYEtiASZP6JQTyhNXvnzDXTvc/exec"
        fetch(url,{
          method:"POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body:(`Emp_ID=${e.target.emp_id.value}&Name=${e.target.name.value}`)
        }).then(res=>res.text()).then(data=>{
          alert(data)
        }).catch(error=>console.log(error))
      }

  return (
    <section className="container mx-auto p-6 mt-6">
              <h2 className='mb-6 text-center text-3xl font-semibold text-white'>Fetch Employe data in Google sheet</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* post data into sheet section */}
      <div className="flex items-center justify-center min-h-96 w-full bg-[#001845] rounded-lg">
    <div className="bg-white shadow-lg rounded-xl p-6  w-full min-h-80 max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Insert Data</h2>
      <form onSubmit={handleSubmit}>
        <input type="digit" name="emp_id" placeholder="Emp ID" className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
 /><br />
        <input type="text" name="name" placeholder="Name"  className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
 /> <br />
        <button type="submit"  className="w-full bg-[#001233] text-white font-semibold py-2 rounded-lg hover:bg-[#001845] transition duration-300"
        >Add</button>
      </form>
    </div>
    </div>

        {/* get data section */}
        <div className="flex items-center justify-center min-h-96 w-full bg-[#001845] rounded-lg">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Employee List
        </h2>

        {/* Scrollable Table Container */}
        <div className="max-h-80 border rounded-lg">
        <div className="max-h-64 overflow-y-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className='bg-[#001845] text-white sticky top-0 z-10'>
              <tr>
                <th className="p-2 border">Emp ID</th>
                <th className="p-2 border">Name</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((emp, index) => (
                  <tr key={index} className="text-center w-full">
                    <td className="p-2 border">{emp.Emp_ID}</td>
                    <td className="p-2 border">{emp.Name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="p-2 text-center text-gray-500">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>

    </div>
    </section>
  )
}

export default FetchData;
