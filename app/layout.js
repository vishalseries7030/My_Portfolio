import Navbar from "../components/Navbar"; // Navbar ko import karo
import "./globals.css";
import Footer from "../components/Footer"; // ✅ Import Footer


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* ✅ Global Footer */}
      </body>
    </html>
  );
}

