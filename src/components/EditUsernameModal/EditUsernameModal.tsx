import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { Overlay } from './editUsernameModal'

export function EditUsernameModal() {
  const {
    closeEditUsernameModal,
    handleEditUsername
  } = useContext(UserContext)

  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  function formChange(event: any) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    handleEditUsername(form);
  }

  return (
    <Overlay>
      <div className="overlay">
        <div className="container animate__zoomIn">
          <h2>Mudança de username</h2>
          <p>Insira um username e sua senha atual</p>
        <form method="post" onSubmit={handleSubmit}>
          <label>Username</label>
          <input name="name" autoComplete="off" type="text" onChange={formChange}/>

          <label>Senha atual</label>
          <input name="password" type="password" onChange={formChange}/>
          <div className="buttons">
              <button
                type="button"
                className="bnt-del"
                onClick={closeEditUsernameModal}
              >
                Cancelar
              </button>
              <button type="submit">
                Salvar
              </button>
            </div>
        </form>
        <div className="bnt-close">
              <button type="button" onClick={closeEditUsernameModal}>
                  <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
              </div>
        </div>
      </div>
    </Overlay>
  )
}
