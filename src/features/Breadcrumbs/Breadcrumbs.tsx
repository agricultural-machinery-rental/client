import Link from 'next/link';
import React from 'react';

interface Breadcrumb {
  text: string;
  url: string;
}
interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.url}>
          {index < breadcrumbs.length - 1 ? (
            <Link href={breadcrumb.url}>{breadcrumb.text}</Link>
          ) : (
            breadcrumb.text
          )}
          {index < breadcrumbs.length - 1 && <span> &gt; </span>}
        </span>
      ))}
    </div>
  );
};
