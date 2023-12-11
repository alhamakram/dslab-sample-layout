import React, { useEffect } from "react";
import { useState } from "react";
import {  useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Records = () => {
  let index = 0;
  const navigate = useNavigate();
  const location = useLocation();
  const [records, setRecords] = useState([]);
  useEffect(() => {
    loadRecords();
  }, []);
  let result = [];
  const loadRecords = async () => {
    //console.log(location.state.email);
    if (location === null || location.state === null) navigate("/");
    else if (location.state.role === "admin")
      result = await axios.get(`http://localhost:8080/records`);

    console.log(result);
    setRecords(result.data);
  };
  const logout = () => {
    navigate("/");
  };
  const editRecords = async (e) => {
    try {
      console.log(e.target.value);
      await axios
        .post(`http://localhost:8080/record/updates`, { id: e.target.value })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message === "done") {
              //console.log(res.data.email);
              loadRecords();
              navigate("/records", location);
            } else {
              alert("doesn't exist");
            }
          },
          (fail) => {
            console.error(fail);
          }
        );
    } catch (err) {
      alert(err);
    }
  };
  const deleteRecords = async (e) => {
    try {
      await axios
        .post(`http://localhost:8080/delete/{e.target.value}`, {
          id: e.target.value,
        })
        .then(
          (res) => {
            console.log(e.target.value);

            if (res.data.message === "done") {
              //console.log(res.data.email);
              loadRecords();
              navigate("/records", location);
            } else {
              alert("doesn't exist");
            }
          },
          (fail) => {
            console.error(fail);
          }
        );
    } catch (err) {
      alert(err);
    }
  };
  const upload = (e) => {
    const file = document.getElementById("multiple_files").files[0];

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log(reader.result);
      localStorage.setItem(e.target.value, reader.result);
    });
    reader.readAsDataURL(file);
  };
  
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="grid grid-cols-6 gap-8 place-content-end h-12 ...">
          <button
            type="button"
            className="absolute  top-0 right-0 place-content-end text-gray-900 x-100 px-4 border bg-red-700 border-red-300 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-red-600 dark:hover:bg-red-700 dark:hover:border-red-600 dark:focus:ring-red-700"
            onClick={logout}
          >
            Logout
          </button>
        </div>
        <table className="mt-4  w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                SL.NO
              </th>
              <th scope="col" class="px-6 py-3">
                Patient's Name
              </th>
              <th scope="col" class="px-6 py-3">
                Test
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
              <th scope="col" class="px-6 py-3">
                Upload
              </th>
              <th scope="col" class="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  key={index}
                >
                  {++index}
                </td>
                <td class="px-6 py-4">{record.name}</td>
                <td class="px-6 py-4">{record.test}</td>
                <td class="px-6 py-4">{record.date}</td>
                <td class="px-6 py-4">{record.status}</td>
                <td class="px-6 py-4">
                  <button
                    value={record.id}
                    onClick={(event) => editRecords(event)}
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Done
                  </button>
                </td>
                <td class="px-6 py-4">
                  <input
                    name="file"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="multiple_files"
                    type="file"
                    multiple
                  />
                  <button value={record.id} onClick={(e) => upload(e)}>
                    Upload
                  </button>
                </td>
                <td class="px-6 py-4">
                  <button
                    value={record.id}
                    onClick={(event) => deleteRecords(event)}
                    class="font-medium text-blue-600 dark:text-blue-500 material-symbols-outlined"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Records;


