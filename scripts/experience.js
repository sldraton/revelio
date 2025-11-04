const fjPartialHTML = `<div class="d-flex flex-column justify-content-center">
                <img src="./assets/experience/fujitsu.jpg" alt="Fujitsu-photo" class="company-photo">
                <h6 class="fw-bold company-desc pt-2">Application Systems Engineer</h6>
                <p class="company-desc">WeServ Systems International (Fujitsu)</p>
                <p class="company-desc">Taguig City</p>
                <p class="company-desc">Dates: June 2021 - April 2025</p>
              </div>`;
const wtwPartialHTML = `<div class="d-flex flex-column justify-content-center">
                <img src="./assets/experience/wcc.jpeg" alt="company-photo" class="company-photo">
                <h6 class="fw-bold company-desc pt-2">Software Developer Intern</h6>
                <p class="company-desc">Willis Towers Watson</p>
                <p class="company-desc">Taguig City</p>
                <p class="company-desc">Dates: February 2019 - August 2019</p>
              </div>`;
const fjDescHTML = `<div class="job-desc-box align-self-center fj-txtbox">
                <ul class="job-desc">
                  <li>Engineered data pipelines for cleaning, manipulation, and visualization using Palantir Foundry to support business intelligence needs</li>
                  <li>Developed and executed test automation suites for critical business screens, leveraging an internal test recording tool</li>
                  <li>Executed the front-end redesign of the company website, implementing mobile responsiveness and design/content updates using HTML, CSS, Bootstrap, and Angular</li>
                  <li>Streamlined the internal assets refresh process by developing automation flows using Power Automate</li>
                  <li>Built and deployed a custom batch processing tool using Linux shell scripting</li>
                  <li>Ensured regulatory compliance during security audits</li>
                </ul>
              </div>`;

const wtwDescHTML = `<div class="job-desc-box align-self-center wtw-txtbox">
                <ul class="job-desc">
                  <li>
                    Created and updated SQL scripts using sqldeveloper
                  </li>
                  <li>
                    Exposed to version control tools and Jira in an agile setup
                  </li>
                  <li>
                    Received trainings on C#, OOP, and agile fundamentals
                  </li>
                </ul>
              </div>`;

function expandCollapseFJ() {
  const companyBox = document.querySelector(".fj-box");
  
  if (companyBox.classList.contains('expand')) {
    companyBox.innerHTML = fjPartialHTML + fjDescHTML;
    companyBox.classList.replace('expand','collapse');
  }
  else if (companyBox.classList.contains('collapse')) {
    companyBox.innerHTML = fjPartialHTML;
    companyBox.classList.replace('collapse','expand');
  }
}

function expandCollapseWTW() {
  const companyBox = document.querySelector(".wtw-box");
  
  if (companyBox.classList.contains('expand')) {
    companyBox.innerHTML = wtwPartialHTML + wtwDescHTML;
    companyBox.classList.replace('expand','collapse');
  }
  else if (companyBox.classList.contains('collapse')) {
    companyBox.innerHTML = wtwPartialHTML;
    companyBox.classList.replace('collapse','expand');
  }
}