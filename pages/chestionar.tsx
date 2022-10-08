import Ans from "../components/ans";
import catego from "../data/catego";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../components/context";
let curr_corecte = [];
let curr_gresite = [];
let goal = 26;

const Chestionar = () => {
  const { state, setState } = useContext(AppContext);
  let [answers, setAnswers] = useState([]);
  let [corecta, setCorecta] = useState("");
  let [verificata, setVerificata] = useState(false);
  let [theStateAsItIsNow, setTheStateAsItIsNow] = useState({});

  // useEffect(() => {
  //   let persCat;
  //   let initialState;
  //   try {
  //     persCat = localStorage.getItem("categoria");
  //     initialState = JSON.parse(localStorage.getItem("theStateAsItIsNow"));
  //     console.log(initialState.curenta);
  //   } catch (err) {
  //     console.log(err);
  //     initialState = {};
  //     persCat = "b";
  //     console.log("No cat is stored here : ");
  //   }
  //   let tempInt = catego[persCat];
  //   setIntreari(tempInt);
  //   setIntreare(intrebari[curenta]);
  //   console.log("Temp Int  ", tempInt[curenta]);
  //   setCategoria(persCat);
  //   setTheStateAsItIsNow(initialState);
  // });

  // let intrebari = intrebarii;

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
    console.log("Coorect answer ::: ", state.intrebare.v);
  }

  function checkAnswer() {
    if (state.intrebare.v === answers.join("")) {
      curr_corecte.push(state.intrebare.id);

      console.log("Correct Answer Array", curr_corecte);
      setCorecta("true");
    } else {
      curr_gresite.push(state.intrebare.id);
      setCorecta("false");
      console.log("Wrong answer bro A", curr_corecte);
    }
    setVerificata(!verificata);
  }

  function nextQuestion() {
    theStateAsItIsNow = {
      ...theStateAsItIsNow,
      [state.categoria]: {
        curr_gresite,
        curr_corecte,
        curenta: state.curenta,
      },
    };
    persist(theStateAsItIsNow);
    setVerificata(false);
    setAnswers([]);

    // setCurenta((prev) => prev + 1);
    console.log(catego[state.categoria][state.curenta + 1]);
    setState({
      ...state,
      curr_gresite: curr_gresite,
      curr_corecte: curr_corecte,
      curenta: state.curenta + 1,
      intrebare: catego[state.categoria][state.curenta + 1],
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
                style={{ width: (curr_corecte.length / goal) * 100 + "%" }}
              ></div>
              <div
                style={{ width: (curr_gresite.length / goal) * 100 + "%" }}
              ></div>
            </div>
          </div>

          <div className="column has-text-centered is-3">
            {curr_corecte.length + curr_gresite.length} / {goal}
          </div>
        </div>

        <div className="testThing">
          <h2 className="title is-4" onClick={() => clearAnsewers()}>
            {state.intrebare.q}
          </h2>

          <div className="columns">
            {state.intrebare.i > 0 && (
              <div className="column">
                <figure className="image is-3by2">
                  <img
                    alt=""
                    src={`/img/${state.categoria}/${state.intrebare.i}.jpg`}
                  />
                </figure>
              </div>
            )}

            <div className="column">
              {["a", "b", "c"].map((ans) => {
                return (
                  <div onClick={() => answerClick(ans)} key={ans}>
                    <Ans
                      text={state.intrebare[ans]}
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
        {
          answers.length > 0 && (
            <div
              className={`verificator`}
              //   classList={{ wrong: corecta === "false" && corecta.length > 0 }}
            >
              {corecta === "true" && (
                <div className="msg">
                  <i></i>
                  <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                      <article className="media">
                        <figure className="media-left">
                          <img
                            src="/img/happy.svg"
                            className="logo"
                            alt="UrsSur"
                          />
                        </figure>
                        <div className="media-content">
                          <p>Bravo ai raspuns corect :</p>
                          <p>
                            <strong className="v">{state.intrebare.v}</strong>
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              )}
              {corecta === "false" && (
                <div className="msg">
                  <b></b>
                  <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                      <article className="media">
                        <figure className="media-left">
                          <img
                            src="/img/ooops.svg"
                            className="logo"
                            alt="UrsSur"
                          />
                        </figure>
                        <div className="media-content">
                          <p>Omul din greseli invata !</p>
                          <p>
                            Corect este :{" "}
                            <strong className="v">{state.intrebare.v}</strong>
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )

          /*Answer.length*/
        }

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
            <button className="urmatoarea" onClick={() => nextQuestion()}>
              On to the next one
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chestionar;
