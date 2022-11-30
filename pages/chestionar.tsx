/* eslint-disable @next/next/no-img-element */
import Ans from "../components/ans";
import { useState, useContext } from "react";
import { AppContext } from "../components/context";
import Ansmsg from "../components/ansMsg";
import { useRouter } from "next/router";

function Chestionar() {
  const router = useRouter();
  const { state, setState } = useContext(AppContext);

  let { corecte, gresite, goal, intrebari, categoria } = state;
  let intrebare = intrebari[0];

  let cate = state[categoria];
  corecte = cate?.corecte;
  gresite = cate?.gresite;
  let [answers, setAnswers] = useState([]);
  let [corecta, setCorecta] = useState("");
  let [verificata, setVerificata] = useState(false);

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
      corecte.push(intrebare.id);

      console.log("Correct Answer Array>>> ", corecte);
      setCorecta("true");
    } else {
      gresite.push(intrebare.id);
      setCorecta("false");
      console.log("Wrong answer bro >>>  ", gresite);
    }
    setVerificata(!verificata);
  }

  function nextQuestion() {
    let theDone;
    if (cate) theDone = cate;

    theDone = {
      ...theDone,
      [categoria]: {
        gresite,
        corecte,
      },
    };
    setVerificata(false);
    setAnswers([]);
    let done = [...corecte, ...gresite];
    let newIntre = intrebari.filter((f) => !done.includes(f.id));
    setCorecta("");

    setState({ ...state, ...theDone, intrebari: newIntre });
  }
  console.log(intrebare);
  intrebare ?? router.replace("terminat");
  return (
    <div id="app">
      {intrebare && (
        <div className="sup container">
          <div className="columns is-mobile ">
            <div className="column is-8">
              <div className="stacked_progress">
                <div
                  title={`Corete: ${corecte.length}`}
                  style={{
                    width: (corecte.length / goal) * 100 + "%",
                    background: "green",
                  }}
                ></div>
                <div
                  title={`Gresite: ${gresite.length}`}
                  style={{
                    width: (gresite.length / goal) * 100 + "%",
                    background: "red",
                  }}
                ></div>
              </div>
            </div>

            <div className="column has-text-centered is-3">
              {corecte.length + gresite.length} / {goal}
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
      )}
    </div>
  );
}

export default Chestionar;
