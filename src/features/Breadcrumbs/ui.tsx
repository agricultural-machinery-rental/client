import { usePathname } from 'next/navigation';

import { BREADCRUMBS } from '@/shared/constants/breadcrumbs';

import ArrowSVG from './assets/Arrow.svg';
import { StBreadcrumbsItemWrap, StBreadcrumbsLink, StBreadcrumbsItem } from './styled';
import { type Tbreadcrumb } from './typing';

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const activeBreadcrumbs: Tbreadcrumb[] = BREADCRUMBS.filter(breadcrumb =>
    pathname.includes(breadcrumb.url),
  );
  if (pathname !== '/')
    return (
      <StBreadcrumbsItemWrap>
        {activeBreadcrumbs.map((breadcrumb, index) => (
          <StBreadcrumbsItem key={index}>
            {index < activeBreadcrumbs.length - 1 ? (
              <>
                <StBreadcrumbsLink href={breadcrumb.url}>{breadcrumb.text}</StBreadcrumbsLink>
                <ArrowSVG width={14} height={14} />
              </>
            ) : (
              breadcrumb.text
            )}
          </StBreadcrumbsItem>
        ))}
      </StBreadcrumbsItemWrap>
    );
};
