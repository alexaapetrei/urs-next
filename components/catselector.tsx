import { useEffect, useState, useContext } from "react";
import { AppContext } from "../components/context";
import catego from "../data/catego";

const CatSelector = () => {
  const { state, setState } = useContext(AppContext);
  const [categoria, setCategoria] = useState(state.categoria);
  function clicked(thing: string) {
    setCategoria(thing);
    setState({
      ...state,
      categoria: thing,
      intrebari: catego[thing],
      intrebare: catego[thing][0],
    });
  }

  return (
    <div className="catsel tabs is-toggle is-fullwidth is-medium">
      <ul>
        {["a", "b", "c", "d", "e", "r"].map((cat) => {
          return (
            <li className={categoria == cat ? "is-active" : null} key={cat}>
              <a href="#" onClick={() => clicked(cat)}>
                <span>{cat.toUpperCase()}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CatSelector;
