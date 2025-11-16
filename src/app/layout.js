import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "./globals.css";

export const metadata = {
  title: "VyomGarud – UAV Systems",
  description: "Military-grade UAV and drone technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-light">
        {children}
      </body>
    </html>
  );
}
