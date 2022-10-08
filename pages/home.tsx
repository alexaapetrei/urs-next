import CatSelector from "../components/catselector";
import { useContext } from "react";
import { AppContext } from "../components/context";

const Home = () => {
  const { state, setState } = useContext(AppContext);
  return (
    <>
      <h1>Hello there you are in Categotia : {state.categoria}</h1>
      <CatSelector />
    </>
  );
};

export default Home;
