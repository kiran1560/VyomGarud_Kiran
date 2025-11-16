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
      </h2><br></br>
      <p style={{ color: "#888888" }} className="mt-2">
       We specialize in limitless-range UAVs powered by cellular and LoRa-based hybrid communication, enabling seamless command, control, and multi-drone coordination even in challenging environments. Built with military-grade precision, VyomGarud systems combine cutting-edge avionics, AI-driven telemetry, and secure cloud infrastructure to deliver unmatched situational awareness and mission endurance. At VyomGarud, we believe the future of aerial operations lies in autonomy, resilience, and connectivity and we are engineering that future today.
      </p><br></br>
    </div>

    <div className="row mt-4">
      {[
       {
  heading: "Limitless-Range UAV Systems",
  text: "Specializing in cellular and LoRa hybrid communication for seamless command and control in challenging environments.",
},
{
  heading: "Military-Grade Precision",
  text: "Built with advanced avionics, AI-driven telemetry, and secure cloud infrastructure to ensure unmatched situational awareness.",
},
{
  heading: "Future-Focused Autonomy",
  text: "Engineering resilient and connected aerial operations, pioneering autonomy for next-generation mission success.",
}

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
