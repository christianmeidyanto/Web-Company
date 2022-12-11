import React from "react";
import "../Hero/Hero.css";

export default function Hero() {
  return (
    <div className="px-4 py-5 container-fluid text-center bg-hero">
        <h2 className="display-5 fw-bold text-white">
          Proud to Serve in Flexible Packaging
        </h2>
        <div className="col-lg-6 mx-auto">
          <p className="lead b-4 lh-lg text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
            eum? Expedita recusandae obcaecati asperiores dicta voluptatum rem
            quis fugit nobis!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-center">
            <a href="#" className="btn btn-primary btn-lg px-4 gap-2">
              I Want Reserve
            </a>
            <a
              href="#"
              className="px-4 py-2 text-decoration-none text-light fs-5"
            >
              Read More &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" width={"20px"}>
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </div>
        </div>
    </div>
  );
}
