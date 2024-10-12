import TopicItem from "./TopicItem";
import React from "react";

const LectureItem = ({
  lecture,
  lectureId,
  setLectureIndex,
  removeTopic,
  removeLecture,
}) => {
  return (
    <div className="accordion-item mb-3">
      <h6 className="accordion-header font-base" id={`heading-${lectureId}`}>
        <button
          className="accordion-button fw-bold rounded d-inline-block collapsed d-block pe-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${lectureId}`}
          aria-expanded="false"
          aria-controls={`collapse-${lectureId}`}
          onClick={() => setLectureIndex(lectureId)}
        >
          {lecture.title}
        </button>
      </h6>
      <div
        id={`collapse-${lectureId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${lectureId}`}
        data-bs-parent="#accordionExample2"
      >
        <div className="accordion-body mt-3 ㅓㅕ">
          {lecture.topics.map((topic, index) => (
            <React.Fragment key={index}>
              <TopicItem
                topic={topic}
                topId={index}
                lectureId={lectureId}
                removeTopic={removeTopic}
              />
              <hr />
            </React.Fragment>
          ))}
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="btn btn-sm btn-danger-soft mb-0"
              onClick={(e) => removeLecture(lectureId, e)}
            >
              <i className="bi bi-trash me-2"></i>Delete lecture
            </button>
            <a
              href="#"
              className="btn btn-sm btn-dark mb-0"
              data-bs-toggle="modal"
              data-bs-target="#addTopic"
            >
              <i className="bi bi-plus-circle me-2"></i>Add topic
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureItem;
