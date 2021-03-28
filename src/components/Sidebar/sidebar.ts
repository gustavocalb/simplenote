import styled from "styled-components";

export const Container = styled.div`
  width: 10rem;
  height: 100vh;

  position: fixed;

  background: ${(props) => props.theme.colors.sidebar.background};

  transition: background 1000ms;

  display: flex;

  .container {
    flex: 1;

    display: flex;
    justify-content: space-between;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  header p {
    font-weight: 800;
  }

  header img.avatar {
    width: 90%;

    /* border: 2px solid #919191; */
    border-radius: 5rem;

    margin-bottom: 0.7rem;

    transition: background 1000ms;
  }

  header img.logo {
    width: 60%;

    /* border: 2px solid #919191; */
    /* border-radius: 5rem; */

    margin-bottom: 0.7rem;

    transition: background 1000ms;
  }

  header h3 {
    text-align: center;
    /* margin: .7rem auto; */
    color: ${(props) => props.theme.colors.text.color};
    transition: color 1000ms;
  }

  header a {
    width: 100%;

    margin: 1rem auto;
    /* padding: .2rem; */

    background: #e0e0e0;
    box-shadow: 1px 1px 0.5rem 1px rgba(0, 0, 0, 0.05);

    font-size: 1.15rem;
    font-family: "Nunito", sans-serif;
    font-weight: 700;

    text-align: center;

    border: none;
    border-radius: 0.3rem;

    transition: background 300ms;
  }

  header a:hover {
    background: #ebebed;
    box-shadow: 1px 1px 0.5rem 1px rgba(0, 0, 0, 0.1);
  }

  header button {
    width: auto;
    background: transparent;
    border: none;

    font-size: 0;
  }

  header button img.img-exit {
    width: 100%;

    margin: 0.5rem auto;

    /* background: var(--gray-line); */
    /* box-shadow: 1px 1px .5rem 1px rgba(0,0,0,0.05); */

    font-family: "Inter", sans-serif;
    font-weight: 500;

    border: none;
    border-radius: 2px;

    transition: color 1000ms;
  }

  main {
    margin: 0 0 5rem 0;

    display: flex;
    justify-content: center;
  }
  main ul li {
    width: 100%;

    list-style: none;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  main a {
    font-family: "Inter", sans-serif;
    font-weight: 600;

    color: ${(props) => props.theme.colors.text.color};
    transition: color 1000ms;

    margin: 1rem;
  }

  main button {
    background: transparent;
    border: none;

    font-size: 1.05rem;
    font-family: "Nunito", sans-serif;
    font-weight: 700;

    color: ${(props) => props.theme.colors.text.color};
    transition: color 1000ms;
  }

  footer {
    display: flex;
    justify-content: center;
  }
  footer button {
    width: 2rem;

    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  footer button img {
    width: 100%;

    transition: img 1000ms;
  }
`;
