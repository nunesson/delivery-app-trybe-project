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
    it("Loga na aplicacao como customer", async () => {
      const { history } = renderWithRouter(<App />);

      const emailInput = screen.getByPlaceholderText(/digite seu email/i)
      const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
      const loginButton = screen.getByRole('button', { name: /login/i })

      expect(loginButton).toBeDisabled();

      userEvent.type(emailInput, "zebirita@email.com")
      userEvent.type(passwordInput, "$#zebirita#$")

      expect(loginButton).not.toBeDisabled();

      userEvent.click(loginButton);


      await waitFor(() => {
        screen.getByRole('button', { name: /produtos/i })
      })

      const { pathname } = history.location;

      expect(pathname).toBe('/customer/products');
    });

    it("Loga na aplicacao como admin", async () => {
      const { history } = renderWithRouter(<App />);

      const emailInput = screen.getByPlaceholderText(/digite seu email/i)
      const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
      const loginButton = screen.getByRole('button', { name: /login/i })

      userEvent.type(emailInput, "adm@deliveryapp.com")
      userEvent.type(passwordInput, "--adm2@21!!--")

      userEvent.click(loginButton);

      await waitFor(() => {
        screen.getByRole('button', { name: /produtos/i })
      })

      const { pathname } = history.location;

      expect(pathname).toBe('/admin/manage');
    });

    it("Loga na aplicacao como seller", async () => {
      const { history } = renderWithRouter(<App />);

      const emailInput = screen.getByPlaceholderText(/digite seu email/i)
      const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
      const loginButton = screen.getByRole('button', { name: /login/i })

      userEvent.type(emailInput, "fulana@deliveryapp.com")
      userEvent.type(passwordInput, "fulana@123")

      userEvent.click(loginButton);

      await waitFor(() => {
        screen.getByRole('button', { name: /produtos/i })
      })

      const { pathname } = history.location;

      expect(pathname).toBe('/seller/orders');
    });
  })

  describe("Teste de falha do login e botao de register", () => {
    it("Mensagem ao logar com usuario inexistente", async () => {
      renderWithRouter(<App />);

      const emailInput = screen.getByPlaceholderText(/digite seu email/i)
      const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
      const loginButton = screen.getByRole('button', { name: /login/i })

      userEvent.type(emailInput, "email@email.com")
      userEvent.type(passwordInput, "senhasenhasenha")

      userEvent.click(loginButton);

      await waitFor(() => {
        const errorLogin = screen.getByTestId('common_login__element-invalid-email')
        expect(errorLogin).toBeInTheDocument();
      })

    })

    it("Testa botao de register", () => {
      const { history } = renderWithRouter(<App />);

      const registerButton = screen.getByRole('button', { name: /cadastre\-se/i })

      userEvent.click(registerButton);

      const { pathname } = history.location;

      expect(pathname).toBe('/register');
    })
  })

  describe("Testa logando com cada role e vendo se redireciona automaticamente quando entrar na pagina", () => {

    it("Testa se ao logar como customer redireciona para rota de customer", async () => {
      const { history } = renderWithRouter(<App />);

      const emailInput = screen.getByPlaceholderText(/digite seu email/i)
      const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
      const loginButton = screen.getByRole('button', { name: /login/i })

      expect(loginButton).toBeDisabled();

      userEvent.type(emailInput, "zebirita@email.com")
      userEvent.type(passwordInput, "$#zebirita#$")

      expect(loginButton).not.toBeDisabled();

      userEvent.click(loginButton);


      await waitFor(() => {
        screen.getByRole('button', { name: /produtos/i })
      })

      history.push('/login')

      await waitFor(() => {
        screen.getByRole('button', { name: /produtos/i })
      })

      const { pathname } = history.location;

      expect(pathname).toBe('/customer/products');
    });

    it("Testa se ao logar como admin redireciona para rota de admin", async () => {
      const { history } = renderWithRouter(<App />);

      const emailInput = screen.getByPlaceholderText(/digite seu email/i)
      const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
      const loginButton = screen.getByRole('button', { name: /login/i })

      expect(loginButton).toBeDisabled();

      userEvent.type(emailInput, "adm@deliveryapp.com")
      userEvent.type(passwordInput, "--adm2@21!!--")

      expect(loginButton).not.toBeDisabled();

      userEvent.click(loginButton);


      await waitFor(() => {
        screen.getByRole('button', { name: /produtos/i })
      })

      history.push('/login')

      await waitFor(() => {
        screen.getByRole('button', { name: /produtos/i })
      })

      const { pathname } = history.location;

      expect(pathname).toBe('/admin/manage');
    });

    it("Testa se ao logar como seller redireciona para rota de seller", async () => {
      const { history } = renderWithRouter(<App />);

      const emailInput = screen.getByPlaceholderText(/digite seu email/i)
      const passwordInput = screen.getByPlaceholderText(/digite sua senha/i)
      const loginButton = screen.getByRole('button', { name: /login/i })

      expect(loginButton).toBeDisabled();

      userEvent.type(emailInput, "fulana@deliveryapp.com")
      userEvent.type(passwordInput, "fulana@123")

      expect(loginButton).not.toBeDisabled();

      userEvent.click(loginButton);


      await waitFor(() => {
        screen.getByRole('button', { name: /produtos/i })
      })

      history.push('/login')

      await waitFor(() => {
        screen.getByRole('button', { name: /produtos/i })
      })

      const { pathname } = history.location;

      expect(pathname).toBe('/seller/orders');
    })
  });
});