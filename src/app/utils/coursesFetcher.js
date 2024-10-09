const api = process.env.NEXT_PUBLIC_API_URL;

export async function fetchCourses() {
  const res = await fetch(`${api}/courses/`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}
