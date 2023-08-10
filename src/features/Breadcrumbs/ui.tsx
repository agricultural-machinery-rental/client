import { usePathname } from 'next/navigation';

import { BREADCRUMBS } from '@/shared/constants/breadcrumbs';

import ArrowSVG from './assets/Arrow.svg';
import {
  StBreadcrumbsItemWrap,
  StBreadcrumbsLink,
  StBreadcrumbsItem,
  ArrowSVGWrap,
} from './styled';
import { type Tbreadcrumb } from './typing';

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const activeBreadcrumbs: Tbreadcrumb[] = BREADCRUMBS.filter(breadcrumb =>
    pathname.includes(breadcrumb.url),
  );
  return (
    <StBreadcrumbsItemWrap>
      {activeBreadcrumbs.map((breadcrumb, index) => (
        <StBreadcrumbsItem key={breadcrumb.url}>
          {index < activeBreadcrumbs.length - 1 ? (
            <>
              <StBreadcrumbsLink href={breadcrumb.url}>{breadcrumb.text}</StBreadcrumbsLink>
              <ArrowSVGWrap>
                <ArrowSVG />
              </ArrowSVGWrap>
            </>
          ) : (
            breadcrumb.text
          )}
        </StBreadcrumbsItem>
      ))}
    </StBreadcrumbsItemWrap>
  );
};
