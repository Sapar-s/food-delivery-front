import Layout from "./(user)/layout";
import { HomePage } from "./_components/userComponents/HomePage";

export default function Home() {
  return (
    <Layout>
      <div className="bg-[#404040]  w-screen flex  ">
        <HomePage />
      </div>
    </Layout>
  );
}
