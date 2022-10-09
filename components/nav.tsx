import Link from "next/link";
import Router, { useRouter } from "next/router";
const Nav = (props) => {
  const router = useRouter();
  const { active } = props;
  return (
    <nav className={"coolNav"}>
      <Link href="/">
        <a className="p-1">
          <img width="60px" src="/logo.png" alt="Home" className="logo" />
        </a>
      </Link>
      <Link href="/chestionar">Chestionar</Link>
      <Link href="/cauta">Cauta</Link>
    </nav>
  );
};

export default Nav;
