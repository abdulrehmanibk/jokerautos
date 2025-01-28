import React, { useContext } from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { NavIconContext } from '../../Context/NavIcon';
import { ServiceData } from '../../Screens/Services/ServicesData';

const Navbar = () => {
    const {isResponsiveNav, handleNav} = useContext(NavIconContext)


  return (
    <>
      <nav>
        <div className="logo">
          <img src="/images/jokerlogo.jpeg" alt="" />
        </div>
        <div className="navlinks">
          <ul className="links">
            <li className="link">
          <i class="fa-solid fa-house"></i>
              <NavLink to={"/"} className={"NavLinks"} >
                Home
              </NavLink>
            </li>
            {/* <li className="link">
            <i class="fa-solid fa-user"></i>
              Teachers
              <ul className="sublinks">
                <li>
                  {" "}
                  <NavLink to="/teachers/1" className={"NavLinks"}>
                    Male Teachers
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/teachers/2" className={"NavLinks"}>
                    Female Teachers
                  </NavLink>
                </li>
              </ul>
            </li> */}
            <li className="link">
            <i class="fa-solid fa-building"></i>
              <NavLink to={"/about/fgcampus"} className={"NavLinks"}>
                About
              </NavLink>
            </li>

            <li className="link">
            <i class="fa-solid fa-book-open"></i>
            {/* <NavLink to={`/services/services`} className={"NavLinks"}> */}
            Services
            {/* </NavLink> */}
              <ul className="sublinks">
              {ServiceData
              // .filter((item) => typeof item.id === 'string')
              .map((item, index) => (                
                  <NavLink key={index} to={`/service/${item.id}`} className={"NavLinks"}>
                <li>
                  {item.title}
                </li>
                  </NavLink>
              ))}

              </ul>
            </li>
            <li className="link">
            <i class="fa-regular fa-circle-user"></i>
              <NavLink to={"/register"} className={"NavLinks"}>
                Register Now
              </NavLink>
            </li>
            <li className="link">
            <i class="fa-solid fa-credit-card"></i>
            <NavLink to={'/pricing'} className={"NavLinks"}>Pricing</NavLink>
            </li>
          </ul>
        </div>

        <div className="btn_nav">
          <NavLink to={"/register"} className={"NavLinks"}>
            <button className="button2">Get A Free Trial</button>
          </NavLink>
        </div>

        <div className="resp-nav-icon">
          <p onClick={handleNav}>
            {!isResponsiveNav ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-xmark"></i>}
          </p>
        </div>

        <div
          className="detail-summary"
          style={{ 
            opacity: isResponsiveNav ? "1" : "0",
            display: isResponsiveNav ? "block" : "none",
            transform: isResponsiveNav ? "translateY(0%)" : "translateY(10%)",
            transition:'transform 0.5s ease-in-out',
             }}
        >
          <details>
            <summary>
              <NavLink to={"/"} className={"NavLinks"} onClick={handleNav}>
                Home
              </NavLink>
            </summary>
          </details>
          {/* <details>
            <summary>Teachers</summary>
            <ul className="details-sublinks">
              <NavLink to="/teachers/1" className={"NavLinks"} onClick={handleNav}>
                <li> Male Teachers </li>
              </NavLink>
              <Link to="/teachers/2" className={"NavLinks"} onClick={handleNav}>
                <li> Female Teachers </li>
              </Link>
            </ul>
            </details> */}
          <details>
            <summary>              
              <NavLink to={"/about/fgcampus"} className={"NavLinks"} onClick={handleNav}>
                About
              </NavLink></summary>
          </details>
          <details>
            <summary>
            {/* <NavLink href={`/services/services`} className={"NavLinks"} onClick={handleNav}> */}
              Services
            {/* </NavLink> */}
              </summary>
            <ul className="details-sublinks">
            {
            ServiceData
            // .filter((item) => typeof item.id === 'string')
              .map((item, index) => (                
                <li key={index}>
                  <NavLink to={`/service/${item.id}`} className={"NavLinks"} onClick={handleNav}>
                  {item.title}
                  </NavLink>
                </li>
              ))}
              </ul>
          </details>
          <details>
            <summary>
              <NavLink to={'/pricing'} className={"NavLinks"} onClick={handleNav}>Pricing</NavLink>
            </summary>
          </details>
          <details>
            <summary>
              <NavLink to={"/register"} className={"NavLinks"} onClick={handleNav}>
                Register Now
              </NavLink>
            </summary>
          </details>
          {/* <div>
            <NavLink to={"/register"} className={"NavLinks"}>
              <button className="button2">Get A Free Trial</button>
            </NavLink>
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;