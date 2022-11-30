import { useContext } from "react";
import { AppContext } from "../components/context";
import catego from "../data/catego";

const CatSelector = () => {
  const { state, setState } = useContext(AppContext);

  function clicked(categoria: string) {
    let cate = state[categoria];
    let corecte = cate?.corecte || [];
    let gresite = cate?.gresite || [];
    let done = [...corecte, ...gresite];
    let intrebari = catego[categoria].filter((f) => !done.includes(f.id));
    setState({
      ...state,
      categoria: categoria,
      intrebari: intrebari,
    });
  }

  return (
    <div className="catsel tabs is-toggle is-fullwidth is-medium">
      <ul>
        {["a", "b", "c", "d", "e", "r", "t"].map((cat) => {
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
