import { NextResponse } from "next/server";

interface TrustpilotBusinessUnit {
  id?: string;
}

interface TrustpilotReview {
  stars?: number;
  title?: string | null;
  text?: string | null;
  consumer?: {
    displayName?: string | null;
  } | null;
}

interface TrustpilotReviewsResponse {
  reviews?: TrustpilotReview[];
}

const TRUSTPILOT_API_BASE = "https://api.trustpilot.com/v1";
const FALLBACK_BUSINESS_DOMAIN = "frontendsimplified.com";

function cleanQuote(review: TrustpilotReview) {
  const text = review.text?.trim();
  const title = review.title?.trim();
  const quote = text || title;

  if (!quote) return null;
  return quote.replace(/\s+/g, " ");
}

function getDisplayName(review: TrustpilotReview) {
  return review.consumer?.displayName?.trim() || "Trustpilot reviewer";
}

async function fetchBusinessUnitId(apiKey: string) {
  if (process.env.TRUSTPILOT_BUSINESS_UNIT_ID) {
    return process.env.TRUSTPILOT_BUSINESS_UNIT_ID;
  }

  const businessDomain =
    process.env.TRUSTPILOT_BUSINESS_DOMAIN || FALLBACK_BUSINESS_DOMAIN;
  const url = new URL(`${TRUSTPILOT_API_BASE}/business-units/find`);
  url.searchParams.set("name", businessDomain);

  const response = await fetch(url, {
    headers: {
      apikey: apiKey,
    },
    next: { revalidate: 60 * 60 * 6 },
  });

  if (!response.ok) return null;

  const data = (await response.json()) as TrustpilotBusinessUnit;
  return data.id || null;
}

export async function GET() {
  const apiKey = process.env.TRUSTPILOT_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        reviews: [],
        error: "Missing TRUSTPILOT_API_KEY",
      },
      { status: 200 },
    );
  }

  const businessUnitId = await fetchBusinessUnitId(apiKey);

  if (!businessUnitId) {
    return NextResponse.json(
      {
        reviews: [],
        error:
          "Missing TRUSTPILOT_BUSINESS_UNIT_ID or unable to find business unit",
      },
      { status: 200 },
    );
  }

  const url = new URL(
    `${TRUSTPILOT_API_BASE}/business-units/${businessUnitId}/reviews`,
  );
  url.searchParams.set("stars", "5");
  url.searchParams.set("language", "en");
  url.searchParams.set("page", "1");
  url.searchParams.set("perPage", "40");
  url.searchParams.set("orderBy", "createdat.desc");

  const response = await fetch(url, {
    headers: {
      apikey: apiKey,
    },
    next: { revalidate: 60 * 60 * 6 },
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        reviews: [],
        error: "Unable to fetch Trustpilot reviews",
      },
      { status: 200 },
    );
  }

  const data = (await response.json()) as TrustpilotReviewsResponse;
  const reviews = (data.reviews || [])
    .filter((review) => review.stars === 5)
    .map((review) => ({
      quote: cleanQuote(review),
      name: getDisplayName(review),
    }))
    .filter((review): review is { quote: string; name: string } =>
      Boolean(review.quote),
    )
    .slice(0, 40);

  return NextResponse.json({ reviews });
}
