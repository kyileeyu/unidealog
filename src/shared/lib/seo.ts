import { SITE_CONFIG } from "@/shared/config/site";
import type { Metadata } from "next";

interface SEOConfig {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  url?: string;
  noIndex?: boolean;
}

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title,
    description = SITE_CONFIG.description,
    image = "/og-image.png",
    type = "website",
    keywords = [],
    author = SITE_CONFIG.author.name,
    publishedTime,
    modifiedTime,
    url,
    noIndex = false,
  } = config;

  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const fullUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url;
  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_CONFIG.url}${image}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: author }],
    creator: author,
    publisher: SITE_CONFIG.name,

    // Open Graph
    openGraph: {
      type,
      locale: "ko_KR",
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || SITE_CONFIG.name,
        },
      ],
    },
    // Additional metadata
    alternates: {
      canonical: fullUrl,
    },

    // Robots
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Verification (구글 서치 콘솔, 네이버 웹마스터 도구에서 사용)
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      other: process.env.NAVER_SITE_VERIFICATION
        ? {
            "naver-site-verification": process.env.NAVER_SITE_VERIFICATION,
          }
        : undefined,
    },
  };

  // Article specific metadata
  if (type === "article" && (publishedTime || modifiedTime)) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [author],
      section: "Technology",
      tags: keywords,
    };
  }

  return metadata;
}

interface JsonLdWebsiteData {
  additionalType?: string;
  potentialAction?: unknown;
}

interface JsonLdArticleData {
  title: string;
  description: string;
  author?: string;
  publishedTime: string;
  modifiedTime?: string;
  url: string;
  image?: string;
  keywords?: string[];
}

interface JsonLdPersonData {
  jobTitle?: string;
  worksFor?: string;
  knowsAbout?: string[];
}

// JSON-LD 구조화 데이터 생성
export function generateJsonLd(
  config:
    | { type: "Website"; data: JsonLdWebsiteData }
    | { type: "Article"; data: JsonLdArticleData }
    | { type: "Person"; data: JsonLdPersonData }
    | { type: "Organization"; data: Record<string, unknown> }
) {
  const { type, data } = config;

  const baseContext = {
    "@context": "https://schema.org",
    "@type": type,
  };

  switch (type) {
    case "Website":
      return {
        ...baseContext,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        author: {
          "@type": "Person",
          name: SITE_CONFIG.author.name,
          email: SITE_CONFIG.author.email,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
        ...(data.additionalType && { additionalType: data.additionalType }),
      };

    case "Article":
      return {
        ...baseContext,
        headline: data.title,
        description: data.description,
        author: {
          "@type": "Person",
          name: data.author || SITE_CONFIG.author.name,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
        },
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime || data.publishedTime,
        url: `${SITE_CONFIG.url}${data.url}`,
        image: data.image
          ? `${SITE_CONFIG.url}${data.image}`
          : `${SITE_CONFIG.url}/og-image.png`,
        keywords: data.keywords?.join(", "),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_CONFIG.url}${data.url}`,
        },
        articleSection: "Technology",
      };

    case "Person":
      return {
        ...baseContext,
        name: SITE_CONFIG.author.name,
        email: SITE_CONFIG.author.email,
        jobTitle: data.jobTitle || "Full-stack Developer",
        url: SITE_CONFIG.url,
        sameAs: Object.values(SITE_CONFIG.author.socialLinks),
        ...data,
      };

    default:
      return { ...baseContext, ...data };
  }
}

// 읽기 시간 계산
export function calculateReadingTime(
  content: string,
  wordsPerMinute = 200
): number {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

// 발췌문 생성
export function generateExcerpt(content: string, maxLength = 160): string {
  // HTML 태그 제거
  const plainText = content.replace(/<[^>]*>/g, "");

  if (plainText.length <= maxLength) {
    return plainText;
  }

  // 단어 경계에서 자르기
  const truncated = plainText.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + "...";
  }

  return truncated + "...";
}
