import { useContext, useState } from "react";
import { Container } from "./sidebar";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import Switch from "react-switch";
import light from "../../styles/theme/light";
import { TextContext } from "../../context/TextContext";
import { UserContext, UserProvider } from "../../context/UserContext";
import { GetServerSideProps } from "next";
import { ProfileModal } from "../ProfileModal/ProfileModal";
import Cookies from "js-cookie";

import api from "../../services/api";
import { AvatarContext } from "../../context/AvatarContext";
import Router from "next/router";

export default function Siderbar({ toggleTheme, theme }) {
  const { colors, title } = useContext(ThemeContext);

  const {
    isLoggedIn,
    username,
    openProfileModal,
    isOpenProfileModal,
    avatar,
  } = useContext(UserContext);

  // const [username, setUsername] = useState('')

  function logout() {
    Cookies.remove("auth");
    Router.push("/login");
  }

  return (
    <>
      <Container>
        <div className="container">
          <header>
            {isLoggedIn === false ? (
              <img src="logo.svg" alt="" className="logo" />
            ) : (
              <img className="avatar" src={avatar} alt="teste" />
            )}
            {isLoggedIn === false ? (
              <>
                <p
                  style={{
                    width: "100%",
                    fontFamily: "Nunito",
                    marginTop: "1rem",
                    fontSize: "1.25rem",
                    textAlign: "center",
                  }}
                >
                  Simple
                </p>
                <p
                  style={{
                    width: "100%",
                    fontFamily: "Nunito",
                    fontSize: "1.25rem",
                    textAlign: "center",
                  }}
                >
                  Note
                </p>
                <a href="/login">Login</a>
              </>
            ) : (
              <>
                <h3>{username}</h3>
                <button onClick={logout}>
                  {theme.title === "light" ? (
                    <img
                      className="img-exit"
                      src="icons/exit-light.svg"
                      alt="Sair"
                    />
                  ) : (
                    <img
                      className="img-exit"
                      src="icons/exit-dark.svg"
                      alt="Sair"
                    />
                  )}
                </button>
              </>
            )}
          </header>
          <main>
            {isLoggedIn === false ? (
              <>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Sobre</a>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <button onClick={openProfileModal}>Profile</button>
                  </li>
                </ul>
              </>
            )}
          </main>
          <footer>
            {isLoggedIn === false ? (
              <>
                <img
                  src="icons/github.svg"
                  alt="Logo github"
                  style={{ marginRight: "10px" }}
                />
                <a
                  href="https://github.com/FireShark688"
                  style={{ color: "#424242" }}
                >
                  Gustavo Carvalho
                </a>
              </>
            ) : (
              <div className="div">
                {theme.title === "light" ? (
                  <button onClick={toggleTheme}>
                    <img src="icons/moon.svg" alt="Modo dark" />
                  </button>
                ) : (
                  <button onClick={toggleTheme}>
                    <img src="icons/sun.svg" alt="Modo light" />
                  </button>
                )}
              </div>
            )}
          </footer>
        </div>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await api.get(
    "http://localhost:3000/api/controllers/userController/findUser"
  );
  console.log(response);
  return {
    props: {
      user: response.data,
    },
  };
};
