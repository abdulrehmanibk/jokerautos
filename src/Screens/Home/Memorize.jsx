import React from 'react';

import TwoChild from '../../Components/TwoChild/TwoChild';
import { Link, NavLink } from 'react-router-dom';

const Memorize = () => {
  return (
    <TwoChild 
    imgs={<img src='/images/tech-skill.svg'></img>}
    text={
        <>
            <h2>Keep Your Car Running Smoothly with Routine <span>Maintenance</span></h2>
            <p>Ensure your car stays in peak condition with our routine maintenance services. Regular oil changes, tire rotations, and inspections help extend the life of your vehicle and prevent unexpected repairs.
            <br />
            <br />
            Keep Your Car Running Smoothly with Routine Maintenance
            </p>
            <NavLink to={'services/computer-courses'}>
            <button className="button2">Know More</button>
            </NavLink>

        </>
    }
    />    

  );
};

export default Memorize;
