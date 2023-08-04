import { Metadata } from 'next';
import { Info } from './widgets/Info';

export const metadata: Metadata = {
  title: 'About agricultural machinery rental',
};

const About = () => {
  return (
    <>
      breadcrumbs
      <Info />
    </>
  );
};
export default About;
