"use client";
import React from "react";

export default function Title({ eyebrow, title, subtitle, className = "" }) {
  return (
    <header className={`mb-4 ${className}`}>
      {eyebrow && (
        <div className="text-uppercase small text-muted mb-1">
          {eyebrow}
        </div>
      )}

      {title && (
        <h2 className="fw-bold display-6 text-light">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-2 text-muted">
          {subtitle}
        </p>
      )}
    </header>
  );
}
