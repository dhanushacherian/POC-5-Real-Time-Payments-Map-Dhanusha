import "./globals.css";

export const metadata = {
  title: "Real-Time Payments Map",
  description:
    "Explore real-time payment systems and instant payment infrastructure across different countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
