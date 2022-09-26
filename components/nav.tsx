const Nav = (props) => {
  const { active } = props;
  return (
    <nav className={"coolNav"}>
      <a href="/home" className="home">
        <img width="60px" src="/logo.png" alt="hello" className="logo" />

        <span className="logoText"> UrsSur</span>
      </a>
      <a href="/chestionar">Chestionar</a>
      <a href="/cauta">Cauta</a>
    </nav>
  );
};

export default Nav;
