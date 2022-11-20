type AnsProps = {
  value: string;
  text: string;
  active: boolean;
};

export default function Ans(props: AnsProps) {
  const { text, value, active } = props;

  return (
    <div className={`ans ${active ? "active" : ""}`}>
      <span className="tick">✔️</span>
      <span className="letter">{value}</span>
      <span className="text">{text}</span>
    </div>
  );
}
