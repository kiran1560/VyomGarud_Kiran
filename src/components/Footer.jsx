"use client";
import React from "react";

const contact = {
  email: "contact@vyomgarud.com",
  phone: "+91 xxxxxxxxxx",
  address: "Bhopal, India",
  socials: [
    { name: "GitHub", link: "https://github.com/kiran1560/VyomGarud_Kiran" },
    { name: "LinkedIn", link: "https://linkedin.com/company/vyomgarud" },
    { name: "Twitter", link: "https://twitter.com/vyomgarud" },
    { name: "YouTube", link: "https://youtube.com/@vyomgarud" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row gy-4">

         
          <div className="col-md-4 d-flex align-items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="VyomGarud Logo"
              width="48"
              height="48"
              className="rounded"
            />
            <div>
              <h5 className="mb-0">VyomGarud</h5>
              <small className="text-muted">Advanced UAV Systems</small>
            </div>
          </div>

          <div className="col-md-4">
            <h6 id="contact">Contact Us</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contact.email}`} className="text-decoration-none text-light">
                  {contact.email}
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${contact.phone}`} className="text-decoration-none text-light">
                  {contact.phone}
                </a>
              </li>
              <li>
                <strong>Address:</strong> {contact.address}
              </li>
            </ul>
          </div>

          
          <div className="col-md-4">
            <h5>Follow Us: </h5>
            <ul className="list-inline mb-0">
              {contact.socials.map(({ name, link }) => (
                <li key={name} className="list-inline-item me-3">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light text-decoration-none fw-semibold"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-muted small">
          &copy; {new Date().getFullYear()} VyomGarud. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
