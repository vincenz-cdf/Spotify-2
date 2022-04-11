import { getSession } from "next-auth/react"
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";

export default function Home() {
  return (
      <div className="bg-black h-screen overflow-hidden">
          <main className="flex">
              <Sidebar />
              <Center />
          </main>

          <div></div>
      </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
      props: {
          session,
      },
  };
}