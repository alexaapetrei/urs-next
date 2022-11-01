import CatSelector from "../components/catselector";
import { useContext } from "react";
import { AppContext } from "../components/context";
import Link from "next/link";

const Home = ({ data }) => {
  const { state, setState } = useContext(AppContext);
  const { coco, loco, lol222, da } = data;
  console.log("Da fak,    ", data);
  return (
    <>
      <h1 className=" text-4xl font-bold text-neutral-700 pb-7 ">
        Selecteaza Categoria : Momentan esti in {state.categoria} {coco} {loco}{" "}
        {lol222} {da}
      </h1>
      <CatSelector />
      <br />
      <Link href="/chestionar" className="flex justify-center tailBtn">
        Spre Chestionar
      </Link>
    </>
  );
};

export async function getStaticProps() {
  let data = {
    coco: "lamb",
    loco: "Cow",
    lol222: "BOOO",
    da: "fak",
  };
  return {
    props: { data },
  };
}

export default Home;
