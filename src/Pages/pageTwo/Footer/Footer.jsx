import "./index.css"


export default function Footer() {
  return (
    <>
      <body>
        <div id="bottom">
          <div id="div1">
            <img
              class="logo-web"
              src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
              alt=""
            />
            <p>Connect with us</p>
            <div id="logos">
              <img
                src="https://static.naukimg.com/s/0/0/i/new-homepage/facebook.svg"
                alt=""
              />
              <img
                src="https://static.naukimg.com/s/0/0/i/new-homepage/instagram.svg"
                alt=""
              />
              <img
                src="https://static.naukimg.com/s/0/0/i/new-homepage/twitter.svg"
                alt=""
              />
              <img
                src="https://static.naukimg.com/s/0/0/i/new-homepage/linkedin.svg"
                alt=""
              />
            </div>
          </div>
          <div id="div2">
            <div class="section1">
              <a href="#">About us</a>
              <a href="#">Careers</a>
              <a href="#">Employer home</a>
              <a href="#">Sitemap</a>
              <a href="#">Credits</a>
            </div>
            <div class="section2">
              <a href="#">Help center</a>
              <a href="#">Summons/Notices</a>
              <a href="#">Grievances</a>
              <a href="#">Report issue</a>
            </div>
            <div class="section3">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & conditions</a>
              <a href="#">Fraud alert</a>
              <a href="#">Trust & safety</a>
            </div>
          </div>
          <div id="div3">
            <h3>Apply on the go</h3>
            <p>Get real-time job updates on our App</p>
            <div class="store">
              <a href="https://play.google.com/store/apps/details?id=naukriApp.appModules.login&hl=en&utm_source=naukri&utm_medium=footer">
                <img
                  src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png"
                  alt=""
                />
              </a>
              <a href="https://apps.apple.com/in/app/naukri-com-job-search/id482877505">
                <img
                  src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
