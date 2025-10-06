import "./globals.css";

export const metadata = {
  title: "My Site",
  description: "Built with Next.js + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
