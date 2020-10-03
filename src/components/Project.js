import React from "react";
import starIcon from "../icon/star.svg";
import video1 from "../image/video1.webp";
import video2 from "../image/video2.webp";
import linkIcon from "../icon/link.svg";

function Project(props) {
   console.log("The props we passed from the parent component: ", props);
   return (
      <div className="row mb-5">
         <div className="col-12 mb-2">
            <a href={props.project.youtubeUrl} className="text-reset">
               <h3 className="font-weight-normal">{props.project.title}</h3>
            </a>
         </div>
         <div className="col-12 col-md-4">
            <a href={props.project.youtubeUrl}>
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
               href={props.project.youtubeUrl}
               className="text-decoration-none text-reset"
            >
               <p>
                  <img src={starIcon} width="16px" alt="Star icon" />
                  <img src={starIcon} width="16px" alt="Star icon" />
                  <img src={starIcon} width="16px" alt="Star icon" />
                  <img src={starIcon} width="16px" alt="Star icon" />
                  <span className="ml-2">
                     {props.project.desc} ({props.project.totalMinutes} min.)
                  </span>
               </p>
               <p>{props.project.postedAt}</p>
            </a>
            <a href={props.project.githubUrl}>
               <img src={linkIcon} width="16px" className="mr-2" alt="" />
               {props.project.githubUrl}
            </a>
         </div>
      </div>
   );
}

export default Project;
