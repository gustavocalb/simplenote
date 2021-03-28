import styled from "styled-components";

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
    background: #616161;
    width: 30%;
    max-width: 50%;
    max-height: 40%;
    padding: 2rem 3rem;
    border-radius: 10px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    /* text-align: center; */
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    animation: zoomIn;
    animation-duration: 0.7s;
  }
  .container  h2 {
    color: white;
    font-size: 1.55rem;
  }

  .container  p {
    color: white;
    font-size: 1.25rem;

    margin: 1rem auto;
  }

  .container form {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  
  .container form input {
    width: 100%;
    padding: .3rem;

    margin: 1rem auto;

    background: rgb(179, 179, 179);
    color: (--title);

    border: 1px solid var(--title);
    border-radius: 5px;

    outline: none;
  }

  .bnt-del button:hover {
    /* background: #ff2617; */
  }

  .container header .input {
    width: 100%;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .container label {
    font-size: 1.25rem;
    color: white;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    text-align: left;

    margin: 0.3rem 0;
  }
  
  .container .bnt-close button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
  }

  .container .buttons {
    width: 100%;

    display: flex;
    justify-content: space-evenly;
  }
  .buttons button {
    width: 40%;
    height: 2rem;
    background: #5fc947;
    border: none;
    border-radius: 0.5rem;

    margin: 1rem auto;

    color: var(--title);
    font-family: "Inter", sans-serif;
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
    background: var(--background);

    transition: background 300ms;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttons button.bnt-del img {
    margin-left: 5px;
  }

  .buttons button.bnt-del:hover {
    background: #eb4236;
  }
`;
