"use client";
import React from "react";
import Card from "./Card";
import Title from "./Title";

const items = [
  {
    id: 1,
    title: "Long-Endurance Recon",
    subtitle: "Persistent ISR platform",
    img: "/images/product-uav1.png",
    desc: "Up to 18+ hours endurance, multi-sensor payloads, and advanced EO/IR suites for extended missions.",
  },
  {
    id: 2,
    title: "Autonomous Comms Relay",
    subtitle: "Secure mesh relay nodes",
    img: "/images/product-uav2.jpg",
    desc: "Deployable relay platforms to extend secure communications and provide low-latency datalinks across the battlefield.",
  },
  {
    id: 3,
    title: "Rapid Response VTOL",
    subtitle: "Tactical vertical lift",
    img: "/images/product-uav3.jpg",
    desc: "Quick-launch VTOLs with modular payload bays for logistics, medevac support, and payload delivery.",
  },
];

export default function Capabilities() {
  return (
<section
  id="capabilities"
  style={{ backgroundColor: "#000", marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 }}
>
  <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
    <Title
      title="Our Systems"
      subtitle={<span style={{ color: "#888888" }}>Modular platforms designed for integration, endurance, and mission adaptability.</span>}
    />

    <div className="row">
      {items.map((it) => (
        <div className="col-md-4 mb-4" key={it.id}>
          <Card title={it.title} subtitle={it.subtitle} img={it.img}>
            <p className="mb-2">{it.desc}</p>

            <div className="d-flex align-items-center gap-2">
              <a href="#contact" className="text-warning fw-semibold">
                Request spec
              </a>
              <span className="text-muted">·</span>
              <span className="text-muted small">Integration ready</span>
            </div>
          </Card>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
