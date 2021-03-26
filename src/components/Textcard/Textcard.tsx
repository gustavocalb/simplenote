import { useCallback, useContext, useState } from "react";
import { TextContext } from "../../context/TextContext";
import { TextEditModal } from "../TextEditModal/TextEditModal";
import { ViewNoteModal } from "../ViewNoteModal/ViewNoteModal";
import { Container } from "./textcard";

export interface TextCardProps {
  note_index: string;
  _id: string;
  title: string;
  description: string;
}

export default function Textcard(note: TextCardProps) {
  const [form, setForm] = useState({
    title: note.title,
    description: note.description,
  });

  const {
    openTextEditModal,
    isOpenTextEditModal,
    isOpenViewModal,
    openViewModal,
    id,
    title,
    description,
    note_index,
  } = useContext(TextContext);

  return (
    <>
      <Container>
        <div className="container">
          <div className="title">
            <div className="note-title">
              <h2>{note.title}</h2>
            </div>
            <div className="bnt">
              <button
                onClick={() =>
                  openTextEditModal(
                    note.note_index,
                    note._id,
                    note.title,
                    note.description
                  )
                }
              >
                <img src="icons/edit.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="description">
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={10}
              value={note.description}
              readOnly={true}
            />
          </div>
          <div className="bnt">
            <button
              className="bnt"
              onClick={() =>
                openViewModal(
                  note.note_index,
                  note._id,
                  note.title,
                  note.description
                )
              }
            >
              Ver mais
            </button>
          </div>
        </div>
      </Container>
      {isOpenTextEditModal && (
        <TextEditModal
          note_index={note_index}
          _id={id}
          description={description}
          title={title}
        />
      )}
      {isOpenViewModal && (
        <ViewNoteModal
          note_index={note_index}
          _id={id}
          description={description}
          title={title}
        />
      )}
    </>
  );
}
