import "./components_css/nav_button.css";

function Nav_button({ nombre }: { nombre: string }) {
  return (
    <>
      <button>{nombre}</button>
    </>
  );
}

export default Nav_button;
