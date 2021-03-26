import styled from 'styled-components'

export const Overlay = styled.div`
.overlay {
  background: rgb(77, 77, 77, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  /* margin: auto 1rem; */

  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: rgba(122, 122, 122, 0.8);
  width: 40%;
  max-width: 50%;
  max-height: 70%;
  padding: 2rem 3rem;
  border-radius: 10px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  /* text-align: center; */
  position: relative;

  display: flex;
  flex-direction: column;
}

.container .bnt-close button {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;
  font-size: 0;
}

.container header {
  width: 100%;

  border-bottom: 2px solid #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

.container header img {
  width: 8rem;

  margin-bottom: 1rem;
}

.container main {
  width: 100%;
  height: 1rem;

  margin: .5rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.container main section {
  width: 100%;
  max-width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.container main section button {
  background: transparent;
  border:none;
  margin: .5rem;
  outline: none;
}

.container main section img {
  width: 6rem;
}

.container .buttons {
  width: 100%;

  margin-top: 4rem;

  display: flex;
  justify-content: space-evenly;
}

.buttons button {
  width: 30%;
  height: 3rem;
  background: #5fc947;
  border: none;
  border-radius: .5rem;

  color: var(--title);
  font-family: 'Inter', sans-serif;
  font-weight: 600;

  transition: background 200ms;

  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons button img {
  margin-left: 5px;
}

.buttons button:hover {
  background: #68e34b;
}

.buttons button.bnt-del {
  background: #d43b31;

  transition: background 300ms;

  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons button.bnt-del img {
  /* margin-left: 2px; */
}

.buttons button.bnt-del:hover {
  background: #eb4236;
}
`;    
