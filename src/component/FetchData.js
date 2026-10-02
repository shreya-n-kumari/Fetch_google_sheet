import React from 'react'
import { useState, useEffect } from 'react';

const API_URL = "https://script.google.com/macros/s/AKfycbw-Q_nJltIsP9cyCfcFGhU1qwHf-ReEXixcP_WG0dC49tC3C3KUcQYTMf6kif4uSC93pw/exec";



const FetchData = () => {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);

  const getEmployees = async () => {
  try {
    setLoading(true);

    const response = await fetch(`${API_URL}?action=getEmployees`);

    if (!response.ok) {
      throw new Error("Unable to fetch employee data.");
    }

    const result = await response.json();

    console.log("Google Sheet GET response:", result);

    if (!result.success) {
      throw new Error(result.message || "Unable to fetch employee data.");
    }

    setEmployees(Array.isArray(result.data) ? result.data : []);
  } catch (error) {
    console.error("Error fetching employees:", error);
    setEmployees([]);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    getEmployees();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const empId = form.emp_id.value.trim();
    const name = form.name.value.trim();

    if (!empId || !name) {
      alert("Please enter both Employee ID and Name.");
      return;
    }

    try {
    //   setIsSubmitting(true);

      const response = await fetch(`${API_URL}?action=addEmployee`, {
        method: "POST",
        redirect: "follow",
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
            Emp_ID: empId,
            Name: name,
        }),
        });
      const result = await response.text();

      if (!response.ok) {
        throw new Error(result || "Employee could not be added.");
      }

      alert(result);

      form.reset();

      // Fetch the updated Google Sheet data and re-render the table
      await getEmployees();

    } catch (error) {
      console.error("Error inserting employee:", error);
      alert(error.message || "Something went wrong.");
    } finally {
    //   setIsSubmitting(false);
    }
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

        {loading && (
              <p className="text-center text-blue-600 mb-4">
                Loading...
              </p>
            )}

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
