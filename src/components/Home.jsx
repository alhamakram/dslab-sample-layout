import React from "react";
import { useNavigate , useLocation} from "react-router-dom";

import img from "/Users/320237581/Projects/ds-lab-frontend/src/assets/img/dsGateway.png";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

const newSolution = ()=>{
   
        navigate("/new",location);
      
}
  return (
    <div className="container mt-6">
      <div class="px-2">
        <div class="flex -mx-2">
          <div class="w-1/5 px-2 ">
            <div class="h-80 rounded-2 shadow-2xl px-3">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Solutions
              </h2>
              <ul class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                <li>
                  <a href="" class="nav-item nav-link">
                    DS-Gateway Solution
                  </a>
                </li>
                <li>
                  <a href="" class="nav-item nav-link">
                    RWS Solution
                  </a>
                </li>
                <li>
                  <a href="" class="nav-item nav-link">
                    CT-DID
                  </a>
                </li>
                <li>
                  <a href="" class="nav-item nav-link">
                    HemoGuide
                  </a>
                </li>
                <li>
                  <a href="" class="nav-item nav-link">
                    Karolinska
                  </a>
                </li>
              </ul>
              <button
              style={{backgroundColor:"blue"}}
                type="button"
                class="mt-4
                bg-blue-800 text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none "
                onClick={newSolution}
              >
                New
              </button>
            </div>
          </div>
          <div class="w-3/5 px-2">
            <div class="rounded-2 shadow-2xl">
              <img src={img} alt="img" />
            </div>
          </div>
          <div class="w-1/5 px-2">
            <div class="h-60 rounded-2 shadow-2xl px-2">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Environment
              </h2>
              <ul class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                <li>ILab-PIC-env-1</li>
                <li>ILab-PIC-env-2</li>
                <li>ILab-PIC-EHV Gemba</li>
                <li>CustABC-QA</li>
                <li>CustABC-Dev</li>
              </ul>
              <button
              style={{backgroundColor:"blue"}}
                type="button"
                class="mt-4
                bg-blue-800 text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   focus:outline-none "
              >
                New
              </button>
            </div>

            <div class="h-40 rounded-2 shadow-2xl px-2 mt-4">
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Costing
              </h2>
              <ul class="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                <li>Parameters</li>
                <li>Estimation</li>
                <li>Cost</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
