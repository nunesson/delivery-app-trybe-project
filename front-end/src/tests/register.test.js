import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import renderWithRouter from "./renderWithRouter";

describe("Testa a página Login", () => {

  beforeEach(() => {
    window.localStorage.clear()
  })

  describe("Logando com cada role", () => {
    it("Se registrando com sucesso", async () => {
      const { history } = renderWithRouter(<App />);
      history.push('/register')
      
      const nameInput = screen.getByPlaceholderText(/digite seu nome/i)
      const emailInput = screen.getByPlaceholderText(/digite seu email/i)
      const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
      const registerButton = screen.getByRole('button', { name: /cadastre-se/i })

      expect(registerButton).toBeDisabled();

      userEvent.type(nameInput, "Usuario com nome gigantesco")
      userEvent.type(emailInput, "email@email.com")
      userEvent.type(passwordInput, "senhasenha")

      expect(registerButton).not.toBeDisabled();

      userEvent.click(registerButton);

      await waitFor(() => {
        screen.getByRole('button', { name: /produtos/i })
      })

      const { pathname } = history.location;

      expect(pathname).toBe('/customer/products');
    });
    it("Se registrando com usuario existente", async () => {
      const { history } = renderWithRouter(<App />);
      history.push('/register')
      
      const nameInput = screen.getByPlaceholderText(/digite seu nome/i)
      const emailInput = screen.getByPlaceholderText(/digite seu email/i)
      const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
      const registerButton = screen.getByRole('button', { name: /cadastre-se/i })

      userEvent.type(nameInput, "meu mano zebirita")
      userEvent.type(emailInput, "zebirita@email.com")
      userEvent.type(passwordInput, "zebiritamuitochave")

      userEvent.click(registerButton);

      await waitFor(() => {
        const errorLogin = screen.getByTestId("common_register__element-invalid_register")
        expect(errorLogin).toBeInTheDocument();
      })
    });
  });
});