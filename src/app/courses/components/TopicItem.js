"use client";

import React from "react";

const TopicItem = ({ topic, removeTopic, lectureId, topId }) => {
  const lightBoxReload = (event) => {
    event.preventDefault();
    const element = event.target;
    console.log(element);
    console.log(element.getAttribute("href"));
    lightBox.setElements([
      {
        href: element.getAttribute("href"),
        type: "video",
      },
    ]);
    lightBox.open();
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="position-relative">
        <a
          href={topic.video_url || topic.quiz_url}
          className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static"
          onClick={lightBoxReload}
          data-glightbox
          data-gallery="video-tour"
        >
          <i className="fas fa-play"></i>
        </a>
        <span className="ms-2 mb-0 h6 fw-light">{topic.title}</span>
      </div>
      {/* Edit and cancel button */}
      <div>
        <button
          className="btn btn-sm btn-danger-soft btn-round mb-0"
          onClick={(e) => removeTopic(topId, lectureId, e)}
        >
          <i className="fas fa-fw fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default TopicItem;
