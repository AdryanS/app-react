import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(43, 43, 43);
  margin: 0;

  /* imagem */
  .background {
    position: fixed;
    margin: auto;
    width: 100%;
    height: 100%;
  }

  .glass {
    display: flex;
    position: fixed;
    max-width: 1640px;
    max-height: 900px;

    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 10;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(30px);
  }

  .img-principal {
    margin: 7vmax;
    max-width: 350px;
    max-height: 500px;
    width: 16vmax;
    height: 23vmax;
  }

  .nomeFilme {
    position: relative;
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 60px;
    font-family: roboto;
    margin-top: 7vmax;
    z-index: 100;
  }

  .info {
    position: flex;
    display: flex;
    flex-direction: row;
    margin-top: 2vmax;
  }

  h5 {
    color: #b5b5b5;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    font-family: roboto;
    margin-right: 30px;
    z-index: 200;
  }

  .actors{
    margin-top: 2.5vmax;

    h3 {
      color: #fff;
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      line-height: 20px;
      font-family: roboto;
      margin-right: 30px;
      z-index: 200;
      margin-bottom: 1.5vmax;
    }
    h5 {
    color: #dcdcdc;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 20px;
    font-family: roboto;
    margin-right: 30px;
    z-index: 200;
  }
  }

  .historia {
    margin-top: 2vmax;
    max-width: 800px;
    width: 45vmax;

    h2 {
      position: relative;
      color: #fff;
      font-style: normal;
      font-weight: bold;
      font-size: 35px;
      line-height: 60px;
      font-family: roboto;
      z-index: 100;
    }

    p {
      position: relative;
      color: #b5b5b5;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 40px;
      font-family: roboto;
      margin-top: 1vmax;
      z-index: 100;
    }
  }
`;
