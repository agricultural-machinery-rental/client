import { FC } from 'react';

import ArrowSVG from './assets/Arrow.svg';
import { StBreadcrumbsItemWrap, StBreadcrumbsLink, StBreadcrumbsItem } from './styled';
import { type Tbreadcrumb } from './typing';

export const Breadcrumbs: FC<Tbreadcrumb> = ({ breadcrumbs }) => {
  return (
    <StBreadcrumbsItemWrap>
      {breadcrumbs.map((breadcrumb, index) => (
        <StBreadcrumbsItem key={breadcrumb.url}>
          {index < breadcrumbs.length - 1 ? (
            <StBreadcrumbsLink href={breadcrumb.url}>{breadcrumb.text}</StBreadcrumbsLink>
          ) : (
            breadcrumb.text
          )}
          {index < breadcrumbs.length - 1 && <ArrowSVG />}
        </StBreadcrumbsItem>
      ))}
    </StBreadcrumbsItemWrap>
  );
};
