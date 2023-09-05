import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addData } from "./Service/api";

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `url('https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=1-EC4Mxf--5u4ItDIzrIOrduXlbKRnbx9xWWtiifrDo=')`, // Replace with your image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const formContainerStyle = {
  background: "#ffffff",
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const inputStyle = {
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "8px 12px",
  marginBottom: "1rem",
  outline: "none",
  boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
  transition: "border-color 0.3s ease",
};

function Signup() {
  const navigate = useNavigate();
  const [focusedInput, setFocusedInput] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addData(formData)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <form onSubmit={handleSubmit}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", textAlign: "center", marginBottom: "24px" }}>
            Sign Up
          </h2>
          <div style={{ marginBottom: "16px" }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                ...inputStyle,
                borderColor: focusedInput === "name" ? "purple" : "#ccc",
              }}
              required
              onFocus={() => setFocusedInput("name")}
              onBlur={() => setFocusedInput(null)}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              style={{
                ...inputStyle,
                borderColor: focusedInput === "username" ? "purple" : "#ccc",
              }}
              required
              onFocus={() => setFocusedInput("username")}
              onBlur={() => setFocusedInput(null)}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                ...inputStyle,
                borderColor: focusedInput === "email" ? "purple" : "#ccc",
              }}
              required
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={{
                ...inputStyle,
                borderColor: focusedInput === "password" ? "purple" : "#ccc",
              }}
              required
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput(null)}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={{
                ...inputStyle,
                borderColor: focusedInput === "phoneNumber" ? "purple" : "#ccc",
              }}
              required
              onFocus={() => setFocusedInput("phoneNumber")}
              onBlur={() => setFocusedInput(null)}
            />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={{
                ...inputStyle,
                borderColor: focusedInput === "gender" ? "purple" : "#ccc",
              }}
              required
              onFocus={() => setFocusedInput("gender")}
              onBlur={() => setFocusedInput(null)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              style={{
                ...inputStyle,
                borderColor: focusedInput === "address" ? "purple" : "#ccc",
                resize: "vertical",
              }}
              rows="3"
              required
              onFocus={() => setFocusedInput("address")}
              onBlur={() => setFocusedInput(null)}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#3490dc",
              color: "#ffffff",
              padding: "12px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              background: "#ccc",
              color: "#333",
              padding: "12px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              marginTop: "16px",
            }}
          >
            Back to Login Page
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
