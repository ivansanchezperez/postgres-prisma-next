import "./globals.css";
import { Sanchez } from "next/font/google";

import { Providers } from "./providers";

export const metadata = {
  title: "Vercel Postgres Demo with Prisma",
  description:
    "A simple Next.js app with Vercel Postgres as the database and Prisma as the ORM",
};

const sanchez = Sanchez({
  variable: "--font-sanchez",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" style={{ background: "#d6d9e1" }}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body
        className={`${sanchez.variable} font-sanchez`}
        style={{ margin: 0, minHeight: "100%" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
