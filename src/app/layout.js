import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "JKX Vendas",
  description: "Site de vendas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
