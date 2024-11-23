"use client";
import Head from "next/head";
import React, { useState } from "react";
import {
  Mail,
  User,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitStatus("success");

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setSubmitStatus(null);
      }, 3000);
    } else {
      setSubmitStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Vicious Warfare</title>
        <meta
          name="description"
          content="Complete the form below with your contact information to connect with Vicious Warfare."
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl" />

            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-gray-800">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent flex items-center justify-center gap-4">
                  <MessageCircle className="text-red-700" size={44} />
                  Contact Us
                </h1>
                <p className="text-gray-400 text-lg">
                  Complete the form below to connect with Vicious Warfare
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="bg-emerald-900/30 backdrop-blur-sm border border-emerald-500/50 text-emerald-300 p-4 rounded-lg mb-8 flex items-center transform animate-fadeIn">
                  <CheckCircle2 className="mr-3 text-emerald-400" />
                  <span className="font-medium">
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-rose-900/30 backdrop-blur-sm border border-rose-500/50 text-rose-300 p-4 rounded-lg mb-8 flex items-center">
                  <AlertTriangle className="mr-3 text-rose-400" />
                  <span className="font-medium">Please fill in all required fields correctly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="group">
                  <div className="flex items-center mb-3">
                    <User className="mr-2 text-red-600 group-focus-within:text-purple-300 transition-colors" />
                    <label className="text-gray-300 font-medium">Name</label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 
                    placeholder-gray-500 transition-all duration-300
                    ${
                      errors.name
                        ? "border-2 border-rose-500/50 focus:ring-rose-500/50"
                        : "border border-gray-800 focus:ring-purple-500/50 hover:border-gray-700"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-rose-400 text-sm mt-2 flex items-center gap-1">
                      <AlertTriangle size={14} /> {errors.name}
                    </p>
                  )}
                </div>

                <div className="group">
                  <div className="flex items-center mb-3">
                    <Mail className="mr-2 text-red-600 group-focus-within:text-purple-300 transition-colors" />
                    <label className="text-gray-300 font-medium">Email</label>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`w-full p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 
                    placeholder-gray-500 transition-all duration-300
                    ${
                      errors.email
                        ? "border-2 border-rose-500/50 focus:ring-rose-500/50"
                        : "border border-gray-800 focus:ring-purple-500/50 hover:border-gray-700"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-rose-400 text-sm mt-2 flex items-center gap-1">
                      <AlertTriangle size={14} /> {errors.email}
                    </p>
                  )}
                </div>

                <div className="group">
                  <div className="flex items-center mb-3">
                    <MessageCircle className="mr-2 text-red-600 group-focus-within:text-purple-300 transition-colors" />
                    <label className="text-gray-300 font-medium">Message</label>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 
                    h-36 resize-none placeholder-gray-500 transition-all duration-300
                    ${
                      errors.message
                        ? "border-2 border-rose-500/50 focus:ring-rose-500/50"
                        : "border border-gray-800 focus:ring-purple-500/50 hover:border-gray-700"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-rose-400 text-sm mt-2 flex items-center gap-1">
                      <AlertTriangle size={14} /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-800 to-red-800 text-white p-4 rounded-lg 
                  hover:from-purple-500 hover:to-pink-500 transition-all duration-300 
                  transform hover:-translate-y-1 font-medium text-lg
                  flex items-center justify-center gap-3 focus:ring-2 focus:ring-purple-500/50 
                  focus:ring-offset-2 focus:ring-offset-black group"
                >
                  Send Message
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
