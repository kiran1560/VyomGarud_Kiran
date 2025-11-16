"use client";
import React from "react";
import Button from "./Button";

export default function Home() {
  return (
    <section
      className="position-relative"
      style={{
        backgroundColor: "#000000",
        color: "#ffb84d",
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center gy-5">
          {/* Left side */}
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div
                className="rounded d-flex justify-content-center align-items-center"
                style={{
                  width: "48px",
                  height: "48px",
                  background: "rgba(255, 123, 0, 0.12)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffb84d">
                  <path d="M12 2L15 8H9L12 2Z" />
                </svg>
              </div>
              <span
                className="text-uppercase small fw-medium"
                style={{ color: "#ffb84d80" }}
              >
                VyomGarud
              </span>
            </div>

      
            <h1
              className="fw-bold display-5"
              style={{
                color: "#fff",
                transition: "color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffb84d";
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.textShadow = "2px 2px 8px rgba(255, 184, 77, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              VyomGarud :  UAV systems
            </h1>

          
            <ul
              style={{
                color: "#ffb84d",
                fontSize: "0.9rem",
                marginTop: "0.5rem",
                paddingLeft: "1.2rem",
                listStyleType: "disc",
                fontWeight: "600",
                fontSize: "1.1rem",
              }}
            >
              <li>Precision</li>
              <li>Autonomy</li>
              <li>Reliability</li>
            </ul>

  
            <p
              className="mt-3"
              style={{
                color: "#fff",
                transition: "transform 0.3s ease",
                cursor: "default",
                fontSize: "1.5rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Designing advanced unmanned systems for mission-critical operations, long-endurance platforms and
              autonomous navigation tailored for defense and enterprise.
            </p>

      
            <div className="d-flex flex-wrap gap-2 mt-3">
              <Button href="#capabilities">Explore Systems</Button>
              <Button href="#contact" secondary>
                Contact Us
              </Button>
            </div>

           
            <div
              className="mt-4 small"
              style={{
                color: "#fff",
                transition: "transform 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
            
            </div>
          </div>

          {/* Right side */}
          <div className="col-md-6 d-flex justify-content-center">
            <div
              className="position-relative w-100"
              style={{ maxWidth: "420px" }}
            >
              <div
                className="rounded overflow-hidden border"
                style={{
                  borderColor: "rgba(255, 184, 77, 0.3)",
                  boxShadow: "0 0 10px rgba(255, 184, 77, 0.5)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(255, 184, 77, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 10px rgba(255, 184, 77, 0.5)";
                }}
              >
                <img
                  src="https://blackwhite.pictures/media/c/0301/drone-camera-isolated-background-2525.jpg"
                  alt="Drone"
                  className="img-fluid"
                  style={{ display: "block", width: "100%" }}
                />
              </div>

              <div
                className="position-absolute px-3 py-2 rounded"
                style={{
                  bottom: "-20px",
                  right: "10px",
                  backgroundColor: "#000000cc",
                  border: "1px solid rgba(255, 184, 77, 0.3)",
                  color: "#ffb84dcc",
                  fontSize: "0.85rem",
                }}
              >
                <div>Class: Long-Endurance</div>
                <div className="fw-semibold">
                  Range: 400+ km · Endurance: 18 hrs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
