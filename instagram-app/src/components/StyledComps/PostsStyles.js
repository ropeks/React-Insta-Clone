import styled from 'styled-components';

export const Container = styled.div`
    padding: 5px;
    border-top: 2px solid gray;
`;

export const User = styled.div`
    display: flex;

    img {
        margin: 0 5px;
        width: 30px;
        border-radius: 50%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`;

export const PostedImage = styled.img`
    margin: 5px -5px;
    width: 500px;
`;

export const Likes = styled.div`
    display: flex;

    div {
        margin-right: 5px;
    }
`;