export const metadata = {
  title: 'Detachez-vous',
  description: 'to do',
}
import Footer from "@/components/footer";
import Provider from "@/components/providers";
import '../styles/style.css '

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
            {children}
        </Provider>
      </body>
    </html>
    

  )
}
