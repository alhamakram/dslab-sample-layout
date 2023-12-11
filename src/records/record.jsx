import React, { useEffect } from "react";
import { useState } from "react";
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Record = () => {
  let index = 0;
  const navigate = useNavigate();
  const [records,setRecords] = useState([]);
  const location = useLocation();
  useEffect(()=>{
    loadRecords();
  },[]);
  let result = [];
  
  const loadRecords =  async () =>{
        //console.log(location.state.email);
        if(location == null || location.state == null)navigate("/");
        else{
            result =  await axios.get(`http://localhost:8080/record/${location.state.email}`);
            console.log(result);
            setRecords(result.data);
      }
        }
      
  const newRecord = ()=>{
    navigate("/new",location);
  }
  const logout = () =>{
    navigate("/");
  }
  const downloadRecords = (e)=>{
        const file = localStorage.getItem(e.target.value);
        const value = document.getElementById("report").getAttribute("src");
        if(value){
            
            document.getElementById("report").setAttribute("src","");
        }
        else {
          
            document.getElementById("report").setAttribute("src",file);
        }
        
  }
  return (
    

    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg y-4">
      <div className="grid grid-cols-6 gap-8 place-content-end h-12 ...">
      <button type="button" className="absolute top-0 right-0 place-content-end text-gray-900 bg-white x-100 px-4 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={newRecord}>New</button>
      <button type="button" className="absolute top-0 right-20 place-content-end text-gray-900 bg-white x-100 px-4 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={logout}>Logout</button>
      </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
              SL.NO
             </th>  
              <th scope="col" className="px-6 py-3">
                Patient's Name
              </th>
              <th scope="col" className="px-6 py-3">
                Test
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
          {records.map((record) => (
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                key = {index}
              >
                {++index}
              </td>
              <td className="px-6 py-4">{record.name}</td>
              <td className="px-6 py-4">{record.test}</td>
              <td className="px-6 py-4">{record.date}</td>
              <td className="px-6 py-4">{record.status}</td>
              <td className="px-6 py-4">
                <button
                  src
                  value = {record.id}
                  onClick={event => downloadRecords(event)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Report
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className="container mt-6">
         <h1 className="mx-4 text-6">Report</h1>
          
             
            <img src="" id="report" alt=""/>      
        
        
         
      </div>
    </>
  );
};

export default Record;
