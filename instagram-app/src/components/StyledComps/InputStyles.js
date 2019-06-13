import styled from 'styled-components';

export const InputContainer = styled.div`
    width:fit-content;
    margin: auto;
    padding: 10px;
`;

export const Input = styled.input`
    text-align: center;
    height: 20px;
    margin: 5px 5px 5px 0;
    border: 2px solid;
    border-radius: 5%;
`;

export const Button = styled.button`
    color: white;
    background-color: black;
    margin: 5px;
    border: 2px solid;
    border-radius: 10%;

    &:hover {
        opacity: 0.7;
    }
`;