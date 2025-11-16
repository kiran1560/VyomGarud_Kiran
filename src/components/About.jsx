"use client";

import React from "react";
import Title from "./Title";

export default function About() {
  return (
<section
  id="about"
  className="py-5 border-top"
  style={{ backgroundColor: "#000000", marginTop: 0, marginBottom: 0 }}
>
  <div className="container" style={{ backgroundColor: "#000" }}>
    <div className="mb-4">
      <h2 className="fw-bold text-white">
        Mission: Operational superiority through autonomy
      </h2>
      <p style={{ color: "#888888" }} className="mt-2">
        VyomGarud develops hardened UAV solutions focused on persistent ISR,
        reliable communications, and autonomous mission execution. We design
        with redundancy, secure data links, and verified control logic for
        mission-critical environments.
      </p>
    </div>

    <div className="row mt-4">
      {[
        {
          heading: "Engineering Excellence",
          text: "Built by aerospace and autonomy experts using MIL-grade components and rigorous verification.",
        },
        {
          heading: "Autonomous Systems",
          text: "Adaptive navigation and collision avoidance designed for minimal operator workload ",
        },
        {
          heading: "Secure Communications",
          text: "Encrypted telemetry, multi-band links, and failover routing for resilient data transfer during operations.",
        },
      ].map(({ heading, text }, i) => (
        <div key={i} className="col-md-4 mb-4 mb-md-0">
          <div
            className="p-4 bg-dark rounded border border-secondary"
            style={{
              backgroundColor: "#121212",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(255, 123, 0, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h4 className="fw-semibold text-white">{heading}</h4>
            <p className="text-white mt-2">{text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
