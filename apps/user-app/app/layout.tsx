import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import { Providers } from "../providers";
import Appbar from "../components/appbar";
const bebas_Neue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PayMoney",
  description: "Money transfer made easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={bebas_Neue.className}>
        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
