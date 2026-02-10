import "./globals.css";

export const metadata = {
  title: "Foodtuck | High Quality Coffee & Food",
  description: "Experience the best quality coffee and food maker in town.",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning is added to <html> to handle extension injections
    <html lang="en" suppressHydrationWarning>
      <body 
        className="bg-coffee-beans" 
        suppressHydrationWarning // Added here because extensions like ColorZilla target the body
      >
        {children}
      </body>
    </html>
  );
}