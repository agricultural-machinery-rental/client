import { TLayout } from '@/shared/model';
import { StContainer } from '@/shared/styles/global';

const CatalogLayout: TLayout = ({ children }) => {
  return <StContainer>{children}</StContainer>;
};

export default CatalogLayout;
