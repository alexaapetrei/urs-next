import { useEffect, useState, useContext } from "react";
import { AppContext } from "../components/context";
import catego from "../data/catego";
import CatSelector from "../components/catselector";
const Cauta = () => {
  const { state, setState } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [found, setFound] = useState([]);

  const handleUpdate = (e) => {
    let thing = e.target.value;
    setSearch(thing.toLowerCase());
  };

  useEffect(() => {
    let filtered = catego[state.categoria].filter((g) =>
      g.q.toLowerCase().includes(search)
    );

    setFound(filtered.splice(0, 10));
  }, [search, state.categoria]);

  return (
    <>
      <CatSelector />
      <div className="field">
        <p className="control">
          <input
            className="input"
            type="text"
            onChange={(e) => handleUpdate(e)}
            placeholder="Cauta intreabrea aici"
          />
        </p>
      </div>
      {found.length == 0 && (
        <>
          <h1 className="title">Could not find what you searched for</h1>
          <img src="/img/happy-stress.svg" width="300" alt="UrsSur" />
        </>
      )}
      {found.length > 0 &&
        found.map((s) => {
          return (
            <>
              <div key={s.id} className="card">
                <div className="card-header">
                  <h2 className="card-header-title"> {s.q} </h2>
                </div>
                <div className="card-content">
                  <div className="columns">
                    {s.i > 0 && (
                      <div className="column is-4">
                        <figure className="image">
                          <img src={`/img/${state.categoria}/${s.i}.jpg`}></img>
                        </figure>
                      </div>
                    )}
                    <div className="column">
                      <div className="center-vertical">
                        <div className="ans">
                          <span className="letter">a</span>
                          <span className="text">{s.a}</span>
                        </div>
                        <div className="ans">
                          <span className="letter">b</span>
                          <span className="text">{s.b}</span>
                        </div>
                        <div className="ans">
                          <span className="letter">c</span>
                          <span className="text">{s.c}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item correct">
                    <span className="text">Varianta corecta : {s.v} </span>
                  </p>
                </footer>
              </div>
              <br />
            </>
          );
        })}
    </>
  );
};

export default Cauta;
