/* eslint-disable @next/next/no-img-element */
import Ans from "../components/ans";
import catego from "../data/catego";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../components/context";
import Ansmsg from "../components/ansMsg";

const Chestionar = () => {
  const { state, setState } = useContext(AppContext);

  let { curr_corecte, curr_gresite, goal, intrebari, categoria } = state;
  let intrebare = intrebari[0];
  let lolState = state[categoria];
  curr_corecte = lolState?.curr_corecte || [];
  curr_gresite = lolState?.curr_gresite || [];
  let [answers, setAnswers] = useState([]);
  let [corecta, setCorecta] = useState("");
  let [verificata, setVerificata] = useState(false);
  let [theDone, setTheDone] = useState({});

  function persist(it) {
    localStorage.setItem("theDone", JSON.stringify(it));
    setTheDone(it);
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
    console.log("Coorect answer ::: ", intrebare.v);
  }

  function checkAnswer() {
    if (intrebare.v === answers.join("")) {
      curr_corecte.push(intrebare.id);

      console.log("Correct Answer Array>>> ", curr_corecte);
      setCorecta("true");
    } else {
      curr_gresite.push(intrebare.id);
      setCorecta("false");
      console.log("Wrong answer bro >>>  ", curr_gresite);
    }
    setVerificata(!verificata);
  }

  function nextQuestion() {
    if (localStorage.getItem("theDone")) {
      theDone = JSON.parse(localStorage.getItem("theDone"));
    }
    theDone = {
      ...theDone,
      [categoria]: {
        curr_gresite,
        curr_corecte,
      },
    };
    console.log("the DONE YTO >> ", theDone);
    persist(theDone);
    setVerificata(false);
    setAnswers([]);
    let done = [...curr_corecte, ...curr_gresite];
    let newIntre = intrebari.filter((f) => !done.includes(f.id));
    console.log("NEW INTREBARI   ", newIntre);
    // setCurenta((prev) => prev + 1);
    // console.log(catego[categoria]);

    setCorecta("");

    // to be implemented as a separate function that should store it in localStorage

    console.log("SOMETHIGN");
    setState({ ...state, ...theDone, intrebari: newIntre });
    console.log(theDone);
    console.log("THE STATE UPDATED :", state);
  }
  return (
    <div id="app">
      <div className="sup container">
        <div className="columns is-mobile ">
          <div className="column is-8">
            <div className="stacked_progress">
              <div
                title={`Corete: ${curr_corecte.length}`}
                style={{
                  width: (curr_corecte.length / goal) * 100 + "%",
                  background: "green",
                }}
              ></div>
              <div
                title={`Gresite: ${curr_gresite.length}`}
                style={{
                  width: (curr_gresite.length / goal) * 100 + "%",
                  background: "red",
                }}
              ></div>
            </div>
          </div>

          <div className="column has-text-centered is-3">
            {curr_corecte.length + curr_gresite.length} / {goal}
          </div>
        </div>

        <div className="testThing">
          <h2 className="title is-4" onClick={() => clearAnsewers()}>
            {intrebare.q}
          </h2>

          <div className="columns">
            {intrebare.i > 0 && (
              <div className="column">
                <figure className="image is-3by2">
                  <img
                    alt={intrebare.q}
                    src={`/img/${categoria}/${intrebare.i}.jpg`}
                  />
                </figure>
              </div>
            )}

            <div className="column">
              {["a", "b", "c"].map((ans) => {
                return (
                  <div onClick={() => answerClick(ans)} key={ans}>
                    <Ans
                      text={intrebare[ans]}
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
              <Ansmsg correct={true} variante={intrebare.v} />
            )}
            {corecta === "false" && (
              <Ansmsg correct={false} variante={intrebare.v} />
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
