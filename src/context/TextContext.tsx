import axios from "axios";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { TextCreateModal } from "../components/TextCreateModal/TextCreateModal";
import { TextEditModal } from "../components/TextEditModal/TextEditModal";
import api from "../services/api";

interface TextContextData {
  isOpenTextEditModal: boolean;
  isOpenViewModal: boolean;
  openTextCreateModal: () => void;
  closeTextCreateModal: () => void;
  openTextEditModal: (
    note_index: string,
    _id: string,
    title: string,
    description: string
  ) => void;
  openViewModal: (
    note_index: string,
    _id: string,
    title: string,
    description: string
  ) => void;
  closeViewModal: () => void;
  closeTextEditModal: () => void;
  handleUpdateNote: (form: {
    note_index: string;
    title: string;
    description: string;
  }) => Promise<void>;
  handleCreateNote: (form: {
    title: string;
    description: string;
  }) => Promise<void>;
  handleDeleteNote: (id) => Promise<void>;
  id: string;
  title: string;
  description: string;
  note_index: string;
  notesState: Note[];
}

interface TextProviderProps {
  children: ReactNode;
  notes: Note[];
}

interface Note {
  _id: string;
  title: string;
  description: string;
  note_index: string;
}

export const TextContext = createContext({} as TextContextData);

export function TextProvider({ children, notes }: TextProviderProps) {
  const [isOpenTextCreateModal, setIsOpenTextCreateModal] = useState(false);
  const [isOpenTextEditModal, setIsOpenTextEditModal] = useState(false);
  const [isOpenViewModal, setIsOpenViewModal] = useState(false);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [note_index, setNode_index] = useState("");
  const [notesState, setNotesState] = useState(notes);

  function openTextCreateModal() {
    setIsOpenTextCreateModal(true);
  }

  function closeTextCreateModal() {
    setIsOpenTextCreateModal(false);
  }

  function openTextEditModal(
    note_index: string,
    _id: string,
    title: string,
    description: string
  ) {
    setId(_id);
    setTitle(title);
    setDescription(description);
    setNode_index(note_index);

    setIsOpenTextEditModal(true);
  }

  function closeTextEditModal() {
    setIsOpenTextEditModal(false);
  }

  function openViewModal(
    note_index: string,
    _id: string,
    title: string,
    description: string
  ) {
    setId(_id);
    setTitle(title);
    setDescription(description);
    setNode_index(note_index);

    setIsOpenViewModal(true);
  }

  function closeViewModal() {
    setIsOpenViewModal(false);
  }

  async function handleUpdateNote(form) {
    await api
      .put("/api/controllers/noteController/editNote", form)
      .then((response) => {
        console.log(response);

        const updatedNotes = notesState.map((note) => {
          const { note_index, title, description } = form;

          if (note.note_index === note_index) {
            return {
              _id: note._id,
              title,
              description,
              note_index,
            };
          }

          return note;
        });

        setNotesState(updatedNotes);
        closeTextEditModal();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function handleCreateNote(form) {
    try {
      const response = await api.post(
        "/api/controllers/noteController/createNewNote",
        form
      );

      await api
        .get("/api/controllers/noteController/findNote")
        .then((response) => {
          console.log(response);

          setNotesState(response.data);

          closeTextCreateModal();
        });
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDeleteNote(note_index: string) {
    await api
      .post("/api/controllers/noteController/deleteNote", {
        note_index: note_index,
      })
      .then((response) => {
        const notesFiltered = notesState.filter(
          (note) => note.note_index !== note_index
        );

        setNotesState(notesFiltered);
        closeTextEditModal();

        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <TextContext.Provider
      value={{
        isOpenTextEditModal,
        isOpenViewModal,
        openTextCreateModal,
        closeTextCreateModal,
        openTextEditModal,
        closeTextEditModal,
        openViewModal,
        closeViewModal,
        handleUpdateNote,
        handleCreateNote,
        handleDeleteNote,
        id,
        title,
        description,
        note_index,
        notesState,
      }}
    >
      {children}
      {isOpenTextCreateModal && <TextCreateModal />}
    </TextContext.Provider>
  );
}
