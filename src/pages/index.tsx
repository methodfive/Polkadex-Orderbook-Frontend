import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  router.push("login");

  return <div />;
}

export default Home;
