import { Welcome } from "./components/Welcome";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <>
      <main
        className="
        h-svh
        justify-between 
        "
      >
        <Welcome />
        <Projects />
      </main>
    </>
  );
}
