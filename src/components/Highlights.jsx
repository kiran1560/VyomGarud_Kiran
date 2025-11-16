"use client";
import React from "react";
import Title from "./Title";

const highlights = [
  { id: 1, title: "Hardened Avionics", desc: "Redundant flight controllers with fail-safe behaviors and deterministic RTOS." },
  { id: 2, title: "Adaptive Autonomy", desc: "Mission planning with dynamic re-tasking and onboard sense-and-avoid." },
  { id: 3, title: "Secure Links", desc: "AES-256 encrypted telemetry with frequency-hopping and failover." }
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-5 border-top border-secondary bg-black my-0">
      <div className="container">
        <Title
          title="Why VyomGarud"
          subtitle={<span style={{ color: "#888888" }}>Three concise strengths that define our platforms.</span>}
        />

        <div className="row g-4 mt-2">
          {highlights.map(h => (
            <div key={h.id} className="col-md-4">
              <div className="p-4 rounded bg-dark border border-secondary shadow-sm h-100">
                <div className="text-warning text-uppercase small fw-semibold mb-2">
                  {h.title}
                </div>
                <p className="text-light small">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
