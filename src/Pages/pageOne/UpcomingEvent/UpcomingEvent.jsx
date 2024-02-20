import "./index.css";

export default function UpcomingEvent() {
  return (
    <>
      <body>
        <div class="up-event-challenge">
          <div class="upcoming-event">
            <h2>Upcoming events and challenges</h2>
            <img src="./img/eventsSwiperLeft-ot.png" alt="" />
          </div>

          <div class="entry-closes">
            <div class="fallout-img">
              <span>Entry closes in 3d</span>
              <button class="webinar">Webinar</button>
            </div>

            <div>
              <div class="coding-ninjas">
                <img
                  src="https://img.naukimg.com/logo_images/groups/v1/4670525.gif"
                  alt=""
                />

                <p>
                  Build a career as a Data Analyst. <br /> Learn how? <br />{" "}
                  <span>Coding Ninjas</span>
                </p>
              </div>
            </div>

            <div>
              <div class="enrolled-td">
                <p>
                  <i class="fa-regular fa-calendar-days"></i> 7 Feb, 7:30 PM
                </p>
                <p>
                  <i class="fa-regular fa-user"></i> 358 Enrolled
                </p>
              </div>
              <hr class="hr-line" />
              <div class="detail-expert">
                <a class="learn-exp" href="#">
                  <i class="fa-regular fa-lightbulb"></i> Learn from experts
                </a>
                <a href="#">View Details</a>
              </div>
            </div>
          </div>

          <div class="entry-closes">
            <div class="fallout-img">
              <span>Entry closes in 1d</span>
              <button class="webinar">Webinar</button>
            </div>

            <div>
              <div class="coding-ninjas">
                <img
                  src="https://img.naukimg.com/logo_images/groups/v1/4670525.gif"
                  alt=""
                />

                <p>
                  Break into MAANG companies service based industry! Learn how?{" "}
                  <br /> <span>Coding Ninjas</span>
                </p>
              </div>
            </div>

            <div>
              <div class="enrolled-td">
                <p>
                  <i class="fa-regular fa-calendar-days"></i> 7 Feb, 7:30 PM
                </p>
                <p>
                  <i class="fa-regular fa-user"></i> 103 Enrolled
                </p>
              </div>
              <hr class="hr-line" />
              <div class="detail-expert">
                <a class="learn-exp" href="#">
                  <i class="fa-regular fa-lightbulb"></i> Learn from experts
                </a>
                <a href="#">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
