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
    width: 40%;
    max-width: 40%;
    max-height: 40%;
    padding: 2rem 3rem;
    border-radius: 10px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    /* text-align: center; */
    position: relative;

    display: flex;
    /* justify-content: center; */
  }
  .container .description h2 {
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
    width: 100%;
    font-weight: 600;
    color: var(--blue);

    margin: 2rem auto;

    display: flex;
    justify-content: space-between;
    /* align-items: center; */
  }

  .container header .image {
    width: 60%;
  }

  .container header .image button {
    width: 8rem;
    height: 8rem;

    margin: auto 2rem;

    background: transparent;

    border: none;
    border-radius: 5rem;

    outline: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container header .image button img {
    width: 100%;
    /* border: 4px solid #000; */
    border-radius: 5rem;
  }

  .container header .image button img:hover {
    opacity: 0.8;
  }

  .container header .image .bnt-del {
    width: 90%;
  }

  .container header .image .bnt-del button {
    width: 60%;
    height: 10%;

    background-color: #eb4236;
    box-shadow: 0 0 60px rgba(0, 0, 0, .5);

    margin-top: 4rem;

    color: white;

    border: none;
    border-radius: 0.2rem;
  }
  
  .bnt-del button:hover {
    background: #ff2617;
  }

  .container header .input {
    width: 100%;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .container header .input .box-data {
    width: 100%;
    height: 50%;

    padding-left: 1rem;

    color: var(--title);

    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 0.3rem;

    background: rgb(179, 179, 179);
    outline: none;

    display: flex;
    align-items: center;
    justify-content: space-between
  }

  .container header .input .box-data button {
    width: 15%;
    margin: auto 1rem;
    padding: .2rem;

    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 0.3rem;

    background: #d9d9d9;

    font-family: 'Inter', sans-serif;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background 200ms;
  }

  .container header .input .box-data button:hover {
    background: #d1d1d1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .container label {
    font-size: 1.25rem;
    color: white;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    text-align: left;

    margin: 0.3rem 0;
  }

  .container section {
    width: 100%;
    height: 100%;

    margin: 2rem auto;
    display: flex;
    align-items: left;
    justify-content: left;
    flex-direction: column;
  }

  .container section textarea {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 85%;

    padding-left: 1rem;
    margin: 0.1rem auto;

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
    width: 50%;
    height: 3rem;
    background: #5fc947;
    border: none;
    border-radius: 0.5rem;

    margin: 2rem auto;

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
