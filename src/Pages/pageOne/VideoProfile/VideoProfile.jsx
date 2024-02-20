import "./index.css";

export default function VideoProfile() {
  return (
    <>
      <body>
        <div class="videoprofile">
          <div class="left-one">
            <h3>Stand out among recruiters with a video profile</h3>
            <p>Available for both Android and iOS apps</p>
            <input type="text" placeholder="Enter mobile number..." />
            <button>Get link</button>

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

          <div class="center-one">
            <div>
              <img
                src="https://static.naukimg.com/s/0/0/i/download-app-link/qr-code.svg"
                alt=""
              />
              <p>Scan to download</p>
            </div>
          </div>

          <div class="right-one">
            <img
              src="https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroupOneTheme.png"
              alt=""
            />
          </div>
        </div>
      </body>
    </>
  );
}
