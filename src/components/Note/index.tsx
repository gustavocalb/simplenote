import React, { useContext } from "react";

import Textcard from "../Textcard/Textcard";
import { TextContext } from "../../context/TextContext";
import { TextCardProps } from "../Textcard/Textcard";
import { UserContext, UserProvider } from "../../context/UserContext";
import { Container } from "./styles";

export function Note() {
  const { notesState } = useContext(TextContext);
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      {isLoggedIn === false ? (
        <>
          <Container>
            <div className="welcome">
              <div className="title">
                <h2 style={{ color: "#fff" }}>
                  Seja bem-vindo(a) ao Simple Note
                </h2>
                <h3>seu ambiente de anotações preferido.</h3>
              </div>
              <p>
                Aqui suas anotações vão além, <br />
                vamos fazer algumas anotações?
              </p>
              <div className="buttons">
                <button>Comece a agora</button>
              </div>
            </div>
            <div className="images">
              <div className="note">
                <img src="icons/noted.svg" alt="" />
              </div>
              <div className="login">
                <img src="icons/login.svg" alt="" />
              </div>
            </div>
          </Container>
        </>
      ) : (
        <>
          {notesState.length === 0 || notesState === undefined ? (
            <>
              <h2
                style={{
                  color: "#fff",
                  textShadow: "1rem 1rem 1rem 1rem #000",
                }}
              >
                Nenhuma anotação encontrada
                <p
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    marginTop: "1px",
                  }}
                >
                  crie novas anotações.
                </p>
              </h2>
              <img src="icons/add-note.svg" alt="" />
            </>
          ) : (
            notesState.map((note: TextCardProps) => {
              return (
                <Textcard
                  note_index={note.note_index}
                  key={note._id}
                  _id={note._id}
                  title={note.title}
                  description={note.description}
                />
              );
            })
          )}
        </>
      )}
    </>
  );
}
