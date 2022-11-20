/* eslint-disable @next/next/no-img-element */
import Ans from "../components/ans";
import catego from "../data/catego";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../components/context";
import Ansmsg from "../components/ansMsg";
let curr_corecte = [];
let curr_gresite = [];
let goal = 26;

const Chestionar = () => {
  const { state, setState } = useContext(AppContext);

  let [answers, setAnswers] = useState([]);
  let [corecta, setCorecta] = useState("");
  let [verificata, setVerificata] = useState(false);
  let [theStateAsItIsNow, setTheStateAsItIsNow] = useState({});

  function persist(it) {
    localStorage.setItem("theStateAsItIsNow", JSON.stringify(it));
  }
  function clearAnsewers() {
    setAnswers([]);
  }
  function answerClick(a) {
    let ans = [...answers];
    if (ans.includes(a)) {
      ans = ans.filter((an) => an != a);
    } else {
      ans.push(a);
    }
    setAnswers(ans);
    console.log("current answers : ", answers);
    console.log("Coorect answer ::: ", state.intrebari[0].v);
  }

  function checkAnswer() {
    if (state.intrebari[0].v === answers.join("")) {
      curr_corecte.push(state.intrebari[0].id);

      console.log("Correct Answer Array", curr_corecte);
      setCorecta("true");
    } else {
      curr_gresite.push(state.intrebari[0].id);
      setCorecta("false");
      console.log("Wrong answer bro A", curr_corecte);
    }
    setVerificata(!verificata);
  }

  function nextQuestion() {
    if (localStorage.getItem("theStateAsItIsNow")) {
      theStateAsItIsNow = JSON.parse(localStorage.getItem("theStateAsItIsNow"));
    }
    theStateAsItIsNow = {
      ...theStateAsItIsNow,
      [state.categoria]: {
        curr_gresite,
        curr_corecte,
      },
    };
    persist(theStateAsItIsNow);
    setVerificata(false);
    setAnswers([]);
    let newIntre = [...state.intrebari];
    newIntre = newIntre.slice(1);

    // setCurenta((prev) => prev + 1);
    console.log(catego[state.categoria]);
    setState({
      ...state,
      curr_gresite: curr_gresite,
      curr_corecte: curr_corecte,
      intrebari: newIntre,
    });
    setCorecta("");

    // to be implemented as a separate function that should store it in localStorage

    console.log("SOMETHIGN");
    console.log(theStateAsItIsNow);
    console.log(theStateAsItIsNow[state.categoria]);
  }
  return (
    <div id="app">
      <div className="sup container">
        <div className="columns is-mobile ">
          <div className="column is-8">
            <div className="stacked_progress">
              <div
                style={{
                  width: (curr_corecte.length / state.goal) * 100 + "%",
                  background: "green",
                }}
              ></div>
              <div
                style={{
                  width: (curr_gresite.length / state.goal) * 100 + "%",
                  background: "red",
                }}
              ></div>
            </div>
          </div>

          <div className="column has-text-centered is-3">
            {curr_corecte.length + curr_gresite.length} / {state.goal}
          </div>
        </div>

        <div className="testThing">
          <h2 className="title is-4" onClick={() => clearAnsewers()}>
            {state.intrebari[0].q}
          </h2>

          <div className="columns">
            {state.intrebari[0].i > 0 && (
              <div className="column">
                <figure className="image is-3by2">
                  <img
                    alt={state.intrebari[0].q}
                    src={`/img/${state.categoria}/${state.intrebari[0].i}.jpg`}
                  />
                </figure>
              </div>
            )}

            <div className="column">
              {["a", "b", "c"].map((ans) => {
                return (
                  <div onClick={() => answerClick(ans)} key={ans}>
                    <Ans
                      text={state.intrebari[0][ans]}
                      key={ans}
                      value={ans}
                      active={answers.includes(ans)}
                    ></Ans>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {answers.length > 0 && (
          <div className="verificator">
            {corecta === "true" && (
              <Ansmsg correct={true} variante={state.intrebari[0].v} />
            )}
            {corecta === "false" && (
              <Ansmsg correct={false} variante={state.intrebari[0].v} />
            )}
          </div>
        )}

        <div className="questions-menu">
          {!verificata && answers.length > 0 && (
            <button
              className="verifica"
              type="button"
              name="button"
              onClick={() => checkAnswer()}
            >
              ✔️ Verifica
            </button>
          )}

          {verificata && (
            <>
              <button className="urmatoarea" onClick={() => nextQuestion()}>
                Urmatoarea
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chestionar;
