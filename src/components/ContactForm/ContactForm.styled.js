import styled from "styled-components";
import { Field, Form } from 'formik';

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 400px;
    padding: 16px;
    border: 2px solid black;
`

export const Input = styled(Field)`
    padding: 8px;
    width: 200px;
    font-size: large;
    outline: none;
    border-radius: 8px;
    :focus {
        outline: 1px solid blue;
    }
`

export const Button = styled.button`
    width: max-content;
    padding: 4px;
    font-family: inherit;
    font-size: medium;
    border-radius: 8px;
`