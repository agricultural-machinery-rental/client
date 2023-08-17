import Icon from './assets/location.svg';
import { StNextLinkLocation, StWrapLocation } from './styled';

export const LocationFieldContent = () => {
  return (
    <StNextLinkLocation href='#'>
      <StWrapLocation>
        <Icon />
        <span>Выбрать регион</span>
      </StWrapLocation>
    </StNextLinkLocation>
  );
};
