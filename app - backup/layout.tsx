import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Pushparaj Murugavel | Writer. Traveller. Storyteller.",
  description:
    "Official website of Pushparaj Murugavel — writer, traveller and storyteller.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}