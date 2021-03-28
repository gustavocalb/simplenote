import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Overlay } from './editEmailModal'

export function EditEmailModal() {
  const {
    closeEditEmailModal
  } = useContext(UserContext)
  return (
    <Overlay>
      <div className="overlay">
        <div className="container">
        <form>
          <label>E-mail</label>
          <input name="email" type="email"/>

          <label>Password</label>
          <input name="password" type="password"/>
          <div className="buttons">
              <button
                type="button"
                className="bnt-del"
                onClick={closeEditEmailModal}
              >
                Cancelar
                {/* <img src="/icons/close.svg" alt=""/> */}
              </button>
              <button type="submit">
                Salvar
                {/* <img src="icons/check.svg" alt=""/> */}
              </button>
            </div>
        </form>
        </div>
      </div>
    </Overlay>
  )
}
