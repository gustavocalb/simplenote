import { GetServerSideProps } from "next";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { Button } from "../components/Button/Button";
import { EditedEmailModal } from "../components/EditedEmailModal/EditedEmailModal";
import { Note } from "../components/Note";
import { ProfileModal } from "../components/ProfileModal/ProfileModal";
import Siderbar from "../components/Sidebar/Sidebar";
import { WelcomeModal } from "../components/WelcomeModal/WelcomeModal";
import { TextContext, TextProvider } from "../context/TextContext";
import { UserContext, UserProvider } from "../context/UserContext";
import api from "../services/api";
import GlobalStyle from "../styles/global";
import { Container } from "../styles/pages/Home";
import dark from "../styles/theme/dark";
import light from "../styles/theme/light";
import usePerstedState from "../utils/usePerstedState";

interface Props {
  notes: Array<{
    _id: string;
    title: string;
    description: string;
    note_index: string;
  }>;
}

export default function Home(props: Props) {
  const [theme, setTheme] = usePerstedState<DefaultTheme>("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  const { 
    isLoggedIn,
    isOpenProfileModal,
    isOpenWelcomeModal,
    isOpenEditedEmailAlert
  } = useContext(UserContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Siderbar toggleTheme={toggleTheme} theme={theme} />
        <TextProvider notes={props.notes}>
          <Container>
            <main>
              <section>
                <Note />
              </section>
              <div className="button">
                {isLoggedIn === false ? null : <Button />}
              </div>
            </main>
          </Container>
        </TextProvider>
      </ThemeProvider>
      {isOpenProfileModal && <ProfileModal />}
      {isOpenWelcomeModal && <WelcomeModal />}
      {isOpenEditedEmailAlert && <EditedEmailModal />}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (!ctx.req.cookies.authorization) {
    return {
      props: {},
    };
  }

  api.defaults.headers.authorization =
    "Bearer " + ctx.req.cookies.authorization;

  const response = await api.get(
    "http://localhost:3000/api/controllers/noteController/findUserNote"
  );
  // console.log(response)
  return {
    props: {
      notes: response.data,
    },
  };
};
