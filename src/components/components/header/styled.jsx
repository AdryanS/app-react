import styled from 'styled-components';

const Container = styled.div`

    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 100;
    background-color: rgba(0,0,0, 0.7);

    .buscar {
        width: 200px;
        height: 25px;
        background-color: #7D7D7D;
        border-style: none;
    }

    input[type="text"] {
        color: #fff;
        font-size: 15px;
        border-radius:0.417vmax;
    }
    
    input[type="text"]::placeholder {
        color: #fff;
        font-size: 15px;
    }


    .group_A {
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .hamburguer {
        display: block;
        width: 40px;
        height: 20px;
        
        .barra1 {
            background-color: #ffffff;
            width: 100%;
            height: 20%;
            margin-bottom: 15%;
            border-radius: 50px;
        }
        .barra2 {
            background-color: #ffffff;
            width: 100%;
            height: 20%;
            margin-bottom: 15%;
            border-radius: 50px;
        }
        .barra3 {
            background-color: #ffffff;
            width: 100%;
            height: 20%;
            margin-bottom: 15%;
            border-radius: 50px;
        }
    }

`;

export default Container;