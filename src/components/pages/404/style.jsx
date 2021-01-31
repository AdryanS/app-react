import styled from "styled-components";

const Bodyy = styled.body`
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  /* imagem */
  .backg {
    position: fixed;
    margin: auto;
    width: 100%;
    height: 100%;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    background: linear-gradient(
      to left top,
      rgba(122, 122, 122, 0.23) 0%,
      rgba(100, 100, 100, 0.7) 100%
    );
    max-width: 900px;
    max-height: 500px;
    border-style: solid;
    border-width: 1.5px;
    border-color: orangered;
    border-radius: 20px;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: auto;
    background-clip: border-box, content-box;
    -webkit-background-clip: text;
  }
  .pao {
    width: 632px;
    height: 367px;
    background-color: red;
  }
  h3 {
    margin-top: -50px;
    font-family: "Red Hat Text", sans-serif;
    font-size: 150px;
    font-weight: 600;
    font-style: medium;
    line-height: 180px;
    background: linear-gradient(113deg, #ff1212 0%, #ff8743 99%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all ease 0.5;
  }
  h4 {
    width: 350px;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 50px;
    color: #d5d4d4;
  }
  p {
    width: 400px;
    height: 50px;
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
    -webkit-background-clip: text;
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
  .num {
    padding: auto;
  }
  @media only screen and (max-width: 900px) {
    h3 {
      margin-top: 10px;
      font-size: 15vmax;
      line-height: 16vmax;
    }
    h4 {
      margin: 2vmax;
      width: 70%;
      font-size: 4vmax;
      line-height: 35px;
    }
    p {
      margin-top: 20px;
      font-size: 2.5vmax;
    }
  }
`;

export default Bodyy;
