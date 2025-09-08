import { NextResponse } from "next/server";
import { getGitHubActivity } from "@/lib/getGitHubActivity";

export async function GET() {
  try {
    const data = await getGitHubActivity(
      "acapela000",
      process.env.GITHUB_TOKEN
    );

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
