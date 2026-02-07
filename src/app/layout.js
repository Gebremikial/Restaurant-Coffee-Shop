import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply the pattern to the entire body */}
      <body className="bg-coffee-beans">
        {children}
      </body>
    </html>
  );
}