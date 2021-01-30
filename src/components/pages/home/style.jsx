import styled from 'styled-components'

const Bodyy = styled.body`
.backg{
    position: fixed;
    margin: auto;
    width: 100%;
    height: 100%;
}
.background-principal{
    width: 1440px;
    height: 750px;
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.35);
}
.dive{
    display: flex;
    flex-direction: row;
}
.button{
    width: 400px;
    height: 300px;
    border-radius: 25px;
    border-style: none;
    margin-left: 60px;
    margin-top: 225px;
    background: rgb(255,0,0);
    background: linear-gradient(141deg, rgba(255,0,0,1) 0%, rgba(255,184,0,1) 100%);
    div{
        position: static;
        
        p{
            margin: 25px;
            font-size: 25px;
            color: #f4f4f4;
            font-family: Roboto;
            font-weight: 400;
        }
        img{
            height: 125px;
            width: 125px;
        }
    }
}

.sair {
    img {
        left: 30px;
        bottom: 30px;
        position: fixed;
        width: 50px;
        height: 50px;
    }
}

@media (max-width: 1450px) {
    .background-principal{
        width: 970px;
        height: 490px;
    }
    .button{
        width: 270px;
        height: 190px;
        margin-left: 30px;
        margin-top: 150px;
        div{
            position: static;
            
            p{
                margin: 15px;
                font-size: 18px;
            }
            img{
                height: 80px;
                width: 80px;
            }
        }
    }
}

@media (max-width: 950px) {
    .background-principal{
        max-width: 970px;
        max-height: 490px;
        width: 80vmax;
        height: 40vmax;
    }
    .button{
        max-width: 270px;
        max-height: 190px;
        width: 24vmax;
        height: 17vmax;
        margin-left: 2vmax;
        margin-top: 10vmax;
        border-radius: 2vmax;
        div{
            position: static;

            p {
                font-size: 2vmax;
            }
            img{
                max-height: 80px;
                max-width: 80px;
                height: 7vmax;
                width: 7vmax;
            }
        }
    }
    .sair {
        img {
            left: 15px;
            bottom: 15px;
            width: 4vmax;
            height: 4vmax;
        }
    }
}


@media (orientation: portrait) {
.background-principal{
    max-width: 310px;
    max-height: 670px;
    width: 45vmax;
    height: 75vmax;
}
.dive{
    display: flex;
    flex-direction: column;
}
.button{
        max-width: 270px;
        max-height: 190px;
        width: 23vmax;
        height: 18vmax;
        text-decoration: none;
        display: flex;
        align-items: center;
        align-content: center;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5vmax;
        div{
            position: static;
        p{
            text-decoration: none;
            margin: 3px;
            font-size: 2vmax;
            margin-left: 5vmax;
        }
        img{
            height: 9vmax;
            width: 9vmax;
            margin-left: 6vmax;
        }
    }
}

.sair {
    img {
        width: 4vmax;
        height: 4vmax;
    }
}
}
`;

export default Bodyy;