import { useState } from "react";
type AnsProps = {
  value: "a" | "b" | "c";
  text: string;
};

export default function Ans(props: AnsProps) {
  const { text, value } = props;
  let [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <>
      <div
        className={`ans ${active ? "active" : ""}`}
        onClick={() => handleClick()}
      >
        <span className="tick">✔️</span>
        <span className="letter">{value}</span>
        <span className="text">{text}</span>
      </div>
    </>
  );
}
