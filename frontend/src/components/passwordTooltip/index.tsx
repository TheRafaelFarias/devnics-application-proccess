import React from 'react';
import { PasswordTooltipContainer } from './styles';

const PasswordTooltip: React.FC = () => {
  return (
    <PasswordTooltipContainer>
        <li>
            Minimum of 8 characters
        </li>
        <li>
            1 Capital letter
        </li>
        <li>
            1 Special character
        </li>
        <li>
            1 number
        </li>
    </PasswordTooltipContainer>
  );
}

export default PasswordTooltip;