import styled from "styled-components";

export const Container = styled.li`
    padding: 0 4px;
    background: ${({ colorDay, anotherMonth }) =>
        colorDay && anotherMonth === 0 ? "#edf8eb" : "white"};
    color: ${({ anotherMonth }) =>
        anotherMonth === 0 ? "black" : "var(--main-color)"};
`;

export const List = styled.ul`
    height: 95px;
    overflow: auto;
`;
