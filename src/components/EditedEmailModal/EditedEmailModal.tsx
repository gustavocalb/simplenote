import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Overlay } from './editedEmailModal'

export function EditedEmailModal() {
  const {
    closeWelcomeModal,
    username,
    email
  } = useContext(UserContext)
  return (
    <>
      <Overlay>
        <div className="overlay animate__backInRight">
        <div className="container">
            <main>
            <div className="image">
              <img src="icons/cadastro.svg" alt=""/>
            </div>
            <div className="text">
              <div className="title">
                Email alterado com sucesso!
              </div>
              <div className="description">
                Olá {username}, seu email foi alterado com sucesso para: {email}
              </div>
            </div>
          </main>
        </div>
        </div>
      </Overlay>
    </>
  )
}