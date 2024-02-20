import "./index.css";

export default function FindYourJobs() {
  return (
    <>
    <body>
      <div id="header">
        <h1>Find your dream job now</h1>
        <h2>5 lakh+ jobs for you to explore</h2>

        <div class="searchbar">
          <input
            type="search"
            id="search"
            placeholder="&#xF002 Enter skills / designations / companies"
            style="font-family: Arial, FontAwesome"
            oninput="Searchfun()"
          />
          <span>|</span>
          <select id="exper">
            <option>Experience</option>
            <option value="fresher">Fresher</option>
            <option value="1">1 Years</option>
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
            <option value="4">4 Years</option>
            <option value="5">5 Years</option>
            <option value="6">6 Years</option>
            <option value="7">7 Years</option>
            <option value="8">8 Years</option>
            <option value="9">9 Years</option>
            <option value="10">10 Years</option>
            <option value="11">11 Years</option>
            <option value="12">12 Years</option>
            <option value="13">13 Years</option>
            <option value="14">14 Years</option>
            <option value="15">15 Years</option>
            <option value="16">16 Years</option>
            <option value="17">17 Years</option>
            <option value="18">18 Years</option>
            <option value="19">19 Years</option>
            <option value="20">20 Years</option>
            <option value="21">21 Years</option>
            <option value="22">22 Years</option>
            <option value="23">23 Years</option>
            <option value="24">24 Years</option>
            <option value="25">25 Years</option>
          </select>
          <span>|</span>

          <input
            type="search"
            id="location"
            placeholder="Enter Location"
            oninput="Location()"
          />
          <button class="btn" onclick="window.location.href='jobs1.html'">
            Search
          </button>
        </div>
      </div>
      <div id="trending">
        <div id="row1">
          <a href="#">
            <div class="card">
              <img
                src="https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg"
                alt=""
              />
              <h4>Remote </h4>
              <span id="arrow1"> ""</span>
            </div>
          </a>
          <a href="#">
            <div class="card">
              <img
                src="https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg"
                alt=""
              />
              <h4>MNC</h4>
              <span id="arrow1">""</span>
            </div>
          </a>
          <a href="#">
            <div class="card">
              <img
                src="https://static.naukimg.com/s/0/0/i/trending-naukri/temporary-wfh.svg"
                alt=""
              />
              <h4>Sales </h4>
              <span id="arrow1">""</span>
            </div>
          </a>
          <a href="#">
            <div class="card">
              <img
                src="https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg"
                alt=""
              />
              <h4>Fresher </h4>
              <span id="arrow1">""</span>
            </div>
          </a>
          <a href="#">
            <div class="card">
              <img
                src="https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg"
                alt=""
              />
              <h4>Analytics </h4>
              <span id="arrow1">""</span>
            </div>
          </a>
          <a href="#">
            <div class="card">
              <img
                src="https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg"
                alt=""
              />
              <h4>Fortune 500</h4>
              <span id="arrow1">""</span>
            </div>
          </a>
        </div>
        <div id="row2">
          <a href="#">
            <div class="card">
              <img
                src="https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg"
                alt=""
              />
              <h4>Supply Ch...</h4>
              <span id="arrow1">""</span>
            </div>
          </a>
          <a href="#">
            <div class="card">
              <img
                src="https://static.naukimg.com/s/0/0/i/trending-naukri/supplychain.svg"
                alt=""
              />
              <h4>Software & ... </h4>
              <span id="arrow1">""</span>
            </div>
          </a>
          <a href="#">
            <div class="card">
              <img
                src="https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg"
                alt=""
              />
              <h4>Project Mg...</h4>
              <span id="arrow1">""</span>
            </div>
          </a>
          <a href="#">
            <div class="card">
              <img
                src="https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg"
                alt=""
              />
              <h4>Engineering </h4>
              <span id="arrow1">""</span>
            </div>
          </a>
          <a href="#">
            <div class="card">
              <img
                src="https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg"
                alt=""
              />
              <h4>Startup</h4>
              <span id="arrow1">""</span>
            </div>
          </a>
        </div>
      </div>
      </body>
    </>
  );
}
