export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>The fuck</title>
      </head>
      <h2>The fuck is this</h2>
      <body>{children}</body>
    </html>
  );
}
