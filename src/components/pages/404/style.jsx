import styled from "styled-components";

const Bodyy = styled.body`
  margin: 0;

  .body {
    background-color: rgb(43, 43, 43);
    margin: 0px;
  }
  /* imagem */
  .backg {
    position: fixed;
    margin: auto;
    width: 100%;
    height: 100%;
  }
  .container {
    background: linear-gradient(
      to left top,
      rgba(122, 122, 122, 0.23) 0%,
      rgba(100, 100, 100, 0.7) 100%
    );
    width: 890px;
    height: 516px;
    border-style: solid;
    border-width: 1.5px;
    border-color: orangered;
    border-radius: 20px;
    position: fixed;
    top: 232px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    margin: 0 auto;
    background-clip: border-box, content-box;
  }
  .pao {
    width: 632px;
    height: 367px;
    background-color: red;
  }
  h3 {
    padding-top: 35px;
    font-family: "Red Hat Text", sans-serif;
    font-size: 135px;
    font-weight: 600;
    font-style: medium;
    line-height: 179px;
    text-align: center;
    background: linear-gradient(113deg, #ff1212 0%, #ff8743 99%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all ease 0.5;
  }
  :hover {
    background-position: 100% 0;
    transition: all ease 0.5;
  }

  h4 {
    width: 322px;
    height: 94px;

    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;

    font-size: 40px;
    line-height: 47px;

    color: #bfbfbf;
  }
  p {
    width: 325px;
    height: 23px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    text-align: center;
    background: linear-gradient(
      145deg,
      #ff1212 2%,
      #ff8743 51%,
      blue 53%,
      cyan 100%
    );
    background-size: 200%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-decoration-line: underline;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  p:hover {
    font-size: 25px;
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
  }
  .voltar {
  }

  .mensagem {
  }

  .num {
    padding: auto;
  }
`;

export default Bodyy;
