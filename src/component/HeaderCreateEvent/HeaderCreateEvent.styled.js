import styled from "styled-components";

export const Button = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 25px;
    color: white;
    background-color: #47a4cb;
    cursor: pointer;
`;

export const BackDrop = styled.div`
	position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
	visibility: ${({ dropdown }) => (dropdown ? "" : "hidden")};
	}`;
