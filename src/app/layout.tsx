import { ThemeProvider } from "@/shared/lib/theme-provider";
import { generateMetadata as createMetadata, generateJsonLd } from "@/shared/lib/seo";
import { Analytics, JsonLd, SiteVerification } from "@/shared/ui/seo";
import { SITE_CONFIG } from "@/shared/config/site";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = createMetadata({
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  keywords: ["블로그", "개발", "웹개발", "프론트엔드", "Next.js", "React", "TypeScript"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = generateJsonLd({
    type: "Website",
    data: {
      additionalType: "Blog",
    },
  });

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <SiteVerification 
          google={process.env.GOOGLE_SITE_VERIFICATION}
          naver={process.env.NAVER_SITE_VERIFICATION}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <JsonLd data={websiteJsonLd} />
        <Analytics googleAnalyticsId={process.env.GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  );
}
