"use client";
import React from "react";
import "../animations.css";

export default function Card({ title, subtitle, img, children }) {
  return (
    <div className="card bg-dark border border-secondary rounded-3 p-3 card-hover">
      {img && (
        <div className="w-100 mb-3 overflow-hidden rounded" style={{ height: "180px" }}>
          <img src={img} alt={title} className="img-fluid h-100 w-100 object-fit-contain" />
        </div>
      )}

      <h5 className="fw-semibold">{title}</h5>

      {subtitle && (
        <p className="text-secondary small mt-1">{subtitle}</p>
      )}

      <div className="mt-2 small text-light">{children}</div>
    </div>
  );
}
