"use client";
import React from "react";
import Title from "./Title";

const highlights = [
  { id: 1, title: "Hardened Avionics", desc: "Redundant flight controllers with fail-safe behaviors and deterministic RTOS." },
  { id: 2, title: "Adaptive Autonomy", desc: "Mission planning with dynamic re-tasking and onboard sense-and-avoid." },
  { id: 3, title: "Secure Links", desc: "AES-256 encrypted telemetry with frequency-hopping and failover." },
  {
  id: 4,
  title: "Limitless-Range Reconnaissance Drones",
  desc: "Advanced EO/IR sensors with 18+ hours endurance for persistent ISR missions over vast distances."
},
{
  id: 5,
  title: "Autonomous Communication Relay Drones",
  desc: "Secure mesh nodes providing low-latency, multi-band links to extend battlefield communications."
},
{
  id: 6,
  title: "Rapid Response VTOL Drones",
  desc: "Vertical takeoff and landing with modular payload bays for fast deployment, logistics, and medevac support."
}

];

export default function Highlights() {
  return (
    <section id="highlights" className="py-5 border-top border-secondary bg-black my-0">
      <div className="container">
        <Title
          title="Why VyomGarud"
          subtitle={<span style={{ color: "#888888" }}>Key strengths that define our platforms.</span>}
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
