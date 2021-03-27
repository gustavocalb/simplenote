import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  height: 50%;

  background: #949494;
  box-shadow: 1px 1px 0.5rem 3px rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0.6rem 0.1rem;

  border-radius: 0.5rem;
  /* border: 1px solid rgba(0,0,0,0.05); */

  .container {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    width: 100%;
    max-width: 100%;
    /* height: 100%; */
    /* margin-bottom: 1rem; */

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title .note-title {
    width: 100%;
  }
  .title .bnt {
    width: 10%;
    /* height: 30%; */

    background: none;

    display: flex;
    align-items: right;
    justify-content: right;
  }
  .title button {
    font-family: 'Inter', sans-serif;
    color: (--title);

    background: transparent;
    outline: none;
    border: 0px solid #d6be5c;
  }

  .title h2 {
    color: ${(props) => props.theme.colors.text.color};
    transition: color 1000ms;
  }

  .description {
    width: 100%;
    max-width: 100%;
    height: 100%;

    /* margin-bottom: 1rem; */

    display: flex;
    justify-content: center;

    word-wrap: break-word;
  }

  .description textarea {
    width: 100%;
    max-width: 100%;
    /* max-height: 85%; */

    padding-left: 1rem;
    margin: 0.3rem auto;

    /* background: #a3a3a3; */
    background: none;

    color: ${(props) => props.theme.colors.text.color};

    transition: color 1000ms;

    border: none;
    border-radius: 0.2rem;

    outline: none;

    overflow-x: auto;

    resize: none;
  }

  button {
    width: 100%;

    font: 1rem 600 "Inter", sans-serif;

    background: transparent;
    border: none;
  }
`;
