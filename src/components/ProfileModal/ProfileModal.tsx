import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { TextContext } from "../../context/TextContext";
import { Overlay } from "./profileModal";
import { User } from "./../../utils/models/User";
import Link from 'next/link'

import api from "../../services/api";
import { Router } from "next/router";
import { UserContext } from "../../context/UserContext";
import { ChangeAvatarModal } from "../ChangeAvatarModal/ChangeAvatarModal";
import { AvatarContext } from "../../context/AvatarContext";
import { EditEmailModal } from "../EditEmailModal/EditEmailModal";
import { EditUsernameModal } from "../EditUsernameModal/EditUsernameModal";
import { EditedEmailModal } from "../EditedEmailModal/EditedEmailModal";

export interface UserProps {
  email: string;
  name: string;
  avatar: string;
}

export function ProfileModal() {
  const { 
    email,
    password,
    username,
    closeProfileModal,
    openEditEmailModal,
    openEditUsernameModal,
    isOpenEditEmailModal,
    isOpenEditUsernameModal,
    isOpenEditedEmailAlert,
    avatar
  } = useContext(UserContext)

  const {
    openAvatarModal,
    isOpenAvatarModal,
  } = useContext(AvatarContext)

  const [userEmail, setUserEmail] = useState(email)
  const [name, setName] = useState(username)
  
  return (
    <>
    <Overlay>
        <div className="overlay">
          <div className="container animate__zoomIn">
            <form method="post">
              <header>
              <div className="image">
              <button type="button" onClick={openAvatarModal}>
                  <img src={avatar} alt=""/>
              </button>
              <div className="bnt-del">
                <button>
                  Excluir conta
                </button>
              </div>
              </div>
                <div className="input">
                <label>Username</label>
                <div className="box-data">
                  {name}
                  <button type="button" onClick={openEditUsernameModal}>
                      editar
                  </button>
                </div>
                <label>Email</label>
               <div className="box-data">
                 {userEmail}
                 <button type="button" onClick={openEditEmailModal}>
                      editar
                  </button>
               </div>
                <label htmlFor="">Password</label>
                  <div className="box-data">
                    
                  </div>
                </div>
              </header>
            </form>
            <div className="bnt-close">
              <button type="button" onClick={closeProfileModal}>
                  <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
              </div>
          </div >
        </div >
      </Overlay>
      {isOpenAvatarModal && <ChangeAvatarModal/>}
      {isOpenEditEmailModal && <EditEmailModal />}
      {isOpenEditUsernameModal && <EditUsernameModal />}
    </>
  )
  }



