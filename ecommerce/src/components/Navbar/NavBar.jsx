import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/Footer";

export default function NavBar() {
  return (
    <div className="h-screen flex flex-col">
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center shadow-blue-400">
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-bold text-gray-800">ShopEasy</span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link to={"/"} className="hover:text-blue-600">
            Home
          </Link>
          <Link to={"/categories"} className="hover:text-blue-600">
            Categories
          </Link>
          <Link to={"/brands"} className="hover:text-blue-600">
            Brands
          </Link>
          <Link to={"/products"} className="hover:text-blue-600">
            Products
          </Link>
          <Link to={"/contact"} className="hover:text-blue-600">
            Contact
          </Link>
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Register
          </button>
        </div>
      </nav>   
      <div className="flex-1">
      <Outlet />
        </div> 
      <Footer/>
    </div>
  );
}
