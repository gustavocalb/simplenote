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
    avatar
  } = useContext(UserContext)

  const {
    openAvatarModal,
    isOpenAvatarModal,
  } = useContext(AvatarContext)
  
  const [form, setForm] = useState({
    name: username,
    email: email,
    password: password,
  })
  
  function formChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  
  const handleKeyUp = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget
    
    event.currentTarget.maxLength = 17
  }, [])
  
  return (
    <>
    <Overlay>
        <div className="overlay">
          <div className="container">
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
                  {form.name}
                  <button onClick={openEditUsernameModal}>
                      editar
                  </button>
                </div>
                <label>Email</label>
               <div className="box-data">
                 {form.email}
                 <button onClick={openEditEmailModal}>
                      editar
                  </button>
               </div>
                <label htmlFor="">Password</label>
                  <div className="box-data">
                    
                  </div>
                </div>
              </header>
              {/* <div className="buttons">
              <button type="submit">
                  Salvar <img src="icons/check.svg" alt=""/>
                </button>
              </div> */}
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
    </>
  )
  }



