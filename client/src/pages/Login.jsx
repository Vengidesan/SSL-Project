import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#fdecec] flex items-center justify-center">
      <div className="bg-white/70 backdrop-blur-lg w-[380px] p-8 rounded-2xl border border-white shadow-lg">
        
        <h1 className="text-3xl font-bold text-[#e56565] text-center mb-1">NITC Mess</h1>
        <p className="text-center text-gray-600 mb-6 text-sm">Login to continue</p>

        <div className="mb-4">
          <label className="text-gray-700 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#e56565]"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="text-gray-700 text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full mt-1 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#e56565]"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="w-full bg-[#e56565] text-white py-3 rounded-xl font-semibold hover:bg-red-500 transition">
          Login
        </button>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#e56565] font-semibold hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
