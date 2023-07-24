import { StTitle } from './styled';
import { TTitle } from './typing';

export const Title = (props: TTitle) => {
  const { title } = props;

  return <StTitle>{title}</StTitle>;
};
