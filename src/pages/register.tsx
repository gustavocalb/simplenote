import React, { useContext, useEffect, useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Router from "next/router";
import Link from "next/link";

import api from "../services/api";

import Cookies from "js-cookie";

import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../styles/global";
import light from "../styles/theme/light";
import dark from "../styles/theme/dark";

import { Container } from "../styles/pages/Login";
import { TextProvider } from "../context/TextContext";
import { Button } from "../components/Button/Button";
import { GetServerSideProps } from "next";
import { UserContext } from "../context/UserContext";

export default function Register(props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { handleRegisterSubmit, message } = useContext(UserContext);

  function formChange(event: any) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    handleRegisterSubmit(form);
  }

  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <div className="seta">
          <a href="/login">
            <img src="icons/seta.svg" alt="voltar" />
          </a>
        </div>
        <div className="image">
          <img src="icons/login/register.svg" alt="image register" />
        </div>
        <div className="container">
          <div className="form-container">
            {/* <img src="/icons/login.svg" alt=""/> */}
            <div className="box-container">
              <div className="description">
                <h2>Sign up</h2>
              </div>
              {!message ? null : (
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.99 22C6.46846 21.9945 1.99632 17.5149 2 11.9933C2.00368 6.47179 6.48179 1.99816 12.0033 2C17.5249 2.00184 22 6.47845 22 12C21.9967 17.5254 17.5154 22.0022 11.99 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.6845 16.444 4.10977 12.0425 4.08599C7.64111 4.06245 4.04732 7.59876 4 12V12.172ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                      fill="white"
                    />
                  </svg>
                  <p>{message}</p>
                </span>
              )}
              <form onSubmit={handleSubmit}>
                <div className="input">
                  <img src="icons/username.svg" alt="" />
                  <input
                    name="name"
                    autoComplete="off"
                    placeholder="Username"
                    type="text"
                    onChange={formChange}
                    required
                  />
                </div>

                <div className="input">
                  <img src="icons/email.svg" alt="" />
                  <input
                    name="email"
                    autoComplete="off"
                    placeholder="email"
                    type="email"
                    onChange={formChange}
                    required
                  />
                </div>

                <div className="input">
                  <img src="icons/password.svg" alt="" />
                  <input
                    name="password"
                    autoComplete="off"
                    placeholder="password"
                    type="password"
                    onChange={formChange}
                    required
                  />
                </div>

                <button type="submit">SIGN IN</button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}
