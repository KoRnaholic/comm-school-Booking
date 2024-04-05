import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-black-300">
      <div className="container mx-auto px-4 py-6">
        <div className="flex text-center flex-wrap md:flex-nowrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="mt-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Policies
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Discover</h3>
            <ul className="mt-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Trust & Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Travel Credit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Airbnb Citizen
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Hosting</h3>
            <ul className="mt-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Host your home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Host an experience
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Responsible hosting
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold">Support</h3>
            <ul className="mt-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Neighborhood Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Trust & Safety
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p>&copy; 2024 Airbnb, Inc. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="mr-4 hover:text-gray-400">
              Terms
            </a>
            <a href="#" className="mr-4 hover:text-gray-400">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-400">
              Site Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
