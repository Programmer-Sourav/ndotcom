import "./index.css";

export default function ResumeSection() {
  return (
    <>
      <body>
        <div class="parent-div">
          <div class="child-left">
            <h4>Quick Links</h4>
            <div>
              <div class="quick-link">
                <small>Resume</small>
                <a href="#">Upload</a>
              </div>
              <div class="quick-link">
                <small>Resume headline</small>
                <a href="#">Add</a>
              </div>
              <div class="quick-link">
                <small>Key skills</small>
                <a href="#">Add</a>
              </div>
              <div class="quick-link">
                <small>Education</small>
                <a href="#">Add</a>
              </div>
              <div class="quick-link">
                <small>IT skills</small>
                <a href="#">Add</a>
              </div>
              <div class="quick-link">
                <small>Projects</small>
                <a href="#">Add</a>
              </div>
              <div class="quick-link">
                <small>Public summary</small>
                <a href="#">Add</a>
              </div>
              <div class="quick-link">
                <small>Accomplishments</small>
                <a href="#"></a>
              </div>
              <div class="quick-link">
                <small>Career profile</small>
                <a href="#"></a>
              </div>
              <div class="quick-link">
                <small>Personal details</small>
                <a href="#"></a>
              </div>
            </div>
          </div>

          <div class="child-right">
            <div>
              <b>
                Resume <span>Add 10%</span>
              </b>
              <p>
                Resume is the most important document recruiters look for.
                Recruiters generally do not look at profiles without resumes.
              </p>
              <div class="up-resume-btn">
                <button>Upload resume</button>
                <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
              </div>

              <div class="low-part">
                <img
                  src="https://static.naukimg.com/s/5/105/i/folderImgOneTheme.png"
                  alt=""
                />

                <p>
                  <span>Don't have a resume yet?</span>
                  <br /> Create a job-winning resume with our simple resume
                  builder
                </p>

                <a href="#">Create free resume</a>
              </div>
            </div>

            <div class="resume-headline">
              <p class="add-headline">
                <b>
                  Resume headline <span>Add 8%</span>
                </b>
                <a href="#">Add resume headline</a>
              </p>
              <p class="headline-para">
                It is the first thing recruiters notice in your profile. Write
                concisely what makes you unique and right person for the job you
                are looking for.
              </p>
            </div>

            <div class="resume-headline">
              <p class="add-headline">
                <b>
                  Key skills <span>Add 8%</span>
                </b>
                <a href="#">Add key skills</a>
              </p>
              <p class="headline-para">
                Tell recruiters what you know or what you are known for e.g.
                Direct Marketing, Oracle, Java etc. We will send you job
                recommendations based on these skills.
              </p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
