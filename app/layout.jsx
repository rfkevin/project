import '@fortawesome/fontawesome-free/css/all.min.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './global.css'
import { Inter } from 'next/font/google';
import Provider from './components/providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Detachez-vous',
  description: 'to do',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
            {children}
        </Provider>
      </body>
    </html>
    

  )
}
