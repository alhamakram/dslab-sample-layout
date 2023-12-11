import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/save", {
        role: "patient",
        name: name,
        email: email,
        password: password,
      });
      alert("Registration Successful");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registration
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                for="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div classNameName="mt-2">
                <input
                  id="name"
                  name="name"
                  type="email"
                  autocomplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1.5 focus:ring-inset focus:px-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div classNameName="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1.5 focus:ring-inset focus:px-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:px-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <button
                style={{ backgroundColor: "blue" }}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={save}
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already Registered?
            <Link
              to="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
