import Courses from "../components/Courses";
import { fetchCourses } from "../utils/fetchCourses";
import { notFound } from "next/navigation";
import CourseFilter from "../components/CourseFilter";

export default async function CoursesPage({ searchParams }) {
  const query = await searchParams;
  const page = query.page;
  const category = query.category;
  const courseLevel = query.course_level;
  const search = query.search;
  const ordering = query.ordering;

  let initialCourses = [];
  try {
    initialCourses = await fetchCourses(
      page,
      category,
      courseLevel,
      search,
      ordering
    );
  } catch (error) {
    return notFound();
  }

  return (
    <main>
      {/* =======================
Page Banner START */}
      <section
        className="bg-blue align-items-center d-flex"
        style={{
          background:
            "url(assets/images/pattern/04.png) no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Title */}
              <h1 className="text-white">
                {search || courseLevel || category ? (
                  <span>
                    {search && <span className="text-white">{search} </span>}
                    {courseLevel && (
                      <span className="text-warning">{courseLevel} </span>
                    )}
                    {category && (
                      <span className="text-success">{category} </span>
                    )}
                  </span>
                ) : (
                  "전체 강의 목록"
                )}
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* =======================
Page Banner END */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Main content START */}
            <Courses initialCourses={initialCourses} />
            {/* Main content END */}

            {/* Right sidebar START */}
            <CourseFilter searchParams={query} />
            {/* Right sidebar END */}
          </div>
          {/* Row END */}
        </div>
      </section>
      {/* =======================
Newsletter END */}
    </main>
  );
}
