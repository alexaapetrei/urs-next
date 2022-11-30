import { createContext, useState, useEffect } from "react";
import catego from "../data/catego";

interface state {
  corecte?: any;
  gresite?: any;
  goal: number;
  categoria?: string;
  intrebari: any;
  [key: string]: any;
}

interface QuestionsState {
  state: state;
  setState: any;
  categoria?: string;
}

function AppProvider({ children }) {
  const init = {
    goal: 26,
    a: { gresite: [], corecte: [] },
    b: { gresite: [], corecte: [] },
    c: { gresite: [], corecte: [] },
    d: { gresite: [], corecte: [] },
    e: { gresite: [], corecte: [] },
    r: { gresite: [], corecte: [] },
    t: { gresite: [], corecte: [] },
    intrebari: [...catego["b"]],
  };
  const [state, setState] = useState(init);
  useEffect(() => {
    let loadState = init;
    if (localStorage.getItem("persistedState")) {
      loadState = JSON.parse(localStorage.getItem("persistedState"));
    }
    setState((prev) => {
      return { ...prev, ...loadState };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (JSON.stringify(state) != JSON.stringify(init))
      localStorage.setItem("persistedState", JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}
export const AppContext = createContext<QuestionsState>(null);
export default AppProvider;
