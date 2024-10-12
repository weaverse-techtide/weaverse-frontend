import { fetchCurriculums } from "../utils/fetchCurriculums";
import { notFound } from "next/navigation";
import Curriculums from "../components/Curriculums";

export default async function CurriculumsPage({ searchParams }) {
  const page = searchParams.page || 1;
  const category = searchParams.category || "";
  const skillLevel = searchParams.skill_level || "";
  const search = searchParams.search || "";
  const ordering = searchParams.ordering || "";

  let initialCurriculums = [];
  try {
    initialCurriculums = await fetchCurriculums(
      page,
      category,
      skillLevel,
      search,
      ordering
    );
    console.log(initialCurriculums);
  } catch (error) {
    return notFound();
  }

  return (
    <main>
      {/* =======================
Page Banner START */}
      <section
        className="bg-dark align-items-center d-flex"
        style={{
          background:
            "url(assets/images/pattern/04.png) no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        {/* Main banner background image */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Title */}
              <h1 className="text-white">
                {search || skillLevel || category ? (
                  <span>
                    {search && <span className="text-white">{search} </span>}
                    {skillLevel && (
                      <span className="text-warning">{skillLevel} </span>
                    )}
                    {category && (
                      <span className="text-success">{category} </span>
                    )}
                  </span>
                ) : (
                  "전체 커리큘럼 목록"
                )}
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* =======================
Page Banner END */}

      {/* =======================
Page content START */}
      <Curriculums initialCurriculums={initialCurriculums} />
      {/* =======================
Page content END */}
    </main>
  );
}
