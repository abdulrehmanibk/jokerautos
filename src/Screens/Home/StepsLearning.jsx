import React from "react";
import TwoChild from "../../Components/TwoChild/TwoChild";
import { Link, NavLink } from "react-router-dom";

const StepsLearning = () => {
  return (
    <>
      <TwoChild
        imgs={<img src="/images/acadimic.svg" alt="" />}
        text={
          <>
            <h2>
            Reliable Auto Repairs for a Smooth Ride <span>Every Time</span>
            </h2>
            <p className="description">
            Get back on the road quickly with our expert auto repair services. From engine issues to electrical problems, our skilled technicians provide fast, reliable repairs to keep your vehicle performing at its best.
              <br />
              <br />
              Keep Your Car Running Smoothly with Routine Maintenance
            </p>
            <NavLink to={'services/tution-courses'}>
            <button className="button2">Know More</button>
            </NavLink>
          </>
          
        }
        flexDirection="row-reverse"

      />

      <TwoChild
        // imgs={<img src="/images/qot-laptop-quran.webp"></img>}
        text={
          <>
            <h2>
            Comprehensive Inspections for Your <span>Vehicle’s Safety</span>
            </h2>
            <p>
            Our detailed inspections ensure your vehicle is safe, reliable, and ready for the road. We check every crucial component to catch potential issues before they become major problems.
              <br />
              <br />
              Keep Your Car Running Smoothly with Routine Maintenance
            </p>
            <NavLink  to={'services/language-courses'}>
            <button className="button2">Know More</button>
            </NavLink>
          </>
        }
      />
    </>
  );
};

export default StepsLearning;
