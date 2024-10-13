export async function fetchCurriculums(
  api,
  page,
  category,
  curriculumLevel,
  search,
  ordering
) {
  const url = `${api}/curriculums/`;
  const params = new URLSearchParams();
  if (page) {
    params.set("page", page);
  }
  if (category) {
    params.set("category", category);
  }
  if (curriculumLevel) {
    params.set("curriculum_level", curriculumLevel);
  }
  if (search) {
    params.set("search", search);
  }
  if (ordering) {
    params.set("ordering", ordering);
  }
  const res = await fetch(`${url}?${params}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}
