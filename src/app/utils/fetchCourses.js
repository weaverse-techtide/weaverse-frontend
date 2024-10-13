export async function fetchCourses(
  api,
  page,
  category,
  courseLevel,
  search,
  ordering
) {
  let url = `${api}/courses/`;
  const params = new URLSearchParams();
  if (page) {
    params.set("page", page);
  }
  if (category) {
    params.set("category", category);
  }
  if (courseLevel) {
    params.set("course_level", courseLevel);
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
