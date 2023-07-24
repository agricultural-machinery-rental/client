import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const StInputContainer = styled.div`
  //height: 50px;
  position: relative;
  width: 100%;
  border: 1px solid ${theme.colors.border};

  .profile_input {
    text-align: right;
  }
`;

export const StInput = styled.input`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  box-sizing: border-box;
  border: 0;
  color: ${theme.colorsText.primary};
  font-size: 18px;
  line-height: 25px;
  height: 3.1em;
  outline: 0;
  padding: 10px 20px 0;
  width: 100%;

  &:not(:placeholder-shown) ~ label,
  :focus ~ label {
    transform: translateY(-15px) translateX(10px) scale(0.7);
    color: ${theme.colorsText.secondary};
  }

  &:focus ~ label {
    color: ${theme.colors.error};
  }
`;

export const StError = styled.div`
  color: ${theme.colorsText.primary};
  padding: 5px;
  font-size: 12px;
  line-height: 1.2;
`;

export const StLabel = styled.label`
  color: ${theme.colorsText.secondary};
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 100%;
  transition:
    transform 200ms,
    color 200ms;
  top: 20px;
`;
