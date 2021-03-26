import { useContext } from "react";
import { TextContext } from "../../context/TextContext";
import { UserContext } from "../../context/UserContext";
import { Container } from "./button";

export function Button() {
  const { openTextCreateModal } = useContext(TextContext);
  const { isLoggedIn } = useContext(UserContext);
  return (
    <>
      {isLoggedIn === false ? (
        ""
      ) : (
        <>
          <Container>
            <button type="button" onClick={openTextCreateModal}>
              <img src="icons/plus.svg" alt="" />
            </button>
          </Container>
        </>
      )}
    </>
  );
}
