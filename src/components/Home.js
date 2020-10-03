import React from "react";
import "../style/master.scss";
import Project from "./Project";
import { projects } from "../data/projects";
import githubLogo from "../icon/github.svg";
import linkedInLogo from "../icon/linkedin.svg";
import youtubeLogo from "../icon/youtube.svg";
import starIcon from "../icon/star.svg";
import video1 from "../image/video1.webp";
import video2 from "../image/video2.webp";
import linkIcon from "../icon/link.svg";

console.log(projects);

export default function Home() {
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

               {projects.map((project) => {
                  return <Project project={project} key={project.id} />;
               })}
            </div>
         </div>
      </div>
   );
}