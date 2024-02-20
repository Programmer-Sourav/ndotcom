import "./index.css";

export default function ProfileSection() {
  return (
    <>
      <body>
        <div class="profile-parent">
          <div class="icon-profile">
            <div>
              <span>
                <i class="fa-solid fa-user"></i>
              </span>
            </div>
          </div>

          <div class="center-part">
            <div class="top-center">
              <div>
                <h2>Md Nahid Hossain Mazumder</h2>
                <p>
                  Profile last updated - <span>Yesterday</span>
                </p>
              </div>
              <div>
                <span>
                  <i class="fa-solid fa-pen"></i>
                </span>
              </div>
            </div>
            <hr class="hr-mid" />
            <div class="low-center-part">
              <div class="low-part-left">
                <p>
                  <i class="fa-solid fa-location-dot"></i> Kolkata, INDIA
                </p>
                <p>
                  <i class="fa-solid fa-briefcase"></i> Fresher
                </p>
                <p>
                  <i class="fa-regular fa-calendar-days"></i> Add availability
                  to join
                </p>
              </div>

              <hr class="align-hr" />

              <div class="right-low-part">
                <p>
                  <i class="fa-solid fa-phone"></i> 9999900000{" "}
                  <a href="#"> Verify</a>
                </p>
                <p>
                  <i class="fa-regular fa-envelope"></i> nahidhzm4@gmail.com{" "}
                  <a href="#"> Verify</a>
                </p>
              </div>
            </div>
          </div>

          <div class="right-part-data">
            <div>
              <div class="data-right">
                <p>
                  <i class="fa-solid fa-mobile"></i> Verify mobile number
                </p>
                <a href="#">
                  <i class="fa-solid fa-arrow-up"></i> 10%
                </a>
              </div>
              <div class="data-right">
                <p>
                  <i class="fa-regular fa-envelope"></i> Verify email
                </p>
                <a href="#">
                  <i class="fa-solid fa-arrow-up"></i> 5%
                </a>
              </div>
              <div class="data-right">
                <p>
                  <i class="fa-solid fa-location-dot"></i> Add preferred
                  location
                </p>
                <a href="#">
                  <i class="fa-solid fa-arrow-up"></i> 2%
                </a>
              </div>

              <button class="add-missing-data"> Add 13 missing details</button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
