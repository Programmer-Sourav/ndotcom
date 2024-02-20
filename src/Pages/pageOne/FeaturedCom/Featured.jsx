import "./index.css";

export default function Featured() {
  return (
    <>
      <body>
        <div id="feat_sc">
          <h2>Featured Companies Actively Hiring</h2>
          <div class="feat-option">
            <a class="all-op" href="#">
              All
            </a>
            <a href="#">IT Services</a>
            <a href="#">BFSI</a>
          </div>
        </div>

        <div id="middiv_sc">
          <div id="ba_sc">
            <img
              src="https://img.naukimg.com/logo_images/groups/v2/398058.gif"
              alt=""
            />
            <div id="bd_sc">
              <p class="title-com">Amazon</p>
              <p class="review-com">
                <span>
                  <i class="fa-solid fa-star"></i> 4.1
                </span>{" "}
                20.2K+ reviews
              </p>
            </div>
            <div id="bm_sc">
              <p>World's largest Internet company.</p>
            </div>
            <button id="bp_sc">View Jobs</button>
          </div>

          <div id="ba_sc">
            <img
              src="https://img.naukimg.com/logo_images/groups/v2/4156.gif"
              alt=""
            />
            <div id="bd_sc">
              <p class="title-com">Cognizant</p>
              <p class="review-com">
                <span>
                  <i class="fa-solid fa-star"></i> 3.9
                </span>{" "}
                43.2K+ reviews
              </p>
            </div>
            <div id="bm_sc">
              <p>Leading lTes company with global presence.</p>
            </div>
            <button id="bp_sc">View Jobs</button>
          </div>

          <div id="ba_sc">
            <img
              src="https://img.naukimg.com/logo_images/groups/v2/5008140.gif"
              alt=""
            />
            <div id="bd_sc">
              <p class="title-com">Navi Tech</p>
              <p class="review-com">
                <span></span>{" "}
              </p>
            </div>
            <div id="bm_sc">
              <p>Fastest growing financial services compaines in india.</p>
            </div>
            <button id="bp_sc">View Jobs</button>
          </div>

          <div id="ba_sc">
            <img
              src="https://img.naukimg.com/logo_images/groups/v2/5935206.gif"
              alt=""
            />
            <div id="bd_sc">
              <p class="title-com">Hitachi Energy</p>
              <p class="review-com">
                <span>
                  <i class="fa-solid fa-star"></i> 4.1
                </span>{" "}
                480 reviews
              </p>
            </div>
            <div id="bm_sc">
              <p>Advancing a sustainable energy future for all.</p>
            </div>
            <button id="bp_sc">View Jobs</button>
          </div>

          <div id="ba_sc">
            <img
              src="https://img.naukimg.com/logo_images/groups/v2/735170.gif"
              alt=""
            />
            <div id="bd_sc">
              <p class="title-com">Fortea Development India</p>
              <p class="review-com">
                <span>
                  <i class="fa-solid fa-star"></i> 4.0
                </span>{" "}
                570 reviews
              </p>
            </div>
            <div id="bm_sc">
              <p>Leading global life sciences company.</p>
            </div>
            <button id="bp_sc">View Jobs</button>
          </div>
        </div>

        <div id="bdv_sc">
          <button id="bottomDivButton"> View all companies</button>
        </div>
      </body>
    </>
  );
}
