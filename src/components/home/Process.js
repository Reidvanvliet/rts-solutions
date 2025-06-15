import React, { useState, useEffect, useRef } from "react";
import Fade from "./Fade";

const Process = () => {

  return (
    <div className="main-body">
      <ol className='process-list'>
        <Fade>
          <li className="process">
          <div className="process-body">
            <h2 className="process-header">Let's Talk</h2>
            <div className="list-number">1</div>
            Have a project in mind? Contact
            our specialist to request an estimate for a project.
          </div>
          <img src={require("../../media/images/planning.jpg")}/>
        </li>  
        </Fade>
        <Fade>
            <li className="process">
          <h2 className="process-header">Share Your Vision</h2>
          <div className="process-body">
            <div className="list-number">2</div>Our specialist will come to your
            door and help you to create the perfect vision for your new space.
            We will keep budget in mind as we build the perfect plan.
          </div>
        </li>
        </Fade>
        <Fade>
            <li className="process">
          <h2 className="process-header">Plan, Plan, Plan</h2>
          <div className="process-body">
            <div className="list-number">3</div>Once we have a solid plan we can
            start sourcing products, estimating labour and building a timeline.
            We will get the actual cost of the project and a breakdown of each
            step.
          </div>
        </li>
        </Fade>
        <Fade>
            <li className="process">
          <h2 className="process-header">The Real Work</h2>
          <div className="process-body">
            <div className="list-number">4</div>This is where the work begins.
            You will not have use of your space during this time and additional
            changes will be subject to charges.
          </div>
        </li>
        </Fade>
        <Fade>
          <li className="process">
          <h2 className="process-header">Enjoy!</h2>
          <div className="process-body">
            <div className="list-number">5</div>Once we are all done we will
            invite you back to a fully functional, clean and beautiful space.
            Time to show it off!
          </div>
        </li>  
        </Fade>
        
      </ol>
    </div>
  );
};

export default Process;
