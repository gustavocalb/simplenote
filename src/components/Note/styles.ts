import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;


  display: flex;
  justify-content: space-evenly;

  .welcome {
    width: 100%;

    margin-left: 10rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .welcome .title h2  {
    color: #fff;
    font-size: 2rem;
  }

  .welcome .title h3  {
    margin-bottom: 2rem;
    color: #fff;
    font-size: 1.70rem;
  }

  .welcome .buttons {
    width: 100%;

    display: flex;
    flex-direction: column;
  }

  .welcome p {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 1.50rem;
    color: #ededed;
  }

  .welcome .buttons a {
    width: 50%;

    padding: 1rem;
    margin-top: 3rem;

    background: var(--blue);
    border: none;
    border-radius: 1rem;

    font-size: 1.15rem;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: var(--background);


    box-shadow: 1px 1px .5rem 3px rgba(0,0,0,0.05);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background 300ms;
  }

  .welcome a:hover {
    background: #6f7bf7;
    box-shadow: 1px 1px .5rem 3px rgba(0,0,0,0.1);
  }

  .images {
    width: 100%;
    max-width: 100%;
    max-height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .images .login img {
    width: 70%;
  }

  .images .note {
    width: 60%;
    margin-bottom: 1rem;
  }

  .images .note img {
    width: 70%;
  }
`;

export const ContainerNewNote = styled.div`
    .container {
    width: 100%;
    background: red;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container .newNote {
    width: 100%;
  }

  .container .image {
    width: 100%;
  }

`;