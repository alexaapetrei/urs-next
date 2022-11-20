export default function Ansmsg(props) {
  const { correct, variante } = props;

  const imgTranslator = {
    true: "/img/happy.svg",
    false: "/img/ooops.svg",
  };

  return (
    <div className="msg">
      {correct ? <i></i> : <b></b>}
      <img src={imgTranslator[correct]} className="fixies" alt="UrsSur" />
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <article className="media">
            <div className="media-content">
              {correct ? (
                ""
              ) : (
                <p>
                  Corect este : <strong className="v">{variante}</strong>
                </p>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
