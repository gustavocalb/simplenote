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
    background: #4f4f4f;
    width: 100%;
    max-width: 80%;
    max-height: 80%;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    /* text-align: center; */
    position: relative;

    display: flex;
    /* justify-content: center; */
  }

  .container h2 {
    color: white;
    font-size: 2.25rem;

    margin: 0.5rem auto;
  }

  .container form {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .container header {
    font-weight: 600;
    color: var(--blue);

    display: flex;
    justify-content: left;
    /* align-items: center; */
    flex-direction: column;
  }

  .container label {
    font-size: 1.25rem;
    color: white;
    font-family: "Inter", sans-serif;
    font-weight: 600;

    margin-bottom: 0.3rem;
  }

  .container input {
    width: 100%;
    height: 3rem;

    margin: 0.5rem 0 0 0;
    padding-left: 1rem;

    font-size: 1.25rem;

    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 0.3rem;

    background: rgb(179, 179, 179);
    outline: none;
  }

  .container section {
    width: 100%;
    height: 100%;

    margin: 2rem auto;
  }

  .container section textarea {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 85%;

    padding-left: 1rem;
    margin: 0.1rem auto;

    font-size: 1rem;

    background: rgb(179, 179, 179);

    border: 1px solid rgb(126, 135, 154);
    border-radius: 0.2rem;

    outline: none;

    overflow-x: auto;

    resize: none;
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
    width: 30%;
    height: 3rem;
    background: #5fc947;
    border: none;
    border-radius: 0.5rem;

    color: var(--title);
    font-family: "Inter", sans-serif;
    font-weight: 600;

    transition: background 200ms;
  }

  .buttons button:hover {
    background: #68e34b;
  }
`;
