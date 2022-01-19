import React from 'react';
import {ContainerInput, DescriptionInput, InputTextarea, ErrorMessage} from './styles'

// import { Container } from './styles';

function Input({ label, errorMessage, rows = 5,...otherProps }) {
    return (
        <ContainerInput>
            <DescriptionInput>{label}</DescriptionInput>
            <InputTextarea
                {...otherProps}
                rows={rows}
                errorMessage={errorMessage}
            />
            <ErrorMessage>{errorMessage}</ErrorMessage>
        </ContainerInput>
        
    );
}

export default Input;
