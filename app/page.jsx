import Link from 'next/link';

export const metadata = {
  title: 'Property Pulse | Home',
  description: 'Find the perfect rental property with Property Pulse',
  keywords: 'rental, property, real estate',
};


const HomePage = () => {
  return <div>
    <h1 className='text-3xl'>Welcome</h1>
    <Link href="/properties">Show Properties</Link>
  </div>
}

export default HomePage
