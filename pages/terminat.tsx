import CatSelector from "../components/catselector";
import { useContext } from "react";
import { AppContext } from "../components/context";
import Link from "next/link";

const Terminat = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <>
      <h1 className=" text-4xl font-bold text-blue-600 pb-7 ">
        Gata my dude, ai terminat - {state.categoria} - Nu mai ai intrebari
      </h1>
      <CatSelector />
      <br />
      <Link href="/chestionar" className="flex justify-center tailBtn">
        Spre Chestionar
      </Link>
    </>
  );
};

export default Terminat;
