"use client";
import React from "react";

export default function Button({ children, onClick, href, className = "", secondary = false }) {
  const base = `btn fw-semibold ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${secondary ? "btn-outline-warning" : "btn-warning text-dark"}`}
      >
        {children}
      </a>
    );
  }

  return (
<button
  type="button" 
  onClick={onClick}
  className={`${base} ${secondary ? "btn-outline-warning" : "btn-warning text-dark"}`}
>

      {children}
    </button>
  );
}
