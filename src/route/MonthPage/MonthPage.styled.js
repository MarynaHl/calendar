import styled from "styled-components";

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(
        ${({ quantityCells }) => (quantityCells === 35 ? 5 : 6)},
        125px
    );
    grid-gap: 1px;
    margin-top: 15px;
    background: var(--main-color);
    border: 1px solid var(--main-color);
`;

export const Box = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;

export const ButtonLocal = styled.button`
    margin-right: 10px;
    padding: 10px;
    border: none;
    border-radius: 25px;
    color: ${({ store }) =>
        store === "Local" ? "white" : "var(--accent-color)"};
    background: ${({ store }) => (store === "Local" ? "#47a4cb" : "white")};
    cursor: pointer;
`;

export const ButtonAPI = styled.button`
    padding: 10px;
    border: none;
    border-radius: 25px;
    color: ${({ store }) =>
        store === "API" ? "white" : "var(--accent-color)"};
    background: ${({ store }) => (store === "API" ? "#47a4cb" : "white")};
    cursor: pointer;
`;
