"use client";

import React, { useState } from "react";
import Title from "./Title";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section
  className="bg-black text-white"
  style={{ marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 }}
>
  <style>
    {`
      input::placeholder,
      textarea::placeholder {
        color: #808080 !important;
        opacity: 1 !important;
      }
    `}
  </style>

  <div className="container py-4">
      <div className="text-center">
    <Title title="Leave your message" />
  </div>

    <form onSubmit={handleSubmit} className="mt-3">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="form-control mb-3 bg-black text-white border-secondary w-50"
        style={{ height: "38px", fontSize: "0.9rem" }}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="form-control mb-3 bg-black text-white border-secondary w-50"
        style={{ height: "38px", fontSize: "0.9rem" }}
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="form-control mb-3 bg-black text-white border-secondary w-50"
        rows="3"
        style={{ fontSize: "0.9rem" }}
      ></textarea>

<button
  type="submit"
  className="btn btn-warning px-4 py-2 btn-glow text-center"
>
  Send Message
</button>

    </form>
  </div>
</section>

  );
}
