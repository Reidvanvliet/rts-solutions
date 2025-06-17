import React, { useState, useEffect, useRef } from "react";
import FadeLeft from "./FadeLeft";
import FadeRight from "./FadeRight";

const Process = () => {
  return (
    <div className="main-body">
      <ol className="process-list">
        <FadeLeft>
          <li className="process process1">
            <div className="list-number left">1</div>
            <div className="process-body">
              <h2 className="process-header">Let's Talk</h2>
              <p>
                Have a project in mind? Whether it's a small-scale task or a large, complex project, we’re here to help. Contact our specialist to request an
                estimate for your project.
              </p>
            </div>
          </li>
        </FadeLeft>
        <FadeRight>
          <li className="process process2">
            <div className="process-body">
              <h2 className="process-header">Share Your Vision</h2>
              <p>
                Our specialist will come to your door and help you to create the
                perfect vision for your new space. We will keep budget in mind
                as we build the perfect plan.
              </p>
            </div>
            <div className="list-number right">2</div>
          </li>
        </FadeRight>
        <FadeLeft>
          <li className="process process1">
            <div className="list-number left">3</div>
            <div className="process-body">
              <h2 className="process-header">Plan, Plan, Plan</h2>
              <p>
                Once we have a solid plan we can start sourcing products,
                estimating labour and building a timeline. We will get the
                actual cost of the project and a breakdown of each step.
              </p>
            </div>
          </li>
        </FadeLeft>
        <FadeRight>
          <li className="process process2">
            <div className="process-body">
              <h2 className="process-header">The Real Work</h2>
              <p>
                This is where the work begins. You will not have use of your
                space during this time and additional changes will be subject to
                charges.
              </p>
            </div>
            <div className="list-number right">4</div>
          </li>
        </FadeRight>
        <FadeLeft>
          <li className="process process1">
            <div className="list-number left">5</div>
            <div className="process-body">
              <h2 className="process-header">Enjoy!</h2>
              <p>
                Once we are all done we will invite you back to a fully
                functional, clean and beautiful space. Time to show it off!
              </p>
            </div>
          </li>
        </FadeLeft>
      </ol>
    </div>
  );
};

export default Process;
