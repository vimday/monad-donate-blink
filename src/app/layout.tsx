// src/app/layout.tsx

// additional import
import { Providers } from "@/provider";

// other code in the file ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Providers>{children}</Providers>
      </body>
    </html>
  );
}