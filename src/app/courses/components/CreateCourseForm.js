"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import LectureItem from "./LectureItem";
import cookie from "js-cookie";

const CreateCourseForm = () => {
  const [title, setTitle] = useState("");
  const [short_description, setShortDescription] = useState("");
  const [category, setCategory] = useState("");
  const [skill_level, setSkillLevel] = useState("");
  const [price, setPrice] = useState("");
  const [lectures, setLectures] = useState([]);
  const [topicType, setTopicType] = useState("");
  const [videoId, setVideoId] = useState("");
  const [videos, setVideos] = useState([]);
  const [lectureTitle, setLectureTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [courseImageId, setCourseImageId] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoPreview, setVideoPreview] = useState("");
  const [lectureIndex, setLectureIndex] = useState(0);
  const [topicTitle, setTopicTitle] = useState("");
  const [topicVideo, setTopicVideo] = useState("");
  const [topicVideoURL, setTopicVideoURL] = useState("");
  const [topicVideoId, setTopicVideoId] = useState("");
  const [isPremium, setIsPremium] = useState(true);
  const api = process.env.NEXT_PUBLIC_FRONTEND_URL;

  useEffect(() => {
    if (topicType === "video") {
    }
  }, [topicType, videos, api]);

  const category_choices = [
    { value: "", label: "Select category" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Django", label: "Django" },
    { value: "React", label: "React" },
    { value: "Vue", label: "Vue" },
    { value: "Node", label: "Node" },
    { value: "AWS", label: "AWS" },
    { value: "Docker", label: "Docker" },
    { value: "DB", label: "DB" },
  ];

  const skill_level_choices = [
    { value: "", label: "All" },
    { value: "beginner", label: "초급" },
    { value: "intermediate", label: "중급" },
    { value: "advanced", label: "고급" },
  ];

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      alert("사진을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedImage);

    fetch(`${api}/images/upload/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookie.get("access_token")}`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to upload image");
        }
      })
      .then((data) => {
        console.log(data);
        setCourseImageId(data.id);
        setImagePreview(data.url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedVideo(file);
      setVideoURL("");
    }
  };

  const handleTopicVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTopicVideo(file);
    }
  };

  const uploadVideo = async (e) => {
    e.preventDefault();
    if (!selectedVideo) {
      alert("비디오를 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedVideo);

    fetch(`${api}/videos/upload/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookie.get("access_token")}`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          throw new Error("Failed to upload video");
        }
      })
      .then((data) => {
        console.log(data);
        setVideoURL(data.url);
        setVideoId(data.id);
        setVideoPreview(data.thumbnail);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const uploadTopicVideo = async (e) => {
    e.preventDefault();
    if (!topicVideo) {
      alert("비디오를 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("file", topicVideo);

    fetch(`${api}/videos/upload/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cookie.get("access_token")}`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          throw new Error("Failed to upload video");
        }
      })
      .then((data) => {
        setTopicVideoURL(data.url);
        setTopicVideoId(data.id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const removeVideo = (e) => {
    e.preventDefault();
    setSelectedVideo(null);
    setVideoURL("");
    document.getElementById("videoUpload").value = "";
  };

  function createCourse(e) {
    e.preventDefault();

    const description = JSON.stringify(quillEditor.getContents().ops);
    const lecturesData = lectures.map((lecture) => {
      return {
        ...lecture,
        order: lecture.lectureIndex,
        topics: lecture.topics.map((topic) => {
          return {
            ...topic,
            order: topic.topicIndex,
          };
        }),
      };
    });

    const data = {
      title,
      short_description,
      category,
      skill_level,
      price,
      description,
      thumbnail_id: courseImageId,
      video_id: videoId,
      lectures: [...lecturesData],
    };
    console.log(JSON.stringify(data));
    fetch(`${api}/courses/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie.get("access_token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return (window.location.href = "/courses");
        } else {
          console.log(response);
          throw new Error("Failed to create course");
        }
      })
      .catch((error) => {
        alert(`생성 중 오류가 발생했습니다. 다시 시도해주세요. ${error}`);
      });
  }

  const addLecture = (e) => {
    // form 데이터를 가져와서 lectures에 추가
    e.preventDefault();
    setLectures([
      ...lectures,
      {
        title: lectureTitle,
        topics: [],
        lectureIndex: lectures.length,
      },
    ]);
    setLectureTitle("");
  };

  const removeLecture = (lectureId, e) => {
    e.preventDefault();
    const newLectures = [...lectures];
    newLectures.splice(lectureId, 1);
    setLectures(newLectures);
  };

  const addTopic = (e) => {
    // form 데이터를 가져와서 lectures에 추가
    e.preventDefault();
    if (!topicTitle) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!topicType) {
      alert("타입을 선택해주세요.");
      return;
    }
    if (topicType === "video" && !topicVideo) {
      alert("비디오를 선택해주세요.");
      return;
    }
    if (topicType === "video" && !topicVideoURL) {
      alert("비디오를 업로드해주세요.");
      return;
    }

    const newLectures = [...lectures];

    newLectures[lectureIndex].topics = [
      ...(newLectures[lectureIndex].topics || []),
      {
        title: topicTitle,
        id: length,
        type: topicType,
        video_id: topicVideoId,
        video_url: topicVideoURL,
        topicIndex: newLectures[lectureIndex].topics.length,
        title: topicTitle,
        is_premium: isPremium,
      },
    ];
    setLectures(newLectures);
    setTopicTitle("");
    setTopicType("");
    setTopicVideo("");
    setTopicVideoId("");
    setTopicVideoURL("");
    setIsPremium(true);
  };

  const removeTopic = (lectureIndex, topicIndex, e) => {
    e.preventDefault();
    const newLectures = [...lectures];
    newLectures[lectureIndex].topics.splice(topicIndex, 1);
    setLectures(newLectures);
  };

  return (
    <main>
      {/* =======================
Page Banner START */}
      <section
        className="py-0 bg-blue h-100px align-items-center d-flex h-200px rounded-0"
        // style="background:url(assets/images/pattern/04.png) no-repeat center center; background-size:cover;"
        style={{
          background:
            "url(assets/images/pattern/04.png) no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        {/* Main banner background image */}
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Title */}
              <h1 className="text-white">Submit a new Course</h1>
              <p className="text-white mb-0">
                Read our
                <a href="#" className="text-white">
                  <u>Before you create a course</u>
                </a>
                article before submitting!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* =======================
Page Banner END */}

      {/* =======================
Steps START */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              {/* Content */}
              <p className="text-center">
                Use this interface to add a new Course to the portal. Once you
                are done adding the item it will be reviewed for quality. If
                approved, your course will appear for sale and you will be
                informed by email that your course has been accepted.
              </p>
            </div>
          </div>

          <div className="card bg-transparent border rounded-3 mb-5">
            <div id="stepper" className="bs-stepper stepper-outline">
              {/* Card header */}
              <div className="card-header bg-light border-bottom px-lg-5">
                {/* Step Buttons START */}
                <div className="bs-stepper-header" role="tablist">
                  {/* Step 1 */}
                  <div className="step" data-target="#step-1">
                    <div className="d-grid text-center align-items-center">
                      <button
                        type="button"
                        className="btn btn-link step-trigger mb-0"
                        role="tab"
                        id="steppertrigger1"
                        aria-controls="step-1"
                      >
                        <span className="bs-stepper-circle">1</span>
                      </button>
                      <h6 className="bs-stepper-label d-none d-md-block">
                        Course details
                      </h6>
                    </div>
                  </div>
                  <div className="line"></div>

                  {/* Step 2 */}
                  <div className="step" data-target="#step-2">
                    <div className="d-grid text-center align-items-center">
                      <button
                        type="button"
                        className="btn btn-link step-trigger mb-0"
                        role="tab"
                        id="steppertrigger2"
                        aria-controls="step-2"
                      >
                        <span className="bs-stepper-circle">2</span>
                      </button>
                      <h6 className="bs-stepper-label d-none d-md-block">
                        Course media
                      </h6>
                    </div>
                  </div>
                  <div className="line"></div>

                  {/* Step 3 */}
                  <div className="step" data-target="#step-3">
                    <div className="d-grid text-center align-items-center">
                      <button
                        type="button"
                        className="btn btn-link step-trigger mb-0"
                        role="tab"
                        id="steppertrigger3"
                        aria-controls="step-3"
                      >
                        <span className="bs-stepper-circle">3</span>
                      </button>
                      <h6 className="bs-stepper-label d-none d-md-block">
                        Curriculum
                      </h6>
                    </div>
                  </div>
                </div>
                {/* Step Buttons END */}
              </div>

              {/* Card body START */}
              <div className="card-body">
                {/* Step content START */}
                <div className="bs-stepper-content">
                  <form>
                    {/* Step 1 content START */}
                    <div
                      id="step-1"
                      role="tabpanel"
                      className="content fade"
                      aria-labelledby="steppertrigger1"
                    >
                      {/* Title */}
                      <h4>Course details</h4>
                      <hr /> {/* Divider */}
                      {/* Basic information START */}
                      <div className="row g-4">
                        {/* Course title */}
                        <div className="col-12">
                          <label className="form-label">Course title</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter course title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>

                        {/* Short description */}
                        <div className="col-12">
                          <label className="form-label">
                            Short description
                          </label>
                          <textarea
                            className="form-control"
                            rows="2"
                            placeholder="Enter keywords"
                            name="short_description"
                            value={short_description}
                            onChange={(e) =>
                              setShortDescription(e.target.value)
                            }
                          ></textarea>
                        </div>

                        {/* Course category */}
                        <div className="col-md-6">
                          <label className="form-label">Course category</label>
                          <select
                            className="form-select js-choice border-0 z-index-9 bg-transparent"
                            aria-label=".form-select-sm"
                            data-search-enabled="true"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            {category_choices.map((category, index) => (
                              <option key={index} value={category.value}>
                                {category.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Course level */}
                        <div className="col-md-6">
                          <label className="form-label">Course level</label>
                          <select
                            className="form-select js-choice border-0 z-index-9 bg-transparent"
                            aria-label=".form-select-sm"
                            data-search-enabled="false"
                            data-remove-item-button="true"
                            value={skill_level}
                            onChange={(e) => setSkillLevel(e.target.value)}
                          >
                            {skill_level_choices.map((skill_level, index) => (
                              <option key={index} value={skill_level.value}>
                                {skill_level.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        {/* Course price */}
                        <div className="col-md-6">
                          <label className="form-label">Course price</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter course price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>

                        {/* Course description */}
                        <div className="col-12">
                          <label className="form-label">Add description</label>
                          {/* Editor toolbar */}
                          <div
                            className="bg-light border border-bottom-0 rounded-top py-3"
                            id="quilltoolbar"
                          >
                            <span className="ql-formats">
                              <select className="ql-size"></select>
                            </span>
                            <span className="ql-formats">
                              <button className="ql-bold"></button>
                              <button className="ql-italic"></button>
                              <button className="ql-underline"></button>
                              <button className="ql-strike"></button>
                            </span>
                            <span className="ql-formats">
                              <select className="ql-color"></select>
                              <select className="ql-background"></select>
                            </span>
                            <span className="ql-formats">
                              <button className="ql-code-block"></button>
                            </span>
                            <span className="ql-formats">
                              <button
                                className="ql-list"
                                value="ordered"
                              ></button>
                              <button
                                className="ql-list"
                                value="bullet"
                              ></button>
                              <button className="ql-indent" value="-1"></button>
                              <button className="ql-indent" value="+1"></button>
                            </span>
                            <span className="ql-formats">
                              <button className="ql-link"></button>
                              <button className="ql-image"></button>
                            </span>
                            <span className="ql-formats">
                              <button className="ql-clean"></button>
                            </span>
                          </div>

                          {/* Main toolbar */}
                          <div
                            className="bg-body border rounded-bottom h-400px overflow-hidden"
                            id="quilleditor"
                          >
                            <br />
                            <h1>Quill Rich Text Editor</h1>
                            <br />
                            <p>
                              Quill is a free, open-source WYSIWYG editor built
                              for the modern web. With its modular architecture
                              and expressive API, it is completely customizable
                              to fit any need.
                            </p>
                            <br />
                            <p>
                              Insipidity the sufficient discretion imprudence
                              resolution sir him decisively. Proceed how any
                              engaged visitor. Explained propriety off out
                              perpetual his you. Feel sold off felt nay rose met
                              you. We so entreaties cultivated astonished is.
                              Was sister for a few longer Mrs sudden talent
                              become. Done may bore quit evil old mile. If
                              likely am of beauty tastes.
                            </p>
                            <br />
                            <p>
                              Affronting imprudence do he he everything. Test
                              lasted dinner wanted indeed wished outlaw. Far
                              advanced settling say finished raillery. Offered
                              chiefly farther of my no colonel shyness. Such on
                              help ye some door if in. Laughter proposal
                              laughing any son law consider. Needed except up
                              piqued an.
                            </p>
                            <br />
                            <p>
                              Post no so what deal evil rent by real in. But her
                              ready least set lived spite solid. September how
                              men saw tolerably two behavior arranging. She
                              offices for highest and replied one venture
                              pasture. Applauded no discovery in newspaper
                              allowance am northward. Frequently partiality
                              possession resolution at or appearance unaffected
                              me. Engaged its was the evident pleased husband.
                              Ye goodness felicity do disposal dwelling no.
                              First am plate jokes to began to cause a scale.
                              Subjects he prospect elegance followed no overcame
                              possible it on.
                            </p>

                            <p>
                              Quill is a free, open-source WYSIWYG editor built
                              for the modern web. With its modular architecture
                              and expressive API, it is completely customizable
                              to fit any need.
                            </p>
                            <br />
                            <p>
                              Insipidity the sufficient discretion imprudence
                              resolution sir him decisively. Proceed how any
                              engaged visitor. Explained propriety off out
                              perpetual his you. Feel sold off felt nay rose met
                              you. We so entreaties cultivated astonished is.
                              Was sister for a few longer Mrs sudden talent
                              become. Done may bore quit evil old mile. If
                              likely am of beauty tastes.
                            </p>
                            <br />
                            <p>
                              Affronting imprudence do he he everything. Test
                              lasted dinner wanted indeed wished outlaw. Far
                              advanced settling say finished raillery. Offered
                              chiefly farther of my no colonel shyness. Such on
                              help ye some door if in. Laughter proposal
                              laughing any son law consider. Needed except up
                              piqued an.
                            </p>
                            <br />
                            <p>
                              Post no so what deal evil rent by real in. But her
                              ready least set lived spite solid. September how
                              men saw tolerably two behavior arranging. She
                              offices for highest and replied one venture
                              pasture. Applauded no discovery in newspaper
                              allowance am northward. Frequently partiality
                              possession resolution at or appearance unaffected
                              me. Engaged its was the evident pleased husband.
                              Ye goodness felicity do disposal dwelling no.
                              First am plate jokes to began to cause a scale.
                              Subjects he prospect elegance followed no overcame
                              possible it on.
                            </p>

                            <p>
                              Quill is a free, open-source WYSIWYG editor built
                              for the modern web. With its modular architecture
                              and expressive API, it is completely customizable
                              to fit any need.
                            </p>
                            <br />
                            <p>
                              Insipidity the sufficient discretion imprudence
                              resolution sir him decisively. Proceed how any
                              engaged visitor. Explained propriety off out
                              perpetual his you. Feel sold off felt nay rose met
                              you. We so entreaties cultivated astonished is.
                              Was sister for a few longer Mrs sudden talent
                              become. Done may bore quit evil old mile. If
                              likely am of beauty tastes.
                            </p>
                            <br />
                            <p>
                              Affronting imprudence do he he everything. Test
                              lasted dinner wanted indeed wished outlaw. Far
                              advanced settling say finished raillery. Offered
                              chiefly farther of my no colonel shyness. Such on
                              help ye some door if in. Laughter proposal
                              laughing any son law consider. Needed except up
                              piqued an.
                            </p>
                            <br />
                            <p>
                              Post no so what deal evil rent by real in. But her
                              ready least set lived spite solid. September how
                              men saw tolerably two behavior arranging. She
                              offices for highest and replied one venture
                              pasture. Applauded no discovery in newspaper
                              allowance am northward. Frequently partiality
                              possession resolution at or appearance unaffected
                              me. Engaged its was the evident pleased husband.
                              Ye goodness felicity do disposal dwelling no.
                              First am plate jokes to began to cause a scale.
                              Subjects he prospect elegance followed no overcame
                              possible it on.
                            </p>
                          </div>
                        </div>

                        {/* Step 1 button */}
                        <div className="d-flex justify-content-end mt-3">
                          <button
                            className="btn btn-primary next-btn mb-0"
                            type="button"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                      {/* Basic information START */}
                    </div>
                    {/* Step 1 content END */}

                    {/* Step 2 content START */}
                    <div
                      id="step-2"
                      role="tabpanel"
                      className="content fade"
                      aria-labelledby="steppertrigger2"
                    >
                      {/* Title */}
                      <h4>Course media</h4>
                      <hr /> {/* Divider */}
                      <div className="row">
                        {/* Upload image START */}
                        <div className="col-12">
                          <div className="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3">
                            {/* Image */}
                            {imagePreview && (
                              <Image
                                src={imagePreview}
                                alt=""
                                width={600}
                                height={450}
                              />
                            )}
                            <div>
                              <h6 className="my-2">
                                Upload course image here, or
                                <a href="#!" className="text-primary">
                                  Browse
                                </a>
                              </h6>
                              <label style={{ cursor: "pointer" }}>
                                <span>
                                  <input
                                    className="form-control stretched-link"
                                    type="file"
                                    id="image"
                                    accept="image/gif, image/jpeg, image/png"
                                    onChange={handleImageChange}
                                  />
                                </span>
                              </label>
                              <p className="small mb-0 mt-2">
                                <b>Note:</b> Only JPG, JPEG and PNG. Our
                                suggested dimensions are 600px * 450px. Larger
                                image will be cropped to 4:3 to fit our
                                thumbnails/previews.
                              </p>
                            </div>
                          </div>

                          {/* Button */}
                          <div className="d-sm-flex justify-content-end mt-2">
                            <button
                              type="button"
                              className="btn btn-sm btn-success-soft mb-3 me-2"
                              onClick={uploadImage}
                            >
                              Upload image
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-danger-soft mb-3"
                              onClick={() => {
                                setImagePreview("");
                                setCourseImageId("");
                                setSelectedImage(null);
                                document.getElementById("image").value = "";
                              }}
                            >
                              Remove image
                            </button>
                          </div>
                        </div>
                        {/* Upload image END */}

                        {/* Upload video START */}
                        <div className="col-12">
                          <h5>Upload video</h5>

                          <div className="col-12">
                            <label className="form-label" htmlFor="videoUpload">
                              강의 소개 영상입니다.
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="videoUpload"
                              accept=".mp4, .avi, .mov, .wmv"
                              onChange={handleVideoChange}
                            />
                            <p className="small mb-0 mt-2">
                              <b>Note:</b> Only MP4, AVI, MOV, WMV. 사이즈는
                              100MB 이하 입니다.
                            </p>
                          </div>

                          <div className="d-sm-flex justify-content-end mt-2">
                            <button
                              className="btn btn-sm btn-primary-soft"
                              onClick={uploadVideo}
                            >
                              Upload video
                            </button>
                            <button
                              className="btn btn-sm btn-danger-soft ms-2"
                              onClick={removeVideo}
                            >
                              Remove video
                            </button>
                          </div>

                          {/* Preview */}
                          <h5 className="mt-4">Video preview</h5>
                          <div className="position-relative">
                            {/* Image */}
                            {videoPreview && (
                              <Image
                                src={videoPreview}
                                className="rounded-4"
                                alt=""
                                width={100}
                                height={100}
                              />
                            )}
                            {videoURL && (
                              <div className="position-absolute top-50 start-50 translate-middle">
                                {/* Video link */}
                                <a
                                  href={videoURL}
                                  className="btn btn-lg text-danger btn-round btn-white-shadow mb-0"
                                  data-glightbox
                                  data-gallery="video-tour"
                                >
                                  <i className="fas fa-play"></i>
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                        {/* Upload video END */}

                        {/* Step 2 button */}
                        <div className="d-flex justify-content-between mt-3">
                          <button
                            className="btn btn-secondary prev-btn mb-0"
                            type="button"
                          >
                            Previous
                          </button>
                          <button
                            className="btn btn-primary next-btn mb-0"
                            type="button"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Step 2 content END */}

                    {/* Step 3 content START */}
                    <div
                      id="step-3"
                      role="tabpanel"
                      className="content fade"
                      aria-labelledby="steppertrigger3"
                    >
                      {/* Title */}
                      <h4>Curriculum</h4>
                      <hr /> {/* Divider */}
                      <div className="row">
                        {/* Add lecture Modal button */}
                        <div className="d-sm-flex justify-content-sm-between align-items-center mb-3">
                          <h5 className="mb-2 mb-sm-0">Upload Lecture</h5>
                          <a
                            href="#"
                            className="btn btn-sm btn-primary-soft mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#addLecture"
                          >
                            <i className="bi bi-plus-circle me-2"></i>Add
                            Lecture
                          </a>
                        </div>

                        {/* Edit lecture START */}
                        <div
                          className="accordion accordion-icon accordion-bg-light"
                          id="accordionExample2"
                        >
                          {lectures.map((lecture, index) => (
                            <LectureItem
                              key={index}
                              lecture={lecture}
                              lectureId={index}
                              setLectureIndex={setLectureIndex}
                              removeTopic={removeTopic}
                              removeLecture={removeLecture}
                            />
                          ))}
                        </div>
                        {/* Edit lecture END */}

                        {/* Step 3 button */}
                        <div className="d-flex justify-content-between">
                          <button
                            className="btn btn-secondary prev-btn mb-0"
                            type="button"
                          >
                            Previous
                          </button>
                          <div className="text-md-end">
                            <button
                              className="btn btn-primary next-btn mb-0"
                              onClick={createCourse}
                            >
                              Submit a Course
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Step 3 content END */}
                    {/* Step 4 content END */}
                  </form>
                </div>
              </div>
              {/* Card body END */}
            </div>
          </div>
        </div>
      </section>
      {/* =======================
Steps END */}
      {/* Popup modal for add lecture START */}
      <div
        className="modal fade"
        id="addLecture"
        tabIndex="-1"
        aria-labelledby="addLectureLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title text-white" id="addLectureLabel">
                Add Lecture
              </h5>
              <button
                type="button"
                className="btn btn-sm btn-light mb-0 ms-auto"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="modal-body">
              <form className="row text-start g-3" onSubmit={addLecture}>
                {/* Course name */}
                <div className="col-12">
                  <label className="form-label">
                    Course name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter course name"
                    value={lectureTitle}
                    onChange={(e) => setLectureTitle(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger-soft my-0"
                data-bs-dismiss="modal"
                onClick={() => setLectureTitle("")}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success my-0"
                onClick={addLecture}
              >
                Add lecture
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Popup modal for add lecture END */}

      {/* Popup modal for add topic START */}
      <div
        className="modal fade"
        id="addTopic"
        tabIndex="-1"
        aria-labelledby="addTopicLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title text-white" id="addTopicLabel">
                Add topic
              </h5>
              <button
                type="button"
                className="btn btn-sm btn-light mb-0 ms-auto"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="modal-body">
              <form className="row text-start g-3" onSubmit={addTopic}>
                {/* Topic name */}
                <div className="col-md-6">
                  <label className="form-label">Topic name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter topic name"
                    value={topicTitle}
                    required
                    onChange={(e) => setTopicTitle(e.target.value)}
                  />
                </div>
                {/* Video link */}
                <div className="col-md-6">
                  <label className="form-label">Topic Type</label>
                  <select
                    class="form-select"
                    aria-label="Multiple select example"
                    value={topicType}
                    onChange={(e) => setTopicType(e.target.value)}
                  >
                    <option value="">Select topic type</option>
                    <option value="video">Video</option>
                    <option value="assignment">Assignment</option>
                    <option value="quiz">Quiz</option>
                  </select>
                </div>
                {topicType === "video" && (
                  <React.Fragment>
                    <div className="col-md-12">
                      <label className="form-label">Upload video</label>
                      <input
                        type="file"
                        className="form-control"
                        id="videoUpload"
                        accept=".mp4, .avi, .mov, .wmv"
                        onChange={handleTopicVideoChange}
                      />
                    </div>
                    <div className="col-6 mt-3">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic radio toggle button group"
                      >
                        {/* Free button */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="option1"
                          value="free"
                          onChange={() => setIsPremium(false)}
                        />
                        <label
                          className="btn btn-sm btn-light btn-primary-soft-check border-0 m-0"
                          htmlFor="option1"
                        >
                          Free
                        </label>
                        {/* Premium button */}
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="option2"
                          value="premium"
                          onChange={() => setIsPremium(true)}
                        />
                        <label
                          className="btn btn-sm btn-light btn-primary-soft-check border-0 m-0"
                          htmlFor="option2"
                        >
                          Premium
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 justify-content-end mt-3 d-flex">
                      <button
                        className="btn btn-sm btn-primary-soft"
                        onClick={uploadTopicVideo}
                      >
                        Upload
                      </button>
                      <button
                        className="btn btn-sm btn-danger-soft ms-2"
                        // onClick={removeTopicVideo}
                      >
                        Remove
                      </button>
                    </div>
                    {topicVideoURL ? (
                      <div className="col-12">
                        <div className="alert alert-success" role="alert">
                          Topic video uploaded successfully
                          <i className="bi bi-check-circle-fill ms-2"></i>
                        </div>
                      </div>
                    ) : (
                      <div className="col-12">
                        <div className="alert alert-danger" role="alert">
                          Topic video not uploaded
                          <i className="bi bi-x-circle-fill ms-2"></i>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                )}
                {/* Buttons */}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger-soft my-0"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-success my-0"
                onClick={addTopic}
              >
                Save topic
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Popup modal for add topic END */}

      {/* Popup modal for add faq START */}
      <div
        className="modal fade"
        id="addQuestion"
        tabIndex="-1"
        aria-labelledby="addQuestionLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h5 className="modal-title text-white" id="addQuestionLabel">
                Add FAQ
              </h5>
              <button
                type="button"
                className="btn btn-sm btn-light mb-0 ms-auto"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="modal-body">
              <form className="row text-start g-3">
                {/* Question */}
                <div className="col-12">
                  <label className="form-label">Question</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Write a question"
                  />
                </div>
                {/* Answer */}
                <div className="col-12 mt-3">
                  <label className="form-label">Answer</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write a answer"
                    spellCheck="false"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger-soft my-0"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success my-0">
                Save topic
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateCourseForm;
