import styled from "styled-components";

export const Container = styled.body `
  background-color: rgb(43, 43, 43);
  margin: -8px;
  overflow-x: hidden;

  /* imagem */
  .bkg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(43, 43, 43);
    


  }
  img{
    width:100%;
    height: 99.7vh;
  }



  .glass {
    display: flex;
    position: absolute;
    max-width: 1640px;
    max-height: 900px;

    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 10;
    background: rgba(20, 20, 20, 0.3);
    backdrop-filter: blur(15px);
    border-radius: 0.417vmax;
    box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.5 );
    border: solid 0.013vw #6d6d6d
  }

  .img-principal {
    margin: 7vmax;
    max-width: 350px;
    max-height: 500px;
    width: 16vmax;
    height: 23vmax;
    border-radius: 0.417vmax;
    box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.7 );
    border: solid 0.013vw #6d6d6d

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
    color: #dcdcdc;
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
      position: fixed;
      color: #dcdcdc;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 40px;
      font-family: roboto;
      margin-top: 1vmax;
      z-index: 100;
    }
  
  }
  .cu{
    position: absolute;
width: 300px;
height: 70px;
left: 1297px;
top: 800px;
    background: linear-gradient(115deg ,rgba(0,0,0,0.2), transparent);
    backdrop-filter: blur(15px);
    border-radius: 0.417vmax;
    box-shadow: 0 0.417vmax 1.667vmax 0 rgba( 0, 0, 0, 0.5 );
    text-decoration:none;
    color: #fff;
    font-family: roboto;
    font-style: normal;
    font-weight: bold;
    text-align: center ;
    font-size: 1.563vmax;
    border: solid 0.013vw #6d6d6d;
    opacity: 0.8;
    cursor: pointer;
    
    }
  .cu2{
    margin-top:15px;
    

  }
`;

