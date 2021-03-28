import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { TextContext } from "../../context/TextContext";
import { Overlay } from "./viewNoteModal";
import { User } from "./../../utils/models/User";
import Link from "next/link";

import { TextCardProps } from "../Textcard/Textcard";
import api from "../../services/api";
import { Router } from "next/router";

export function ViewNoteModal(note: TextCardProps) {
  const {
    openTextEditModal,
    closeViewModal,
    handleDeleteNote,
    isOpenTextEditModal,
  } = useContext(TextContext);

  const [form, setForm] = useState({
    note_index: note.note_index,
    title: note.title,
    description: note.description,
  });

  async function handleDelete(event) {
    event.preventDefault();

    await handleDeleteNote(note.note_index);
  }

  return (
    <Overlay>
      <div className="overlay">
        <div className="container animate__zoomIn">
          {isOpenTextEditModal === true ? (
            closeViewModal
          ) : (
            <>
              <section>
                <label>{form.title}</label>
                <textarea
                  name="description"
                  id="description"
                  value={form.description}
                  readOnly={true}
                />
              </section>

              <div className="buttons">
                <button
                  type="button"
                  className="bnt-del"
                  onClick={handleDelete}
                >
                  Deletar <img src="icons/lixeira.svg" alt="" />
                </button>
                {/* <button type="button" onClick={() => openTextEditModal(
            note.note_index, 
            note._id, 
            note.title, 
            note.description
          )}>
            <img src="/icons/close.svg" alt="Fechar modal" />
          </button> */}
              </div>
              <div className="bnt-close">
                <button type="button" onClick={closeViewModal}>
                  <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Overlay>
  );
}
