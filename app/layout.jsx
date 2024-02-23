import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Pulse | Find The Perfect Rental',
  description: 'Find the perfect rental property with Property Pulse',
  keywords: 'rental, property, real estate',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>

      <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout