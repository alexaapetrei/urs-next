import { createContext, useState, useEffect } from "react";
import catego from "../data/catego";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const init = {
    curr_corecte: [],
    curr_gresite: [],
    goal: 26,
    categoria: "b",
    intrebari: [...catego["b"]],
  };
  const [state, setState] = useState(init);

  useEffect(() => {
    let loadState = init;
    if (localStorage.getItem("persistedState")) {
      loadState = JSON.parse(localStorage.getItem("persistedState"));
      let done = loadState.curr_corecte.concat(loadState.curr_gresite);
      let intrebariRamase = loadState.intrebari.filter(
        (i) => !done.includes(i.id)
      );
      loadState = { ...loadState, intrebari: intrebariRamase };
    }
    setState(loadState);
  }, []);

  useEffect(() => {
    if (JSON.stringify(state) != JSON.stringify(init))
      localStorage.setItem("persistedState", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
