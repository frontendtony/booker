import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bookme",
  description: "Simplify Appointment Booking for Your Customers",
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
