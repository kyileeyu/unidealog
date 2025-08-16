import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface AnalyticsProps {
  googleAnalyticsId?: string;
}

export function Analytics({ googleAnalyticsId }: AnalyticsProps) {
  if (!googleAnalyticsId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}');
        `}
      </Script>
    </>
  );
}

interface SiteVerificationProps {
  google?: string;
  naver?: string;
}

export function SiteVerification({ google, naver }: SiteVerificationProps) {
  return (
    <>
      {google && (
        <meta name="google-site-verification" content={google} />
      )}
      {naver && (
        <meta name="naver-site-verification" content={naver} />
      )}
    </>
  );
}
