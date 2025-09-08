interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      email: string;
      date: string;
    };
  };
  html_url: string;
  repository: {
    name: string;
    full_name: string;
  };
}

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string;
  updated_at: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

export async function getGitHubActivity(username: string, token?: string) {
  try {
    // Get user's repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Add your GitHub token for higher rate limits (optional)
          Authorization: `token ${token}`,
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    );

    if (!reposResponse.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repos: GitHubRepo[] = await reposResponse.json();

    // Get recent commits from the most active repositories
    const commitsPromises = repos.slice(0, 5).map(async (repo) => {
      try {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${repo.full_name}/commits?per_page=5&author=${username}`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
              // 'Authorization': `token ${process.env.GITHUB_TOKEN}`,
            },
            next: { revalidate: 3600 },
          },
        );

        if (!commitsResponse.ok) {
          return [];
        }

        const commits = await commitsResponse.json();
        return commits.map((commit: any) => ({
          ...commit,
          repository: {
            name: repo.name,
            full_name: repo.full_name,
          },
        }));
      } catch (error) {
        console.error(`Error fetching commits for ${repo.name}:`, error);
        return [];
      }
    });

    const commitsArrays = await Promise.all(commitsPromises);
    const allCommits = commitsArrays.flat();

    // Sort commits by date
    allCommits.sort(
      (a, b) =>
        new Date(b.commit.author.date).getTime() -
        new Date(a.commit.author.date).getTime(),
    );

    return {
      repos: repos.slice(0, 6),
      commits: allCommits.slice(0, 10),
    };
  } catch (error) {
    console.error("Error fetching GitHub activity:", error);
    return {
      repos: [],
      commits: [],
    };
  }
}
