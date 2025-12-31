import "./header.css";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <div id="navbar">
        <div id="logo">
          <img
            src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
            alt="logo"
          />
        </div>

        {/* Hamburger Menu Button */}
        <button className="hamburger" onClick={toggleMobileMenu}>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Menu */}
        <div className={`pages ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className={`dropdown ${activeDropdown === 'jobs' ? 'active' : ''}`}>
            <h2 className="dropbtn" onClick={() => toggleDropdown('jobs')}>
              Jobs
              <i className="fa-solid fa-chevron-down"></i>
            </h2>
            <div className="dropdown-content">
              <div>
                <h3>Popular Categories</h3>
                <a href="#">IT jobs</a>
                <a href="#">Marketing jobs</a>
                <a href="#">Sales jobs</a>
                <a href="#">Data Science jobs</a>
                <a href="#">HR jobs</a>
                <a href="#">Engineering jobs</a>
              </div>
              <div className="hr"></div>
              <div>
                <h3>Jobs in demand</h3>
                <a href="#">Fresher jobs</a>
                <a href="#">MNC jobs</a>
                <a href="#">Remote jobs</a>
                <a href="#">Work from home jobs</a>
                <a href="#">Walk-in jobs</a>
                <a href="#">Part-time jobs</a>
              </div>
              <div className="hr"></div>
              <div>
                <h3>Explore more jobs</h3>
                <a href="#">Jobs by category</a>
                <a href="#">Jobs by skills</a>
                <a href="#">Jobs by location</a>
                <a href="#">Jobs by designation</a>
                <a href="#">Create free job alert</a>
              </div>
              <div className="hr"></div>
              <div>
                <h3>Jobs by location</h3>
                <a href="#">Jobs in Delhi</a>
                <a href="#">Jobs in Mumbai</a>
                <a href="#">Jobs in Bangalore</a>
                <a href="#">Jobs in Hyderabad</a>
                <a href="#">Jobs in Chennai</a>
                <a href="#">Jobs in Pune</a>
              </div>
            </div>
          </div>

          <div className={`dropdown ${activeDropdown === 'companies' ? 'active' : ''}`}>
            <h2 className="dropbtn" onClick={() => toggleDropdown('companies')}>
              Companies
              <i className="fa-solid fa-chevron-down"></i>
            </h2>
            <div className="dropdown-content">
              <div>
                <h3>Explore Categories</h3>
                <a href="#">Unicorn</a>
                <a href="#">MNCs</a>
                <a href="#">Startup</a>
                <a href="#">Product based</a>
                <a href="#">Internet</a>
              </div>
              <div className="hr"></div>
              <div>
                <h3>Explore collections</h3>
                <a href="#">Top Companies</a>
                <a href="#">Fintech Companies</a>
                <a href="#">Edtech Companies</a>
                <a href="#">Featured Companies</a>
                <a href="#">Sponsored Companies</a>
              </div>
              <div className="hr"></div>
              <div>
                <h3>Research Companies</h3>
                <a href="#">Interview questions</a>
                <a href="#">Company salaries</a>
                <a href="#">About Companies</a>
                <a href="#">Company reviews</a>
              </div>
            </div>
          </div>

          <div className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
            <h2 className="dropbtn" onClick={() => toggleDropdown('services')}>
              Services
              <i className="fa-solid fa-chevron-down"></i>
            </h2>
            <div className="dropdown-content">
              <div>
                <h3>Resume writing</h3>
                <a href="#">Text resume</a>
                <a href="#">Visual resume</a>
                <a href="#">Resume critique</a>
                <h3>Find jobs</h3>
                <a href="#">Jobs4u</a>
              </div>
              <div className="hr"></div>
              <div>
                <h3>Get recruiter's attention</h3>
                <a href="#">Resume display</a>
                <a href="#">Recruiter connection</a>
                <a href="#">Job search booster</a>
                <h3>Monthly subscription</h3>
                <a href="#">Basic & premium plans</a>
              </div>
              <div className="hr"></div>
              <div>
                <h3>Learn & upskill</h3>
                <a href="#">Data Science courses</a>
                <a href="#">Technology courses</a>
                <a href="#">Management courses</a>
                <a href="#">Finance courses</a>
                <a href="#">Design courses</a>
                <a href="#">Healthcare courses</a>
                <a href="#">Degree programs</a>
              </div>
            </div>
          </div>
        </div>

        <div id="buttons">
          <button className="login" onClick={() => window.location.href='/login'}>
            Login
          </button>
          <button className="regis" onClick={() => window.location.href='/register'}>
            Register
          </button>
        </div>

        <div className="foremp">
          <div className={`dropdown ${activeDropdown === 'employer' ? 'active' : ''}`}>
            <h2 className="dropbtn" onClick={() => toggleDropdown('employer')}>
              For employers
              <i className="fa-solid fa-chevron-down"></i>
            </h2>
            <div className="dropdown-content">
              <div>
                <a href="#">Buy online</a>
                <a href="#">Our hiring solution</a>
                <a href="#">Employer Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={toggleMobileMenu}></div>
      )}
    </>
  );
}
