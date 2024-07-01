import { auth } from "@/auth";
import LogoutButton from "@/components/logout-button";

const AdminPage = async () => {
  const session = await auth();

  console.log(session);

  if (session?.user?.role !== "admin") {
    return <div>You are not admin</div>;
  }

  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <LogoutButton />
    </div>
  );
};
export default AdminPage;
