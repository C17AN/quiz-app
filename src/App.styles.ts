import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from "./assets/images/background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${backgroundImage});
        background-size: cover;
        margin: 0;
        padding: 20px;
        display: flex;
        justify-content: center
    }

    * {
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: white;
  }
  .score {
    color: white;
    font-size: 2rem;
    margin: 0%;
  }
  h1 {
    background-image: linear-gradient(180deg, #fff, #cdcdcd);
    background-size: 100%;
    background-clip: text;
    /* --webkit-background-clip: text;
    --webkit-text-fill-color: transparent;
    -moz-background-clip: text; */
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 30px;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
