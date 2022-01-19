import React from 'react';

import { ContainerSelect, DescriptionSelect, List } from './styles';

function Select({label, description, options, ...otherProps}) {
  return(
        <ContainerSelect>
            <DescriptionSelect>{label}</DescriptionSelect>
            <List {...otherProps}>
                <option value="" selected disabled>{description}</option>
                {options.map(option => <option value={option.value}>{option.label}</option>)}
            </List>
        </ContainerSelect>  
    
    );
}

export default Select;