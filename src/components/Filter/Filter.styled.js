import styled from "styled-components";

export const FilterForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const Input = styled.input`
    padding: 4px;
    width: 200px;
    font-size: large;
    outline: none;
    border-radius: 8px;
    :focus {
        outline: 1px solid blue;
    }
`