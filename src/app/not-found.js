import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Image
              src="/assets/images/element/error404-01.svg"
              className="h-200px h-md-400px mb-4"
              alt=""
              width={400}
              height={400}
            />
            <h1 className="display-1 text-danger mb-0">404</h1>
            <h2>Oh no, 페이지를 찾을 수 없습니다!</h2>
            <p className="mb-4">
              무언가 잘못되었거나 이 페이지가 더 이상 존재하지 않습니다.
            </p>
            <Link href="/" className="btn btn-primary mb-0">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
