export default function PremiumJobSearch() {
  return (
    <div>
      <body>
        <div id="premimum">
          <div id="pimg">
            <img
              src="https://static.naukimg.com/s/0/0/i/ff-services-ot.png"
              alt=""
            />
          </div>
          <div id="infor">
            <h3>Accelerate your job search with premium services</h3>
            <p>
              Services to help you get hired, faster: from preparing your CV,
              getting recruiter attention, finding the right jobs, and more!
            </p>
            <div class="si">
              <a href="#">
                <i class="fa-solid fa-bolt"></i> Resume writing `${">"}`
              </a>
              <a href="#">
                <i class="fa-solid fa-book-open"></i> Priority applicant `${">"}
                `
              </a>
              <a href="#">
                <i class="fa-solid fa-pen"></i> Resume display `${">"}`
              </a>
            </div>
          </div>
          <div id="pbtn">
            <button class="fastforward-btn">by MyNaukri fastforward</button>
            <br />
            <button id="o">Learn more</button>
            <p>Includes paid services</p>
          </div>
        </div>
      </body>
    </div>
  );
}
