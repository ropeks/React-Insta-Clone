import styled from 'styled-components';

export const AppStyles = styled.div`
    margin: auto;
    width: 500px;
    border-left: 2px solid gray;
    border-right: 2px solid gray;

    ${(props) => (props.login ? 'border: 0px;' : null)}
`;