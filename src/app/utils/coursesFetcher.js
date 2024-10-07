const api = process.env.REACT_APP_API_URL;

export async function fetchCourses() {
  const res = await fetch(`${api}/courses/`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}
