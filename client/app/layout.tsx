import "./globals.css";

export const metadata = {
  title: "CodeVision",
  description: "Visualize Algorithms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
