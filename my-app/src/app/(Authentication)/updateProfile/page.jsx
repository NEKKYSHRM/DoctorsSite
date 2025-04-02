"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

export default function () {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/userData");
        setUser((prevUser) => ({
          ...prevUser,
          ...response.data.data,
        }));
      } catch (error) {
        console.log("Error fetching profile: ", error);
      }
    };

    fetchUserData();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/updateProfile", user);
      console.log(response);      
      router.push("/profile");
    } catch (error) {
      console.log("Signup Error: ", error);
      toast.error(error.message);
    } finally {
      setLoading(true);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          {loading ? "Loading..." : "Update Profile"}
        </h1>
        <form onSubmit={submitForm} className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="userName"
              placeholder={user.fullName || ""}
              id="name"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="string"
              name="phone"
              id="phone"
              placeholder={user.phone || ""}
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={user.location}
              placeholder={user.location || ""}
              onChange={(e) => setUser({ ...user, location: e.target.value })}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={user.email || ""}
              required
              readOnly
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
