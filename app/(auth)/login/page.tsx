import FormLogin from "@/components/form-login";

const LoginPage = ({
  searchParams,
}: {
  searchParams: { verified: string };
}) => {
  const isVerified = searchParams.verified === "true";

  return <FormLogin isVerified={isVerified} />;
};
export default LoginPage;
