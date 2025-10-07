import "./globals.css";

export const metadata = {
  title: "LRO Contractors",
  description: "Built with Next.js + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
