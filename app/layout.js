import Footer from "@/compenents/foot"
export const metadata = {
  title: 'Detachez-vous',
  description: 'to do',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}
      
      <footer> <Footer/></footer>
      </body>
      
    </html>
  )
}
