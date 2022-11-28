import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import catego from "../data/catego";

interface state {
  curr_corecte: any;
  curr_gresite: any;
  goal: number;
  categoria: string;
  intrebari: any;
  [key: string]: any;
}

interface QuestionsState {
  state: state;
  setState: any;
  categoria: string;
}

function AppProvider({ children }) {
  const init = {
    goal: 26,
    a: { curr_gresite: [], curr_corecte: [] },
    b: { curr_gresite: [], curr_corecte: [] },
    c: { curr_gresite: [], curr_corecte: [] },
    d: { curr_gresite: [], curr_corecte: [] },
    e: { curr_gresite: [], curr_corecte: [] },
    r: { curr_gresite: [], curr_corecte: [] },
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
}
export const AppContext = createContext<QuestionsState>(null);
export default AppProvider;
