import { Metadata } from 'next';
import { Info } from './info';
import { NewsList } from '@/widgets/news/News';

export const metadata: Metadata = {
  title: 'About agricultural machinery rental',
};

const About = () => {
  return (
    <>
      breadcrumbs
      <Info />
      <NewsList />
    </>
  );
};
export default About;
