import { Metadata } from 'next';
import { Info } from './info';

export const metadata: Metadata = {
  title: 'About agricultural machinery rental',
};

const About = () => {
  return (
    <>
      breadcrumbs
      <Info />
      <div>Новости компании</div>
    </>
  );
};
export default About;
