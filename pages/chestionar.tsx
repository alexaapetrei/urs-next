// import Ans from "./ans";
import happy from "../public/img/happy.svg";
import ooops from "../public/img/ooops.svg";
import catego from "../data/catego";
// import { categoria, intrebari, change } from "../stores/intrebari";
//const { categoria } = state;

let categoria = "b";
let intrebari = catego[categoria];

let curr_corecte = [];
let curr_gresite = [];
let goal = 26;
let curenta = 0;
let answers = [];
let corecta = "";
let verificata = false;
let theStateAsItIsNow = {};

function answerClick(a) {
  answers.includes(a)
    ? (answers = answers.filter((ans) => ans != a))
    : answers.push(a);
  answers = answers;
  // Interesting new aproch :D
  // if (answers.includes(a)) {
  //   answers = answers.filter(ans => ans!= a)

  // }else {
  //   answers.push(a)
  // }
  console.log(answers);
}

function checkAnswer() {
  if (intrebari[curenta].v === answers.join("")) {
    curr_corecte.push(intrebari[curenta].id);
    curr_corecte = curr_corecte;
    console.log("Correct Answer" + curr_corecte.length);
    corecta = "true";
  } else {
    curr_gresite.push(intrebari[curenta].id);
    corecta = "false";
    console.log("Wrong answer bro" + (curr_corecte.length / goal) * 100);
  }
  verificata = true;
  verificata = verificata;
}

function nextQuestion() {
  verificata = false;
  verificata = verificata;
  answers = [];
  curenta = curenta + 1;
  corecta = "";

  // to be implemented as a separate function that should store it in localStorage
  theStateAsItIsNow = {
    ...theStateAsItIsNow,
    [categoria()]: {
      curr_gresite: curr_gresite,
      curr_corecte: curr_corecte,
      curenta: curenta,
    },
  };
  console.log(theStateAsItIsNow);
  console.log(theStateAsItIsNow[categoria()]);
}

const Chestionar = () => {
  return (
    <>
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

          {/*    
    <div className="column is-1">
      <timer></timer>
    </div> 
*/}
        </div>

        <div className="testThing">
          <h2 className="title is-4">{intrebari[curenta].q}</h2>

          <div className="columns">
            {intrebari[curenta].i > 0 && (
              <div className="column">
                <figure className="image is-3by2">
                  <img
                    src={`/img/${categoria()}/${intrebari[curenta].i}.jpg`}
                  />
                </figure>
              </div>
            )}

            <div className="column">
              {["a", "b", "c"].map((ans) => {
                <div onClick={() => answerClick(ans)}>
                  <h1
                    text={intrebari[curenta][ans]}
                    value={ans}
                    // active={answers.includes(ans) ? true : false}
                  >
                    LO
                  </h1>
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <Show when={answers.length}>
        <div
          className="verificator"
          classList={{ wrong: corecta === "false" && corecta.length > 0 }}
        >
          <Show when={corecta === "true"}>
            <div className="msg">
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <article className="media">
                    <figure className="media-left">
                      <img src={happy} className="logo" alt="UrsSur" />
                    </figure>
                    <div className="media-content">
                      <p>Bravo ai raspuns corect :</p>
                      <p>
                        <strong className="v">{intrebari[curenta].v}</strong>
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </Show>
          <Show when={corecta === "false"}>
            <div className="msg">
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <article className="media">
                    <figure className="media-left">
                      <img src={ooops} className="logo" alt="UrsSur" />
                    </figure>
                    <div className="media-content">
                      <p>Omul din greseli invata !</p>
                      <p>
                        Corect este :{" "}
                        <strong className="v">{intrebari[curenta].v}</strong>
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </Show>
        </div>
      </Show>

      <div className="questions-menu">
        <Show when={!verificata}>
          <button
            className="verifica"
            type="button"
            name="button"
            onClick={() => checkAnswer()}
          >
            <svg className="icon icon-checkmark">
              <use href="#icon-checkmark"></use>
            </svg>
            <symbol id="icon-checkmark" viewBox="0 0 32 32">
              <title>checkmark</title>
              <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
            </symbol>
            Verifica
          </button>
        </Show>

        <Show when={verificata}>
          <button className="urmatoarea" onClick={() => nextQuestion}>
            Urmatoarea
          </button>
        </Show>
      </div>
    </>
  );
}; */
}

export default Chestionar;
