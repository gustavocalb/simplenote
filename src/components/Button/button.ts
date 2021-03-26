import styled from "styled-components";

export const Container = styled.div`
  button {
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
`;
