import PaymentButton from "./components/PaymentButton";

export default async function PaymentPage({ searchParams }) {
  const query = await searchParams;
  const result = query.result;
  const pg_token = query.pg_token;

  return <PaymentButton result={result} pg_token={pg_token} />;
}
