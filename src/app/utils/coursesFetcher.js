const api = process.env.NEXT_PUBLIC_API_URL;

export async function fetchCourses(
  page,
  category,
  courseLevel,
  search,
  ordering
) {
  let url = `${api}/courses/?page=${page}`;
  if (category) {
    url += `&category=${category}`;
  }
  if (courseLevel) {
    url += `&course_level=${courseLevel}`;
  }
  if (search) {
    url += `&search=${search}`;
  }
  if (ordering) {
    url += `&ordering=${ordering}`;
  }
  console.log(url);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}
