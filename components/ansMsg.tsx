/* eslint-disable @next/next/no-img-element */
export default function Ansmsg(props) {
  const { correct, variante } = props;

  const imgTranslator = {
    true: "/img/happy.svg",
    false: "/img/ooops.svg",
  };

  return (
    <>
      {correct ? <i></i> : <b></b>}
      <img src={imgTranslator[correct]} className="fixies" alt="UrsSur" />
      <div className="columns msg">
        <div className="column is-half is-offset-one-quarter">
          {correct ? (
            ""
          ) : (
            <p>
              Corect este : <strong className="v">{variante}</strong>
            </p>
          )}
        </div>
      </div>
    </>
  );
}
