import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  /* background: red; */

  display: flex;
  justify-content: center;
  align-items: center;

  main {
    width: 80%;
    height: 80%;

    margin: 0 0 0 10rem;

    background: ${(props) => props.theme.colors.main.background};

    transition: background 1000ms;

    border-radius: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button button {
    position: absolute;
    right: 8rem;
    bottom: 7.25rem;

    z-index: 10;

    width: 3rem;
    height: 3rem;
    background: #878686;
    border: 0;
    border-radius: 1rem;

    outline: none;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 200ms;
  }

  .button button img {
    width: 100%;
    margin: 0.5rem;
  }

  .button button:hover {
    background: #ababab;
  }

  main section {
    width: 100%;
    height: 80%;

    padding: 2rem;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    overflow-x: auto;
  }
`;
