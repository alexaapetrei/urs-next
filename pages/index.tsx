import CatSelector from "../components/catselector";
import { useContext } from "react";
import { AppContext } from "../components/context";
import Link from "next/link";

const Home = () => {
  const { state, setState } = useContext(AppContext);
  return (
    <>
      <h1 class="title">Selecteaza Categoria : Momentan esti in -> {state.categoria}</h1>
      <CatSelector />
      
      <Link clasName="button" href="/chestionar">
        <a className="is-success is-large button">
        Spre Chestionar
        </a>
      </Link>
    </>
  );
};

export default Home;
