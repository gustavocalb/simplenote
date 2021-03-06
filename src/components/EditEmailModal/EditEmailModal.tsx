import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { Overlay } from './editEmailModal'

export function EditEmailModal() {
  const {
    closeEditEmailModal,
    handleEditEmail
  } = useContext(UserContext)

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function formChange(event: any) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    handleEditEmail(form);
  }

  return (
    <Overlay>
      <div className="overlay">
        <div className="container animate__zoomIn">
          <h2>Mudança de e-mail</h2>
          <p>Insira um e-mail e sua senha atual</p>
        <form method="post" onSubmit={handleSubmit}>
          <label>Novo e-mail</label>
          <input name="email" autoComplete="off" type="email" onChange={formChange}/>

          <label>Password</label>
          <input name="password" type="password" onChange={formChange}/>
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
        <div className="bnt-close">
              <button type="button" onClick={closeEditEmailModal}>
                  <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
              </div>
        </div>
      </div>
    </Overlay>
  )
}
