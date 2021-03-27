import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Overlay } from './welcomeModal'

export function WelcomeModal() {
  const {
    closeWelcomeModal,
    username
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
                Cadastro feito com sucesso!
              </div>
              <div className="description">
                Ola {username}, seja bem-vindo(a) ao Simple Note!
              </div>
            </div>
            <div className="bnt-close">
              <button type="button" onClick={closeWelcomeModal}>
                <img src="/icons/close.svg" alt="Fechar modal" />
              </button>
            </div>
          </main>
        </div>
        </div>
      </Overlay>
    </>
  )
}