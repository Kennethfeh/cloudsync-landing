import "./globals.css";

export const metadata = {
  title: "CloudSync — Cloud Storage Simplified",
  description: "Secure, fast, and modern cloud storage for individuals and teams."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
