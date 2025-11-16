"use client";
import React from "react";
import Card from "./Card";
import Title from "./Title";

const items = [
  {
    id: 1,
    title: "Long-Endurance Recon",
    subtitle: "Persistent ISR platform",
    img: "/images/product-uav2.jpg",
    desc: "Up to 18+ hours endurance, multi-sensor payloads, and advanced EO/IR suites for extended missions.",
  },
  {
    id: 2,
    title: "Autonomous Comms Relay",
    subtitle: "Secure mesh relay nodes",
    img: "https://img.pikbest.com/ai/illus_our/20230425/d8669b4c2f697d56d0267c87e2d26562.jpg!w700wp",
    desc: "Deployable relay platforms to extend secure communications and provide low-latency datalinks across the battlefield.",
  },
  {
    id: 3,
    title: "Rapid Response VTOL",
    subtitle: "Tactical vertical lift",
    img: "/images/product-uav3.jpg",
    desc: "Quick-launch VTOLs with modular payload bays for logistics, medevac support, and payload delivery.",
  },
  {
    id: 4,
    title: "Stealth Surveillance Drone",
    subtitle: "Low-observable ISR solution",
    img: "https://png.pngtree.com/background/20230618/original/pngtree-white-drone-on-white-background-a-stunning-3d-render-picture-image_3758497.jpg",
    desc: "Advanced stealth design minimizes radar signature for covert intelligence, surveillance, and reconnaissance.",
  },
  {
    id: 5,
    title: "High-Altitude Signal Booster",
    subtitle: "Extended comms coverage",
    img: "https://static.vecteezy.com/system/resources/previews/001/844/366/non_2x/realistic-drone-design-illustration-isolated-on-white-background-free-vector.jpg",
    desc: "Operates at extreme altitudes to provide enhanced line-of-sight communications across difficult terrain.",
  },
  {
    id: 6,
    title: "Heavy-Lift Cargo Drone",
    subtitle: "Modular payload transport",
    img: "https://media.newindianexpress.com/TNIE/import/2021/8/12/original/shortage-.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
    desc: "Capable of transporting heavy and oversized cargo autonomously, optimized for rugged environments.",
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
      subtitle={<span style={{ color: "#888888" }}>At VyomGarud, we provide limitless-range UAVs featuring advanced cellular and LoRa hybrid communication for seamless multi-drone coordination, even in the toughest conditions. 
  

We don’t just build drones; we engineer the future of resilient, connected, and autonomous aerial operations to give you a tactical advantage..</span>}
    />

    <div className="row">
      {items.map((it) => (
        <div className="col-md-4 mb-4" key={it.id}>
          <Card title={it.title} subtitle={it.subtitle} img={it.img}>
            <p className="mb-2">{it.desc}</p>

            <div className="d-flex align-items-center gap-2">
              <a href="#contact" className="text-warning fw-semibold">
                Request Demo
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
