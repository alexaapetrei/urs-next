import { useEffect, useState, useContext } from "react";
import { AppContext } from "../components/context";
import catego from "../data/catego";

const CatSelector = () => {
  const { state, setState } = useContext(AppContext);

  function clicked(thing: string) {
    let lolState = state[thing];
    let curr_corecte = lolState?.curr_corecte || [];
    let curr_gresite = lolState?.curr_gresite || [];
    let done = [...curr_corecte, ...curr_gresite];
    let intrebari = catego[thing].filter((f) => !done.includes(f.id));
    setState({
      ...state,
      categoria: thing,
      intrebari: intrebari,
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
