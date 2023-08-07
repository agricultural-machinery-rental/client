'use client';
// components/Breadcrumb.tsx
import React from 'react';
import { Children } from 'react';
import { Fragment } from 'react';

// interface BreadcrumbProps {
//   items: React.ReactNode[];
// }

export const Breadcrumbs = ({ children }) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>/</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <nav className='mx-8 md:mx-16 lg:mx-32 mt-8' aria-label='breadcrumb'>
      <ol className='flex items-center space-x-4'>{childrenWtihSeperator}</ol>
    </nav>
  );
};
