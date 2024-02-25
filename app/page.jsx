import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';

export const metadata = {
  title: 'Property Pulse | Home',
  description: 'Find the perfect rental property with Property Pulse',
  keywords: 'rental, property, real estate',
};


const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );

};

export default HomePage
