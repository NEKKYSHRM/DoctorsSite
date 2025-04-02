"use client";

import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-blue-50 flex flex-col items-center p-4 text-gray-700">
      <div className="text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
        <p className="mt-1">
          <a href="/privacy" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="text-blue-500 hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
      <div className="flex space-x-4 mt-3">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}
