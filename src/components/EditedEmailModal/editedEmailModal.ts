import styled from 'styled-components'

export const Overlay = styled.div`
  .overlay {
    width: 30%;
    height: 8rem;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 10;
    right: 0;

    margin: 1rem;
    background: #e3e3e3;
    border-radius: 5px;
    border: 3px solid #949494;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.4);

    animation: backInRight;
    animation-duration: 1s;

    display: flex;
  }
  .container {
    width: 100%;
    max-height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container main {
    width: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .container .image {
    width: 30%;
  }
  .container .image img {
    width: 50%;
  }
  .container .text {
    width: 100%;

    display: flex;
    justify-content: left;
    flex-direction: column;
  }

  .container .text .title {
    font-size: 1.25rem;
    color: var(--title);
    margin-bottom: 10px;
  }

  .container .text .description {
    font-size: 1.10rem;
    color: var(--text);
    margin-bottom: 5px;
  }

  .container .bnt-close button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
  }
`;