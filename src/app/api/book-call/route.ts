import { WebClient } from "@slack/web-api";
import { NextResponse } from "next/server";

const DEFAULT_SLACK_CHANNEL = "#simplified-join";

type BookCallRequest = {
  fullName?: string;
  email?: string;
  message?: string;
};

type BookingDetails = {
  fullName: string;
  email: string;
  message: string;
};

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function jsonError(error: string, status: number) {
  return NextResponse.json({ error }, { status });
}

function escapeSlackText(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function readBookingDetails(request: Request) {
  const body = (await request.json()) as BookCallRequest;
  const fullName = normalize(body.fullName);
  const email = normalize(body.email);
  const message = normalize(body.message);

  if (!fullName || !email) return null;

  return { fullName, email, message };
}

function createSlackMessage({ fullName, email, message }: BookingDetails) {
  const safeName = escapeSlackText(fullName);
  const safeEmail = escapeSlackText(email);
  const safeMessage = escapeSlackText(message || "No message provided");

  return {
    text: `New booked call from ${fullName} (${email})`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "New booked call",
          emoji: true,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Name:* ${safeName}`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Email:* ${safeEmail}`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Message:*\n${safeMessage}`,
        },
      },
    ],
  };
}

export async function POST(request: Request) {
  const slackBotToken = process.env.SLACK_BOT_TOKEN;
  const slackChannel = process.env.SLACK_CHANNEL_ID || DEFAULT_SLACK_CHANNEL;

  if (!slackBotToken) return jsonError("Missing SLACK_BOT_TOKEN", 500);

  let booking: BookingDetails | null;

  try {
    booking = await readBookingDetails(request);
  } catch {
    return jsonError("Invalid request body", 400);
  }

  if (!booking) return jsonError("Full name and email are required", 400);

  const client = new WebClient(slackBotToken);
  const slackMessage = createSlackMessage(booking);

  try {
    await client.chat.postMessage({
      channel: slackChannel,
      ...slackMessage,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return jsonError("Unable to send booking to Slack", 502);
  }
}
