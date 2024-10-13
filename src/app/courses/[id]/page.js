import Image from "next/image";
import CourseDetail from "../components/CourseDetail";
import { notFound } from "next/navigation";
import AddToCart from "../components/AddToCart";

export default async function CourseDetailPage({ params }) {
  const currentParams = await params;

  const course = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/courses/${currentParams.id}`
  )
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error:", error);
    });

  if (!course) {
    return notFound();
  }

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Seoul",
  };
  const updateAt = new Date(course.updated_at).toLocaleDateString(
    "ko-KR",
    options
  );
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(course.price);
  const formattedSkillLevel =
    course.skill_level.charAt(0).toUpperCase() + course.skill_level.slice(1);
  const totalDuration = course.lectures.reduce(
    (acc, lecture) =>
      acc +
      lecture.topics
        .map((topic) => topic.video_duration)
        .reduce((acc, duration) => acc + duration, 0),
    0
  );
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
    <main>
      {/* =======================
Page content START */}
      <section className="pt-3 pt-xl-5">
        <div className="container" data-sticky-container>
          <div className="row g-4">
            {/* Main content START{ */}
            <div className="col-xl-8">
              <div className="row g-4">
                {/* Title START{ */}
                <div className="col-12">
                  {/* Title{ */}
                  <h2>{course.title}</h2>
                  <p>{course.short_description}</p>
                  {/* Content{ */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0">
                      <i className="fas fa-signal me-2"></i>
                      {course.skill_level}
                    </li>
                    <li className="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0">
                      <i className="bi bi-patch-exclamation-fill me-2"></i>
                      {updateAt}
                    </li>
                  </ul>
                </div>
                {/* Title END{ */}

                {/* Image and video{ */}
                <div className="col-12 position-relative">
                  <div className="video-player rounded-3">
                    <video controls crossOrigin="anonymous" playsInline>
                      <source
                        src={course.video_url}
                        type="video/mp4"
                        size="360"
                      />
                    </video>
                  </div>
                </div>

                {/* About course START{ */}
                <div className="col-12">
                  <div className="card border">
                    {/* Card header START{ */}
                    <div className="card-header border-bottom">
                      <h3 className="mb-0">Course description</h3>
                    </div>
                    {/* Card body START{ */}
                    <div
                      className="card-body"
                      id="staticEditor"
                      data-delta={course.description}
                    ></div>
                    {/* Card body START{ */}
                  </div>
                </div>
                {/* About course END{ */}

                {/* Curriculum START{ */}
                <CourseDetail course={course} />
                {/* Curriculum END{ */}
              </div>
            </div>
            {/* Main content END{ */}

            {/* Right sidebar START{ */}
            <div className="col-xl-4">
              <div data-sticky data-margin-top="80" data-sticky-for="768">
                <div className="row g-4">
                  <div className="col-md-6 col-xl-12">
                    {/* Course info START{ */}
                    <div className="card card-body border p-4">
                      {/* Price and share button{ */}
                      <div className="d-flex justify-content-end align-items-center">
                        {/* Price{ */}
                        <h3 className="fw-bold mb-0 me-2">
                          {formattedPrice} 원
                        </h3>
                      </div>

                      {/* Buttons{ */}
                      <div className="mt-3 d-grid">
                        <AddToCart id={course.id} />
                        <a href="#" className="btn btn-success">
                          Buy now
                        </a>
                      </div>
                      {/* Divider{ */}
                      <hr />

                      {/* Title{ */}
                      <h5 className="mb-3">This course includes</h5>
                      <ul className="list-group list-group-borderless border-0">
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-fw fa-book-open text-primary"></i>
                            Lectures
                          </span>
                          <span>{course.lectures.length}</span>
                        </li>
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-fw fa-clock text-primary"></i>
                            Duration
                          </span>
                          <span>{formatDuration(totalDuration)}</span>
                        </li>
                        <li className="list-group-item px-0 d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-fw fa-signal text-primary"></i>
                            Skills
                          </span>
                          <span>{formattedSkillLevel}</span>
                        </li>
                      </ul>
                      {/* Divider{ */}
                      <hr />

                      {/* Instructor info{ */}
                      <div className="d-sm-flex align-items-center">
                        {/* Avatar image{ */}
                        <div className="avatar avatar-xl">
                          <Image
                            src={course.author_image}
                            alt="avatar"
                            width={100}
                            height={100}
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="ms-sm-3 mt-2 mt-sm-0">
                          <h5 className="mb-0">
                            <a href={"/users/" + course.author_id}>
                              {course.author_name}
                            </a>
                          </h5>
                          <p className="mb-0 small">
                            {course.author_introduction}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Course info END{ */}
                  </div>
                </div>
                {/* Row End{ */}
              </div>
            </div>
            {/* Right sidebar END{ */}
          </div>
          {/* Row END{ */}
        </div>
      </section>
      {/* =======================
Page content END{ */}
    </main>
  );
}
