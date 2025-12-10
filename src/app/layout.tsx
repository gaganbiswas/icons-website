import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://icons.gaganbiswas.com"),
  title: "Icons | Gagan Biswas",
  description:
    "A set of 16x16 pixel-perfect icons designed by the designers & developers for the designers & developers.",
  openGraph: {
    title: "Icons | Gagan Biswas",
    description:
      "A set of 16x16 pixel-perfect icons designed by the designers & developers for the designers & developers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${newsreader.className} antialiased w-full max-w-2xl mx-auto py-16 px-8`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={["light", "dark"]}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
