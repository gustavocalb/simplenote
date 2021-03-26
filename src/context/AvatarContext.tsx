import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import { UserContext } from "./UserContext";

interface AvatarContextData {
  isOpenAvatarModal: boolean;
  openAvatarModal: () => void;
  closeAvatarModal: () => void;
}

interface AvatarProviderProps {
  children: ReactNode;
}

export const AvatarContext = createContext({} as AvatarContextData);

export function AvatarProvider({ children }: AvatarProviderProps) {
  const { isLoggedIn } = useContext(UserContext);
  const [isOpenAvatarModal, setIsOpenAvatarModal] = useState(false);

  function openAvatarModal() {
    setIsOpenAvatarModal(true);
  }

  function closeAvatarModal() {
    setIsOpenAvatarModal(false);
  }

  return (
    <AvatarContext.Provider
      value={{
        isOpenAvatarModal,
        openAvatarModal,
        closeAvatarModal,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
}
