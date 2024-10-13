"use client";

import React from "react";

const CourseDetail = ({ course }) => {
  const formatDuration = (duration) => {
    if (!duration) {
      return "0s";
    }
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);
    return `${hours > 0 ? hours + "h" : ""} ${
      minutes > 0 ? minutes + "m" : ""
    } ${seconds > 0 ? seconds + "s" : ""}`;
  };

  return (
    <div className="col-12">
      <div className="card border rounded-3">
        {/* Card header START{ */}
        <div className="card-header border-bottom">
          <h3 className="mb-0">Curriculum</h3>
        </div>
        {/* Card header END{ */}

        {/* Card body START{ */}
        <div className="card-body">
          <div className="row g-5">
            {/* Lecture item START{ */}
            {course.lectures.map((lecture, index) => (
              <div className="col-12" key={index}>
                {/* Curriculum item{ */}
                <h5 className="mb-4">{lecture.title}</h5>
                {lecture.topics.map((topic, index) =>
                  topic.is_premium ? (
                    <React.Fragment key={index}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                          <button
                            className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
                            style={{ transform: "rotate(0)" }}
                          >
                            <i className="fas fa-lock"></i>
                          </button>
                          <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">
                            <h6 className="mb-0">{topic.title}</h6>
                            <p className="mb-2 mb-sm-0 small">
                              {formatDuration(topic.video_duration)}
                            </p>
                          </div>
                        </div>
                        <a href="#" className="btn btn-sm btn-primary mb-0">
                          Premium
                        </a>
                      </div>
                      <hr />
                    </React.Fragment>
                  ) : (
                    <React.Fragment key={index}>
                      <div
                        className="d-sm-flex justify-content-sm-between align-items-center"
                        style={{ transform: "rotate(0)" }}
                      >
                        <div className="d-flex">
                          <a
                            href={topic.video_url || topic.quiz_url}
                            className="btn btn-danger-soft btn-round btn-sm mb-0 position-static stretched-link"
                            data-glightbox
                            data-gallery="video-tour"
                          >
                            <i className="fas fa-play"></i>
                          </a>
                          <div className="ms-2 ms-sm-3 mt-1 mt-sm-0">
                            <h6 className="mb-0">{topic.title}</h6>
                            <p className="mb-2 mb-sm-0 small">
                              {formatDuration(topic.video_duration)}
                            </p>
                          </div>
                        </div>
                        <a href="#" className="btn btn-sm btn-success mb-0">
                          Play
                        </a>
                      </div>
                      <hr />
                    </React.Fragment>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Card body START{ */}
      </div>
    </div>
  );
};

export default CourseDetail;
