import "./App.css";
import MainPage from "./app_pages/main_page.tsx";
import Catalog from "./app_pages/catalog.tsx";
import Contact from "./app_pages/contact.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
