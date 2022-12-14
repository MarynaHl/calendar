import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
    margin-left: auto;
    margin-right: 15px;
`;

export const InputMonth = styled.input`
    width: 35px;
    ::-webkit-datetime-edit {
        display: none;
    }
    ::-webkit-calendar-picker-indicator {
        margin: auto;
        cursor: pointer;
    }
    border: 2px solid var(--main-color);
    :focus-visible {
        outline: none;
    }
`;
