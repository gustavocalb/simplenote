import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import Cookies from "js-cookie";
import Router from "next/router";
import axios from "axios";
import { AvatarContext } from "./AvatarContext";

interface UserContextData {
  username: string;
  email: string;
  password: string;
  avatar: string;
  isLoggedIn: boolean;
  isOpenProfileModal: boolean;
  isOpenWelcomeModal: boolean;
  isOpenEditEmailModal: boolean;
  isOpenEditUsernameModal: boolean;
  isOpenEditedEmailAlert: boolean;
  openWelcomeModal: () => void;
  closeWelcomeModal: () => void;
  openEditEmailModal: () => void;
  closeEditEmailModal: () => void;
  openEditUsernameModal: () => void;
  closeEditUsernameModal: () => void;
  changeStateIsloggedInTrue: () => void;
  changeStateIsloggedFalse: () => void;
  setAvatarUrl: (url: string) => void;
  handleLoginSubmit: (form: { email: string; password: string }) => void;
  handleRegisterSubmit: (form: {
    name: string;
    email: string;
    password: string;
  }) => void;
  handleEditEmail: (form: { email: string; password: string }) => void;
  handleEditUsername: (form: { name: string; password: string }) => void;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  message: string;
}
interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);
  const [isOpenWelcomeModal, setIsOpenWelcomeModal] = useState(false);
  const [isOpenEditEmailModal, setIsOpenEditEmailModal] = useState(false);
  const [isOpenEditUsernameModal, setIsOpenEditUsernameModal] = useState(false);
  const [isOpenEditedEmailAlert, setIsOpenEditedEmailAlert] = useState(false);

  const [message, setMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("icons/user.svg");

  useEffect(() => {
    const auth = Cookies.get("auth");

    if (!auth) {
      Cookies.remove("authorization");
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  async function promise() {
    return await api
      .get("/api/controllers/userController/findUser")
      .then((response) => {
        setUsername(response.data.name);
        setEmail(response.data.email);
        setPassword(response.data.password);
        setAvatar(response.data.avatar);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    promise();
  }, [email, username, password, avatar]);

  function openProfileModal() {
    setIsOpenProfileModal(true);
  }

  function closeProfileModal() {
    setIsOpenProfileModal(false);
  }

  function changeStateIsloggedInTrue() {
    setIsLoggedIn(true);
  }

  function changeStateIsloggedFalse() {
    setIsLoggedIn(false);
  }

  function setAvatarUrl(url: string) {
    setAvatar(url);
  }

  function openWelcomeModal() {
    setIsOpenWelcomeModal(true);

    setInterval(() => {
      setIsOpenWelcomeModal(false);
    }, 8000);
  }

  function closeWelcomeModal() {
    setIsOpenWelcomeModal(false);
  }

  function openEditEmailModal() {
    setIsOpenEditEmailModal(true);
  }

  function closeEditEmailModal() {
    setIsOpenEditEmailModal(false);
  }

  function openEditUsernameModal() {
    setIsOpenEditUsernameModal(true);
  }

  function closeEditUsernameModal() {
    setIsOpenEditUsernameModal(false);
  }
  function openEditedEmailModal() {
    setIsOpenEditedEmailAlert(true);

    setInterval(() => {
      setIsOpenEditedEmailAlert(false);
    }, 8000);
  }

  async function handleLoginSubmit(form) {
    await api
      .post("/api/controllers/userController/login", form)
      .then((response) => {
        setMessage(response.data.message);

        Cookies.set("authorization", String(response.data.token));

        setEmail(response.data.user.email);
        setUsername(response.data.user.name);
        setAvatar(response.data.user.avatar);
        setIsLoggedIn(true);

        Cookies.set("auth", String("true"));

        Router.push("/");
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  }

  async function handleRegisterSubmit(form) {
    await api
      .post("/api/controllers/userController/register", form)
      .then((response) => {
        setMessage(response.data.message);

        Cookies.set("authorization", String(response.data.token));

        setEmail(response.data.user.email);
        setUsername(response.data.user.name);
        setAvatar(response.data.user.avatar);

        setIsLoggedIn(true);

        Cookies.set("auth", String("true"));

        Router.push("/");

        openWelcomeModal();
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  }

  async function handleEditEmail(form) {
    await api
      .post("/api/controllers/userController/changeEmail", form)
      .then((response) => {
        setEmail(response.data);
        closeEditEmailModal();
        openEditedEmailModal();
      });
  }

  async function handleEditUsername(form) {
    await api
      .post("/api/controllers/userController/changeUsername", form)
      .then((response) => {
        setUsername(response.data);
        closeEditUsernameModal();
      });
  }

  return (
    <UserContext.Provider
      value={{
        username,
        email,
        password,
        avatar,
        setAvatarUrl,
        isLoggedIn,
        isOpenProfileModal,
        isOpenWelcomeModal,
        isOpenEditUsernameModal,
        isOpenEditEmailModal,
        isOpenEditedEmailAlert,
        openEditEmailModal,
        openEditUsernameModal,
        openWelcomeModal,
        openProfileModal,
        closeProfileModal,
        closeEditEmailModal,
        closeEditUsernameModal,
        closeWelcomeModal,
        changeStateIsloggedInTrue,
        changeStateIsloggedFalse,
        handleLoginSubmit,
        handleRegisterSubmit,
        handleEditEmail,
        handleEditUsername,
        message,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
