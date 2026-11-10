import { Poppins } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

// Font ki configuration
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

// Website ka title aur description
export const metadata = {
  title: 'KMC Vision College of Nursing and Health Sciences',
  description: 'Shaping the Future of Healthcare',
};

// Ek hi main Layout function jisme Navbar, main content, aur Footer shamil hain
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-background text-gray-900 antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}