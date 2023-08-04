import { Metadata } from 'next';
import { Info } from '@/widgets/company/Info';
import { Breadcrumbs } from '@/features/Breadcrumbs/Breadcrumbs';

export const metadata: Metadata = {
  title: 'О компании',
};

const About = () => {
  return (
    <>
      <Breadcrumbs metadata={metadata} />
      <Info />
    </>
  );
};
export default About;
