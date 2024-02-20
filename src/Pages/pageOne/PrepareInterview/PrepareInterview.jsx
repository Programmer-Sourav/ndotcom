import "./index.css";

export default function PrepareInterview() {
  return (
    <>
      <body>
        <div class="main-body">
          <div class="left-one">
            <button>by AmbitionBox</button>

            <p>Prepare for your next interview</p>
          </div>

          <div class="main-center-card">
            {/* 2nd / center part */}
            <h2>Interview questions by company</h2>
            <div class="center-card">
              <div class="card-small">
                <img
                  src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus-ot.png"
                  alt=""
                />
                <p>
                  Byjus <br /> <span>816 reviews</span>
                </p>
                <b> `${">"}`</b>
              </div>

              <div class="card-small">
                <img
                  src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant-ot.png"
                  alt=""
                />
                <p>
                  Cognizant <br /> <span>1.6k+ reviews</span>
                </p>
                <b> `${">"}`</b>
              </div>

              <div class="card-small">
                <img
                  src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture-ot.png"
                  alt=""
                />
                <p>
                  Accenture <br /> <span>2k+ reviews</span>
                </p>
                <b> `${">"}`</b>
              </div>
              <div class="card-small">
                <img
                  src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs-ot.png"
                  alt=""
                />
                <p>
                  TCS <br /> <span>2k+ reviews</span>
                </p>
                <b> `${">"}`</b>
              </div>
              <div class="card-small">
                <img
                  src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon-ot.png"
                  alt=""
                />
                <p>
                  Amazon <br /> <span>1k+ reviews</span>
                </p>
                <b> `${">"}`</b>
              </div>
              <div class="card-small">
                <img
                  src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart-ot.png"
                  alt=""
                />
                <p>
                  Flipkart <br /> <span>488 reviews</span>
                </p>
                <b> `${">"}`</b>
              </div>
            </div>

            <h5>View All Compaines `${">"}`</h5>
          </div>

          <div class="right-one">
            <h3>Interview questions by role</h3>
            <p>
              Software Engineering <span>( 7.2k questions)</span>
            </p>
            <hr class="right-hr" />
            <p>
              Business Analyst <span> (2.8K+ questions)</span>
            </p>
            <hr class="right-hr" />
            <p>
              Consultant <span> (2.4K+ questions)</span>
            </p>
            <hr class="right-hr" />
            <p>
              Financial Analyst <span> (894 questions)</span>
            </p>
            <hr class="right-hr" />
            <p>
              Sales & Marketing <span> (991 questions)</span>
            </p>
            <hr class="right-hr" />
            <p>
              Quality Engineer <span> (1.3K+ questions)</span>
            </p>

            <a href="#">View all role `${">"}`</a>
          </div>
        </div>
      </body>
    </>
  );
}
