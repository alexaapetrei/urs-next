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
}

interface QuestionsState {
  state: state;
  setState: any;
}

function AppProvider({ children }) {
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
      let intrebariRamase = catego[loadState.categoria].filter(
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
}
export const AppContext = createContext<QuestionsState>(null);
export default AppProvider;
