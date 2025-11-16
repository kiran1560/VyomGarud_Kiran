"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 border-top" style={{ backgroundColor: "#000" }}>
      <div className="container">
        <div className="row align-items-center gy-3">

          {/* Logo + Text */}
          <div className="col-md-4 d-flex align-items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="logo"
              className="rounded"
              style={{ width: "48px", height: "48px" }}
            />
            <div>
              <div className="fw-semibold" style={{ color: "#fff" }}>
                VyomGarud
              </div>
              <div className="small" style={{ color: "#888888" }}>
                Advanced UAV Systems
              </div>
            </div>
          </div>

      

          {/* Links */}
<div className="col-md-4 d-flex justify-content-md-end gap-3 small ms-auto">
  <a
    href="https://github.com/"
    target="_blank"
    rel="noreferrer"
    className="text-decoration-none"
    style={{ color: "#888888" }}
  >
    GitHub
  </a>
  <a
    href="#"
    className="text-decoration-none"
    style={{ color: "#888888" }}
  >
    Privacy
  </a>
</div>

        </div>
      </div>
    </footer>
  );
}
