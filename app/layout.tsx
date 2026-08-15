import './globals.css';

export const metadata = {
  title: 'WhatsApp Web',
  description: 'An unaffiliated open-source Stage example adapted from Stream.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
