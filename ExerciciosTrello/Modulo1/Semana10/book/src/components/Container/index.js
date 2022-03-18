import React from 'react';
import {ContainerDefault} from './styles.js';


function Container({children}) {
  return(
      <ContainerDefault>
          {children}
      </ContainerDefault>
  );
}

export default Container;