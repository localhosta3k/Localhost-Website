import type { Metadata } from "next";
import "@/public/styles/style.scss";
import InitAnimations from "@/components/layout/InitAnimations";

export const metadata: Metadata = {
  title: "LocalHost | Software Development & IT Solutions Company",
  description: "Software Development & IT Solutions Company",
  keywords: [
    "Software",
    "IT",
    "Agency",
    "Javascript",
    "Typescript",
    "React",
    "nextjs",
    "nodejs",
    "expressjs",
    "MongoDB",
    "PostgresSql",
    "SQL",
    "React Native",
    "AppDevelopment",
    "IOSDevelopment",
    "Deployment",
    "Hosting",
  ],
  authors: [
    {
      name: "LocalHost",
      url: "https://www.instagram.com/localhost_a3k/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <InitAnimations />
      </body>
    </html>
  );
}
