// components/BreadcrumbItem.tsx
import React from 'react';
import Link from 'next/link';

// interface BreadcrumbItemProps {
//   href: string;
//   children: React.ReactNode;
// }

export const BreadcrumbItem = ({ href, children, ...props }) => {
  return (
    <li {...props}>
      <Link href={href} passHref>
        {children}
      </Link>
    </li>
  );
};
