import { cookies } from "next/headers";
import CreateCourseForm from "../components/CreateCourseForm";
import { notFound } from "next/navigation";
import { jwtDecode } from "jwt-decode";

export default async function CreateCoursePage() {
  const cookie = await cookies();
  const access_token = cookie.get("access_token");
  if (!access_token) {
    return notFound();
  }

  const decodedToken = jwtDecode(access_token.value); // access_token이 존재할 경우 디코드합니다.

  if (decodedToken.exp < Date.now() / 1000) {
    return notFound(); // 토큰이 만료되었을 경우 404 페이지로 리다이렉트합니다.
  }

  if (decodedToken.is_staff || decodedToken.is_superuser) {
    return <CreateCourseForm />; // 필요한 권한이 있을 경우 폼을 반환합니다.
  }

  return notFound();
}
