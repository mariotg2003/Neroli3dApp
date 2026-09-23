import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "../App";

function renderApp(initialEntry = "/") {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <App />
    </MemoryRouter>,
  );
}

describe("Neroli3D", () => {
  it("muestra la página de inicio con su marca y pie", () => {
    renderApp();

    expect(screen.getByRole("heading", { name: "Neroli3D" })).toBeInTheDocument();
    expect(screen.getByText("© 2026 Neroli3d")).toBeInTheDocument();
  });

  it("navega del catálogo al contacto desde el menú", async () => {
    const user = userEvent.setup();
    renderApp("/catalogo");

    expect(screen.getByRole("heading", { name: "Estampitas 3D" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "☰" }));
    await user.click(screen.getByRole("button", { name: "Contacto" }));

    expect(screen.getByRole("heading", { name: "Instagram" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Gmail" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "TikTok" })).toBeInTheDocument();
  });

  it("muestra las siete categorías y abre y cierra el detalle de una tarjeta", async () => {
    const user = userEvent.setup();
    renderApp("/catalogo");

    expect(screen.getAllByRole("button", { name: "Ver más" })).toHaveLength(7);

    await user.click(screen.getAllByRole("button", { name: "Ver más" })[0]);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Estampitas 3D" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Cerrar" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renderiza los enlaces externos de contacto con atributos seguros", () => {
    renderApp("/contacto");

    expect(screen.getByRole("link", { name: /instagram/i })).toHaveAttribute(
      "href",
      "https://www.instagram.com/neroli3d/",
    );
    expect(screen.getByRole("link", { name: /tiktok/i })).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(screen.getByRole("link", { name: /tiktok/i })).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
    expect(screen.getByRole("link", { name: /gmail/i })).toHaveAttribute(
      "href",
      "mailto:neroli3d@gmail.com",
    );
  });
});
