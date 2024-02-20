import "./header.css";

export default function Header() {
  return (
    <>
      <body>
        <div id="navbar">
          <div id="logo">
            <img
              src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
              alt="logo"
              
            />
          </div>
          <div class="pages">
            <div class="dropdown">
              <h2 class="dropbtn" onclick="window.location.href='jobs1.html'">
                Jobs
              </h2>
              <div class="dropdown-content">
                <div>
                  <h2>Popular Catogories</h2>
                  <a href="#">IT jobs</a>
                  <a href="#">Sales jobs</a>
                  <a href="#">Marketing jobs</a>
                  <a href="#">Data Science jobs</a>
                  <a href="#">HR jobs</a>
                  <a href="#">Engineering jobs</a>
                </div>
                <div class="hr"></div>
                <div>
                  <h2>Jobs in demand</h2>
                  <a href="#">Fresher jobs</a>
                  <a href="#">MNC jobs</a>
                  <a href="#">Remote jobs</a>
                  <a href="#">Work from home jobs</a>
                  <a href="#">Walk-in jobs</a>
                  <a href="#">Part-time jobs</a>
                </div>
                <div class="hr"></div>
                <div>
                  <h2>Explore more jobs</h2>
                  <a href="#">jobs by catagory</a>
                  <a href="#">jobs by skills</a>
                  <a href="#">jobs by location</a>
                  <a href="#">jobs by designation</a>
                  <a href="#">Create free job alert</a>
                </div>
                <div class="hr"></div>
                <div>
                  <h2>Jobs by location</h2>
                  <a href="#"> jobs in Delhi</a>
                  <a href="#">jobs in Mumbai</a>
                  <a href="#">jobs in Bengalore</a>
                  <a href="#">jobs in Hyderabad</a>
                  <a href="#">jobs in Chennai</a>
                  <a href="#">jobs in Pune</a>
                </div>
              </div>
            </div>

            <div class="dropdown">
              <h2 class="dropbtn" onclick="window.location.href = 'jobs1.html'">
                Companies
              </h2>
              <div class="dropdown-content">
                <div>
                  <h2>Explore Catogories</h2>
                  <a href="#">Unicorn</a>
                  <a href="#">MNCs</a>
                  <a href="#">Startup</a>
                  <a href="#">Product based</a>
                  <a href="#">Internet</a>
                </div>
                <div class="hr"></div>
                <div>
                  <h2>Explore collections</h2>
                  <a href="#">Top Companies</a>
                  <a href="#">Fintech Companies</a>
                  <a href="#">Edtech Companies</a>
                  <a href="#">Featured Companies</a>
                  <a href="#">Sponsored Companies</a>
                </div>
                <div class="hr"></div>
                <div>
                  <h2>Research Companies</h2>
                  <a href="#">Interview question</a>
                  <a href="#">company salaries</a>
                  <a href="#">About Companies</a>
                  <a href="#">company reviews</a>
                </div>
              </div>
            </div>
            <div class="dropdown">
              <h2
                class="dropbtn"
                onclick="window.location.href = 'register.html'"
              >
                Services
              </h2>
              <div class="dropdown-content">
                <div>
                  <h2>Resume writing</h2>
                  <a href="#">Text resume</a>
                  <a href="#">Visual resume</a>
                  <a href="#">Resume critique</a>
                  <h2>
                    <a href="#">Find jobs</a>
                  </h2>
                  <a href="#">Jobs4u</a>
                </div>
                <div class="hr"></div>
                <div>
                  <h2>Get recruiter's attention</h2>
                  <a href="#">Resume display</a>
                  <a href="#">Recruiter connection</a>
                  <a href="#">job search booster</a>
                  <h2>
                    <a href="#">Monthly subscription</a>
                  </h2>
                  <a href="#">Basic & premium plans</a>
                </div>
                <div class="hr"></div>
                <div>
                  <h2>Learn & upskill</h2>
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
          <div class="buttons">
            <input type="text" placeholder="Search jobs here" />{" "}
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div class="foremp">
            <div>
              <span class="notifica">
                {" "}
                <i class="fa-regular fa-bell"></i>
                <sup class="sup-p">2</sup>
              </span>
            </div>
            <div class="user-icon">
              <span>
                <i class="fa-solid fa-bars"></i>
              </span>
              <span>
                <i class="fa-solid fa-user"></i>
              </span>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
