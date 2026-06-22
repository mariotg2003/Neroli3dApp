import TopBar from "./components/top_bar.tsx";
import BotBar from "./components/bot_bar.tsx";
import Logo from "./components/logo.tsx";

function main_page() {
  return (
    <>
      <TopBar nombreIzq="" rutaIzq="" nombreDer="" rutaDer="" titulo="" />
      <Logo />
      <BotBar />
    </>
  );
}

export default main_page;
