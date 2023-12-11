import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import useDrivePicker from "react-google-drive-picker";

const New = () => {
  const [test, setTest] = useState();
  const [date, setDate] = useState();

  const location = useLocation();
  console.log(location.state.name);

  const newRecord = async () => {
    try {
      await axios
        .post("http://localhost:8080/solution/new", {
          email: location.state.email,
          name: location.state.name,
          test: test,
          status: "uncompleted",
          date: date,
          data: null,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message === "Email not exits") {
              alert("Email not exits");
            } else if (res.data.message === "done") {
              //console.log(res.data.email);
              console.log(res.data);
            } else {
              alert("Incorrect Email");
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
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Solution
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              for="test"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="test"
                name="test"
                type="test"
                autocomplete="test"
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1.5 focus:ring-inset focus:px-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={test}
                onChange={(event) => {
                  setTest(event.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <label
              for="test"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              About
            </label>
            <div className="mt-2">
              <input
                id="test1"
                name="test1"
                type="test"
                autocomplete="test"
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1.5 focus:ring-inset focus:px-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={test}
                onChange={(event) => {
                  setTest(event.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={newRecord}
            >
              Submit
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not Registered?
          <Link
            to="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default New;
