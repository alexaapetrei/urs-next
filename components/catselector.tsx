import { useEffect, useState, useContext } from "react";
import { AppContext } from "../components/context";
import catego from "../data/catego";

const CatSelector = () => {
  const { state, setState } = useContext(AppContext);

  function clicked(thing: string) {
    setState({
      ...state,
      categoria: thing,
      intrebari: catego[thing],
    });
  }

  return (
    <div className="catsel tabs is-toggle is-fullwidth is-medium">
      <ul>
        {["a", "b", "c", "d", "e", "r"].map((cat) => {
          return (
            <li
              className={state.categoria == cat ? "is-active" : null}
              key={cat}
            >
              <a onClick={() => clicked(cat)}>
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
