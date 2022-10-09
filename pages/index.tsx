import CatSelector from "../components/catselector";
import { useContext } from "react";
import { AppContext } from "../components/context";
import Link from "next/link";

const Home = () => {
  const { state, setState } = useContext(AppContext);
  return (
    <>
      <h1 className=" text-4xl font-bold text-neutral-700 pb-7 ">
        Selecteaza Categoria : Momentan esti in {state.categoria}
      </h1>
      <CatSelector />
      <br />
      <Link href="/chestionar">
        <a className="flex justify-center tailBtn">Spre Chestionar</a>
      </Link>
    </>
  );
};

export default Home;
