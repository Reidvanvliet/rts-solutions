import React, { useState, useEffect, useRef } from "react";
import ScrollAnimation from "./ScrollAnimation";


const Process = () => {

  return (
    <div className="main-body">
          <div className="process">
            <ScrollAnimation divName="list-number" identifier="numberOne" side="left">1</ScrollAnimation>
            <ScrollAnimation divName="process-body" identifier="bodyOne" side="right">
              <h2 className="process-header">Let's Talk</h2>
              <p>
                Have a project in mind? Whether it's a small-scale task or a large, complex project, we’re here to help. Contact our team to request an
                estimate.
              </p></ScrollAnimation>
          </div>
          <div className="process">
            <ScrollAnimation divName="process-body" identifier="bodyTwo" side="left">
              <h2 className="process-header">Share Your Vision</h2>
              <p>
                Our team will come to your door and help you to create the
                perfect vision for your new space. We will keep budget in mind
                as we build the perfect plan.
              </p>
            </ScrollAnimation>
            <ScrollAnimation divName="list-number" identifier="numberTwo" side="right">2</ScrollAnimation>
          </div>
          <div className="process">
            <ScrollAnimation divName="list-number" identifier="numberThree" side="left">3</ScrollAnimation>
            <ScrollAnimation divName="process-body" identifier="bodyThree" side="right">
              <h2 className="process-header">Plan, Plan, Plan</h2>
              <p>
                Once we have a solid plan we can start sourcing products,
                estimating labour and building a timeline. We will get the
                actual cost of the project and a breakdown of each step.
              </p>
            </ScrollAnimation>
          </div>
          <div className="process">
             <ScrollAnimation divName="process-body" identifier="bodyFour" side="left">
              <h2 className="process-header">The Real Work</h2>
              <p>
                We'll be doing some heavy lifting so please make sure the area is clear and won’t be needed for a while. If you'd like to make any additional changes, just let us know! Please note that extra work may come with additional charges.
              </p>
            </ScrollAnimation>
            <ScrollAnimation divName="list-number" identifier="numberFour" side="right">4</ScrollAnimation>
          </div>
          <div className="process" id="process-five">
            <ScrollAnimation divName="list-number" identifier="numberFive" side="left">5</ScrollAnimation>
            <ScrollAnimation divName="process-body" identifier="bodyFive" side="right">
              <h2 className="process-header">Enjoy!</h2>
              <p>
                Once we are all done we will invite you back to a fully
                functional, clean and beautiful space. Time to show it off!
              </p>
            </ScrollAnimation>
          </div>
    </div>
  );
};

export default Process;
