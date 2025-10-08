import "./globals.css";

export const metadata = {
  title: "LRO Contractors",
  description: "UK-based shopfitting and construction specialists.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
