import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const githubResponse = await fetch(
      "https://api.github.com/users/acapela000/repos?sort=updated&per_page=10",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 },
      }
    );

    if (!githubResponse.ok) {
      console.error('GitHub API response not OK:', githubResponse.status);
      return NextResponse.json(
        { error: 'Failed to fetch GitHub data', repos: [], commits: [] },
        { status: 200 } // Return 200 to avoid breaking the UI
      );
    }

    const githubData = await githubResponse.json();

    const recentRepos = githubData.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      updated_at: repo.updated_at,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      language: repo.language,
    }));

    // Fetch commits for recent repos
    const recentCommits = await Promise.all(
      recentRepos.slice(0, 3).map(async (repo: { name: string }) => {
        try {
          const commitsResponse = await fetch(
            `https://api.github.com/repos/acapela000/${repo.name}/commits?per_page=3&author=acapela000`,
            {
              headers: {
                Accept: "application/vnd.github.v3+json",
                Authorization: `token ${process.env.GITHUB_TOKEN}`,
              },
            }
          );
          if (!commitsResponse.ok) return [];
          const commits = await commitsResponse.json();
          return commits.map((commit: any) => ({
            ...commit,
            repository: { name: repo.name },
          }));
        } catch (error) {
          console.error(`Error fetching commits for ${repo.name}:`, error);
          return [];
        }
      })
    );

    const commits = recentCommits.flat();

    return NextResponse.json({ repos: recentRepos, commits });
  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data', repos: [], commits: [] },
      { status: 200 } // Return 200 to avoid breaking the UI
    );
  }
}
