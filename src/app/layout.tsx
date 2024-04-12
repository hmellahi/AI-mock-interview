import { ThemeProvider } from "@/components/contexts/theme-provider";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "behaveWise - AI-Powered Mock Interviews",
  openGraph: {
    title: "behaveWise - AI-Powered Mock Interviews",
    description:
      "behaveWise is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: [
      {
        url: "https://behavewise.vercel.app/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "behaveWise - AI-Powered Mock Interviews",
    description:
      "behaveWise is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["https://behavewise.vercel.app/opengraph-image"],
    creator: "@Hmellahiii",
  },
  // metadataBase: new URL("https://demo.useliftoff.com"), TODO
  themeColor: "#FFF",
  description:
    "behaveWise is an AI-powered mock interview platform that helps you practice for your next job interview.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
