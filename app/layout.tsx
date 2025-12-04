import "./globals.css";

export const metadata = {
  title: "Simple TodoApp",
  description: "Simple Todo APP usando Next.js 13 + TailwindCSS + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
