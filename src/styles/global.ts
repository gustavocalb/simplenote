import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 100ms
}

:root {
  --white: #fff;
  --background: #f2f3f5;
  --gray-line: #dcdde0;
  --text: #666666;
  --text-highlight: #b3b9ff;
  --title: #2e384d;
  --red: #e83f5b;
  --green: #4cd62b;
  --blue: #5965e0;
  --blue-dark: #4953b8;
  --blue-twitter: #2aa9e0;
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  color: var(--text);
  background: ${(props) => props.theme.colors.background};
  transition: background 1000ms;
}

body, input, textarea, button {
  font: 400 16px "Inter", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
}

::-webkit-scrollbar {
  width: .5rem;
  /* margin: auto 1rem; */
  background: none;
}

scroll-behavior: smooth;

::-webkit-scrollbar-corner {
  background: black
}
::-webkit-scrollbar-thumb {
  margin: .5rem;
  border-radius: .2rem;
  background: ${(props) => props.theme.colors.main.scrollbar.scrollColor};
}
::-webkit-scrollbar-track-piece {
  border-radius: .5rem;
  background: ${(props) => props.theme.colors.main.scrollbar.background};
}
`;
