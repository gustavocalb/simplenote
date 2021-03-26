import { useContext, useEffect, useState } from "react";
import { AvatarContext } from "../../context/AvatarContext";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api";
import { Overlay } from "./changeAvatarModal";

export function ChangeAvatarModal() {
  const { closeAvatarModal } = useContext(AvatarContext);
  const { avatar, setAvatarUrl } = useContext(UserContext);

  const [userAvatar, setUserAvatar] = useState(avatar);

  function setAvatarUser(url: string) {
    setUserAvatar(url);
  }

  async function submitAvatar(url: string) {
    await api
      .post("/api/controllers/userController/changeAvatar", { avatar: url })
      .then((response) => {
        console.log("setou:", response.data.avatar);
        setAvatarUrl(String(response.data.avatar));
        closeAvatarModal();
      });
  }

  return (
    <Overlay>
      <div className="overlay">
        <div className="container">
          <header>
            <img src={userAvatar} alt="" />
          </header>
          <main>
            <section>
              <button
                onClick={() =>
                  setAvatarUser("icons/avatar/male-avatar-blue.svg")
                }
              >
                <img src="icons/avatar/male-avatar-blue.svg" alt="" />
              </button>
              <button
                onClick={() =>
                  setAvatarUser("icons/avatar/male-avatar-oranje.svg")
                }
              >
                <img src="icons/avatar/male-avatar-oranje.svg" alt="" />
              </button>
              <button
                onClick={() =>
                  setAvatarUser("icons/avatar/male-avatar-pink.svg")
                }
              >
                <img src="icons/avatar/male-avatar-pink.svg" alt="" />
              </button>
            </section>
            <section>
              <button
                onClick={() =>
                  setAvatarUser("icons/avatar/female-avatar-blue.svg")
                }
              >
                <img src="icons/avatar/female-avatar-blue.svg" alt="" />
              </button>
              <button
                onClick={() =>
                  setAvatarUser("icons/avatar/female-avatar-oranje.svg")
                }
              >
                <img src="icons/avatar/female-avatar-oranje.svg" alt="" />
              </button>
              <button
                onClick={() =>
                  setAvatarUser("icons/avatar/female-avatar-pink.svg")
                }
              >
                <img src="icons/avatar/female-avatar-pink.svg" alt="" />
              </button>
            </section>
            <section>
              <button
                onClick={() => setAvatarUser("icons/avatar/profile-blue.svg")}
              >
                <img src="icons/avatar/profile-blue.svg" alt="" />
              </button>
              <button
                onClick={() => setAvatarUser("icons/avatar/profile-oranje.svg")}
              >
                <img src="icons/avatar/profile-oranje.svg" alt="" />
              </button>
              <button
                onClick={() => setAvatarUser("icons/avatar/profile-pink.svg")}
              >
                <img src="icons/avatar/profile-pink.svg" alt="" />
              </button>
            </section>
            <div className="buttons">
              <button
                type="button"
                className="bnt-del"
                onClick={closeAvatarModal}
              >
                Cancelar
                {/* <img src="/icons/close.svg" alt=""/> */}
              </button>
              <button type="submit" onClick={() => submitAvatar(userAvatar)}>
                Salvar
                {/* <img src="icons/check.svg" alt=""/> */}
              </button>
            </div>
          </main>
          <div className="bnt-close">
            <button type="button" onClick={closeAvatarModal}>
              <img src="/icons/close.svg" alt="Fechar modal" />
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  );
}
