import Sidebar from "../components/Sidebar";
import Center from "../components/Center";

import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />

      </main>

      <div></div>
    </div>
  )
}

export default Home
