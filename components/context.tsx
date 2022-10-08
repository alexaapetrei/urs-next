import { createContext, useState, useEffect } from "react";
import catego from "../data/catego";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const init = {
    curr_corecte: [],
    curr_gresite: [],
    goal: 26,
    categoria: "b",
    intrebari: { ...catego["b"] },
    intrebare: { ...catego["b"][0] },
    curenta: 0,
  };
  const [state, setState] = useState(init);

  useEffect(() => {
    let loadState;
    try {
      if (!localStorage.getItem("persistedState")) throw "Oh crap";
      loadState = JSON.parse(localStorage.getItem("persistedState"));
    } catch (err) {
      loadState = init;
      console.log("No cat is stored here : ", err);
    }
    setState(loadState);
  }, []);

  useEffect(() => {
    if (JSON.stringify(state) != localStorage.getItem("persistedState"))
      localStorage.setItem("persistedState", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
