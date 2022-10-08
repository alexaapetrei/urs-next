import Link from "next/link";
const Nav = (props) => {
  const { active } = props;
  return (
    <nav className={"coolNav"}>
      <Link href="/home" className="home">
        Home
        {/* <img width="60px" src="/logo.png" alt="hello" className="logo" /> */}
      </Link>
      <Link href="/chestionar">Chestionar</Link>
      <Link href="/cauta">Cauta</Link>
    </nav>
  );
};

export default Nav;
