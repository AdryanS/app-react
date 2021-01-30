import styled from 'styled-components';

const Bodyy = styled.body`
.body{
    background-color: rgb(43, 43, 43);
    margin: 0px;
}
/* imagem */
.background{
    position: fixed;
    margin: auto;
    width: 100%;
    height: 100%;
    filter: saturate(0);
}
/* formulario */
.background-principal{
    width: 570px ;
    height: 670px ;
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 950px;
    margin: auto;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.45);
}
.entrar{
    font-family: Roboto;
    font-size: 30px;
    margin: 0;
    margin-left: 60px;
    margin-top: 65px;
    margin-bottom: 70px;
    color: #ffffff;
    font-weight: 350;
}
/*input de email*/
.email_or_number{
    width: 434px;
    height: 65px;
    padding-left: 16px;
    margin: 0;
    color: #BDBDBD;
    font-size: 18px;
    background-color: #535353;
    border-style: none;
    border-radius: 5px;
}
input[type="email number"]{
    display: flex;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    
}
input[type="email number"]::placeholder{
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-weight: 300;
    font-size: 18px;
    color: #ffffffa1;
}
/*input de senha*/
.password_s {
    width: 434px;
    height: 65px;
    padding-left: 16px;
    display: flex;
    margin-bottom: 40px;
    margin-top: -18px;
    margin-left: auto;
    margin-right: auto;
    color: #BDBDBD;
    font-size: 18px;
    background-color: #535353;
    border-style: none;
    border-radius: 5px;
    
}
input[type="password"]::placeholder{
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-weight: 300;
    font-size: 18px;
    color: #ffffffa1;
    
}
/* buttons */
.link-1, .link-2 {
    text-decoration: none;
}
.button_entrar {
    width: 450px;
    height: 70px;
    display: flex;
    margin-top: -18px;
    margin-bottom: 35px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    background-image: linear-gradient(113deg, red 0%, yellow 49%, blue 52%, cyan 100%);
    border-style: none;
    color: #ffffff;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-weight: 350;
    transition: all .5s ease;
    background-size: 300% 100%;
}
.button_entrar:hover{
    background-position: 100% 0;
    transition: all .5s ease;
    cursor: pointer 
  }
.button_criarConta {
    width: 450px;
    height: 70px;
    display: flex;
    margin-top: -18px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    background: linear-gradient(113deg, #484848 0%, #484848 50%, blue 51%, cyan 100%);
    border-style: none;
    color: #ffffff;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-weight: 350;
    background-size: 300% 100%;
    transition: all .5s ease
}
.button_criarConta:hover{
    background-position: 100% 0;
    transition: all .5s ease;
    cursor: pointer 
}
@media (max-width: 1750px) {
    .background-principal{
        right: 600px;
    }
}
@media (max-width: 1250px) {
    .background-principal{
        width: 570px ;
        height: 670px ;
        position: fixed;
        right: 0;
    }
}
@media (max-width: 650px) {
    .background-principal{
        width: 90vw;
        height: 60vh;
        display: block;
    }
    .entrar{
        margin-left: 5vh;
        margin-top: 6vh;
        margin-bottom: 10vw;
        font-size: 2.5vmax;
        font-weight: 300;
    }
    .email_or_number{
        width: 70vw;
        height: 6vmax;
        font-size: 2vmax;
    }
    input[type="email number"]{
        margin-bottom: 2vmax;
    }
    input[type="email number"]::placeholder{
        font-size: 2vmax;
    }
    .password_s {
        width: 70vw;
        height: 6vmax;
        font-size: 2vmax;
        margin-bottom: 2vmax;
    }
    input[type="password"]::placeholder{
        font-size: 2vmax;
    }
    .button_entrar{
        width: 75vw;
        height: 6vmax;
        font-size: 2vmax;
        margin-bottom: 2.5vmax
    }
    .button_criarConta {
        width: 75vw;
        height: 6vmax;
        font-size: 2vmax;
    }
}
@media (max-height: 550px) {
    .background-principal{
        width: 60vw;
        height: 90vh;
        display: block;
    }
    .entrar{
        margin-left: 5vh;
        margin-top: 7vh;
        margin-bottom: 5vw;
        font-size: 3vmax;
        font-weight: 300;
    }
    .email_or_number{
        width: 50vw;
        height: 7vmax;
    }
    input[type="email number"] {
        margin-bottom: 0.5vmax;
    }
    .password_s {
        width: 50vw;
        height: 7vmax;
    }
    input[type="password"] {
        margin-bottom: 1vmax;
    }
    .button_entrar{
        width: 53vw;
        height: 6vmax;
        margin-bottom: 1vmax;
        padding-left: 8px;
        padding-right: 8px;
    }
    .button_criarConta {
        width: 53vw;
        height: 6vmax;
        padding-left: 8px;
        padding-right: 8px;
    }
}
`;

export default Bodyy;