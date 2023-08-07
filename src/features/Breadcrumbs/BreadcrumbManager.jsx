// components/BreadcrumbManager.tsx

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { BreadcrumbItem } from './BreadcrumbItem';

// interface BreadcrumbLink {
//     href: string;
//     label: string;
//   }

//   interface BreadcrumbManager {
//     asPath: string; // Тип для asPath
//   }

export const BreadcrumbManager = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0];
    let pathArray = pathWithoutQuery.split('/');
    pathArray.shift();

    pathArray = pathArray.filter(path => path !== '');

    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/');
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <Breadcrumbs>
      <BreadcrumbItem href='/'>Home</BreadcrumbItem>
      {breadcrumbs.map(breadcrumb => (
        <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href}>
          {breadcrumb.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};
