"use client";

import { useState } from "react";
import ChapaPaymentButton from "@/components/ChapaPaymentButton";

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentId: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.studentId) {
      setError("All fields are required.");
      return;
    }

    // Simulate successful registration
    setSuccess("Registration successful!");
    setError("");
  };

  const containerStyle = {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    fontFamily: "Arial, sans-serif",
  };
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#4CbF50",
    marginBottom: "20px",
  };
  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
  };
  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  };
  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    marginTop: "15px",
    color: "#777",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Student Registration</h1>
      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
      {success && <p style={{ color: "green", marginBottom: "10px" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" style={labelStyle}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          style={inputStyle}
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          style={inputStyle}
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="phone" style={labelStyle}>
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          style={inputStyle}
          value={formData.phone}
          onChange={handleChange}
        />
        <label htmlFor="studentId" style={labelStyle}>
          Student ID
        </label>
        <input
          type="text"
          id="studentId"
          name="studentId"
          placeholder="Enter your student ID"
          style={inputStyle}
          value={formData.studentId}
          onChange={handleChange}
        />
        
      </form>
      <ChapaPaymentButton
        amount={1000} // Amount in cents
        currency="ETB"
        email="customer@gmail.com"
        firstName="John"
        lastName="Doe"
        tx_ref={`tx-${Date.now()}`} // Generate a unique transaction reference
      />
      <p style={footerStyle}>© 2024 Student Registration System</p>
    </div>
  );
}