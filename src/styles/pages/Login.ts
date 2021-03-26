import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url("backgrounds/login.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #dedede;
  background-position: center;
  background-attachment: fixed;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .seta {
    position: absolute;

    top: 1rem;
    left: 1rem;

    margin: 0.2rem 0 0 1.1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .seta a {
  }

  .image {
    width: 100%;

    /* background: red; */
  }

  .image img {
    width: 80%;

    margin-left: 6rem;
  }

  .container {
    width: 100%;
    height: 100%;

    margin: auto;

    display: flex;
    /* align-items: center;   */
    /* justify-content: space-between; */
  }

  .container img {
    width: 30%;
    /* height: 50%; */
  }

  .form-container {
    width: 60%;
    height: 60%;

    margin: 10rem auto;

    background-color: #b3b4b5;
    box-shadow: 1px 1px 0.5rem 1px rgba(0, 0, 0, 0.05);

    border-radius: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .box-container {
    width: 100%;

    background-color: #b3b4b5;

    border-radius: 1rem;

    margin: 3rem;

    text-align: left;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .description {
    width: 60%;

    display: flex;
    justify-content: space-between;
  }
  .description h2 {
    width: 100%;

    margin-bottom: 5px;

    /* background: red; */

    color: #fff;

    font-family: "Nunito", sans-serif;
    font-weight: 800;
    font-size: 2.25rem;
  }
  form {
    /* background: rgba(255, 255, 255, 0.03); */

    width: 70%;
    max-width: 1000px;

    /* margin: 32px auto; */
    padding: 32px 34px;

    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  label {
    width: 100%;
    font-size: 1.2rem;
    font-family: "Nunito", sans-serif;

    color: #fff;
  }

  label img {
    width: 1rem;
    height: 1rem;

    margin: auto;
  }
  input {
    /* reset appeareance */
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    /* box */
    width: 100%;

    padding: 14px 10px;

    border: none;

    background-color: transparent;

    outline: none;

    /* text */
    color: var(--text);
    font-size: 1em;
  }

  .input {
    margin-bottom: 24px;
    position: relative;

    border-bottom: 1px solid var(--title);

    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .input img {
    width: 2rem;
    height: 2rem;
  }
  button {
    margin: 2rem 0 0 0;

    width: 100%;

    padding: 1rem;

    border: 0;

    cursor: pointer;

    background: #3cdc8c;
    box-shadow: 1px 1px 0.5rem 1px rgba(0, 0, 0, 0.05);

    border-radius: 0.5rem;

    color: white;

    font-size: 1rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;
  }
  button:hover {
    background: #36cf82;
  }

  span {
    background: #e74d47;
    width: fit-content;
    height: fit-content;
    line-height: 5vh;
    padding-right: 2vw;
    padding-left: 2vw;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    svg {
      margin: auto 0.4rem;
    }

    p {
      /* margin: auto .5rem; */

      color: white;

      font-size: 15px;
      font-family: "Nunito", sans-serif;
      font-weight: 800;
    }
  }
  a {
    margin: 0.3rem auto;
  }
`;
