import Link from "next/link";
const Nav = (props) => {
  const { active } = props;
  return (
    <nav className={"coolNav"}>
      <Link href="/" className="home">
        <a>
          <img width="60px" src="/logo.png" alt="Home" className="logo" />
        </a>
      </Link>
      <Link href="/chestionar">Chestionar</Link>
      <Link href="/cauta">Cauta</Link>
    </nav>
  );
};

export default Nav;
