import React from "react";
import "./style/master.scss";
import Project from "./components/Project";
import { projects } from "./data/projects";
import githubLogo from "./icon/github.svg";
import linkedInLogo from "./icon/linkedin.svg";
import youtubeLogo from "./icon/youtube.svg";
import starIcon from "./icon/star.svg";
import video1 from "./image/video1.webp";
import video2 from "./image/video2.webp";
import linkIcon from "./icon/link.svg";

console.log(projects);

function App() {
   return (
      <div className="container">
         <div className="row mt-2">
            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
               <h1 className="display-3 mb-1 text-center title">Mike Zetlow</h1>
               <p className="lead font-weight-normal mb-4 text-center">
                  Full stack developer
               </p>
               <p className="lead font-weight-normal text-center mb-4 mb-sm-5">
                  <a href="https://www.google.com" className="d-inline-block">
                     <img
                        src={githubLogo}
                        width="24px"
                        className="ml-4 mt-n1"
                        alt="Github logo"
                     />
                     <span className="ml-2">Github</span>
                  </a>
                  <a href="https://www.google.com" className="d-inline-block">
                     <img
                        src={linkedInLogo}
                        width="20px"
                        className="ml-4 mt-n1"
                        alt="LinkedIn logo"
                     />
                     <span className="ml-2">LinkedIn</span>
                  </a>
                  <a href="https://www.google.com" className="d-inline-block">
                     <img
                        src={youtubeLogo}
                        width="28px"
                        className="ml-4 mt-1"
                        alt="YouTube logo"
                     />
                     <span className="ml-2">YouTube</span>
                  </a>
               </p>

               <div className="row mb-2">
                  <div className="col-12 col-sm-8">
                     <input
                        id="search-projects"
                        className="form-control"
                        placeholder="Search projects"
                     />
                  </div>
                  <div className="col-12 col-sm-4">
                     <div className="custom-control custom-checkbox custom-control-inline float-right mr-0 mt-2">
                        <input
                           type="checkbox"
                           className="custom-control-input"
                           id="advanced-view"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="advanced-view"
                        >
                           Advanced view
                        </label>
                     </div>
                  </div>
               </div>

               <div className="row mb-5">
                  <div className="col-12">
                     <div className="custom-control custom-radio custom-control-inline">
                        <input
                           type="radio"
                           id="most-recent"
                           name="order-projects"
                           className="custom-control-input"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="most-recent"
                        >
                           Most recent
                        </label>
                     </div>
                     <div className="custom-control custom-radio custom-control-inline">
                        <input
                           type="radio"
                           id="most-popular"
                           name="order-projects"
                           className="custom-control-input"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="most-popular"
                        >
                           Most popular
                        </label>
                     </div>
                  </div>
               </div>

               {/* <!-- Start Project Component --> */}
               <div className="row mb-5">
                  <div className="col-12 mb-2">
                     <a href="https://www.google.com" className="text-reset">
                        <h3 className="font-weight-normal">
                           Validation of Email and Password on Account Creation
                        </h3>
                     </a>
                  </div>
                  <div className="col-12 col-md-4">
                     <a href="https://www.google.com">
                        <img
                           src={video1}
                           width="510px"
                           className="img-fluid"
                           alt="Validation of Email and Password on Account Creation"
                        />
                     </a>
                  </div>
                  <div className="col-12 col-md-8 mt-3 mt-md-n1">
                     <a
                        href="https://www.google.com"
                        className="text-decoration-none text-reset"
                     >
                        <p>
                           <img src={starIcon} width="16px" alt="Star icon" />
                           <img src={starIcon} width="16px" alt="Star icon" />
                           <img src={starIcon} width="16px" alt="Star icon" />
                           <img src={starIcon} width="16px" alt="Star icon" />
                           <span className="ml-2">
                              Validation of email and password fields in White
                              Bear, following best security and UX practices. (4
                              min.)
                           </span>
                        </p>
                        <p>Sept. 30, 2020</p>
                     </a>
                     <a href="https://www.google.com">
                        <img
                           src={linkIcon}
                           width="16px"
                           className="mr-2"
                           alt=""
                        />
                        https://github.com/10xcodecamp/wh...
                     </a>
                  </div>
               </div>
               {/* <!-- End Project Component --> */}

               {/* <!-- Start Project Component --> */}
               <div className="row mb-5">
                  <div className="col-12 mb-2">
                     <a href="https://www.google.com" className="text-reset">
                        <h3 className="font-weight-normal">
                           Walkthrough of the White Bear Prototype
                        </h3>
                     </a>
                  </div>
                  <div className="col-12 col-md-4">
                     <a href="https://www.google.com">
                        <img
                           src={video2}
                           width="510px"
                           className="img-fluid"
                           alt="Walkthrough of the White Bear Prototype"
                        />
                     </a>
                  </div>
                  <div className="col-12 col-md-8 mt-3 mt-md-n1">
                     <a
                        href="https://www.google.com"
                        className="text-decoration-none text-reset"
                     >
                        <p>
                           <img src={starIcon} width="16px" alt="Star icon" />
                           <img src={starIcon} width="16px" alt="Star icon" />
                           <img src={starIcon} width="16px" alt="Star icon" />
                           <img src={starIcon} width="16px" alt="Star icon" />
                           <img src={starIcon} width="16px" alt="Star icon" />
                           <span className="ml-2">
                              Prototype of White Bear, an app that helps
                              students memorize with spaced repetition. (4 min.)
                           </span>
                        </p>
                        <p>Sept. 28, 2020</p>
                     </a>
                     <a href="https://www.google.com">
                        <img
                           src={linkIcon}
                           width="16px"
                           className="mr-2"
                           alt=""
                        />
                        https://github.com/10xcodecamp/wh...
                     </a>
                  </div>
               </div>
               {/* <!-- End Project Component --> */}
            </div>
         </div>
      </div>
   );
}

export default App;
