"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitCommit, Star, GitFork, ExternalLink } from "lucide-react";
import Link from "next/link";

interface GitHubActivityProps {
  recentRepos?: any[];
  recentCommits?: any[];
}

export default function GitHubActivity({
  recentRepos = [],
  recentCommits = [],
}: GitHubActivityProps) {
  const repos = recentRepos;
  const commits = recentCommits;

  // Add this debugging
  console.log("GitHubActivity received:");
  console.log("recentRepos:", recentRepos);
  console.log("recentCommits:", recentCommits);
  console.log("First commit structure:", commits[0]); // Debug the structure

  // Add this right after the console.log statements
  console.log("Commits structure check:");
  if (commits.length > 0) {
    console.log("First commit:", JSON.stringify(commits[0], null, 2));
    console.log("Commit message check:", commits[0]?.commit?.message);
    console.log("Commit date check:", commits[0]?.commit?.author?.date);
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  // Helper function to safely get commit message
  const getCommitMessage = (commit: any) => {
    // Handle different possible structures
    if (commit?.commit?.message) {
      return commit.commit.message.split("\n")[0];
    } else if (commit?.message) {
      return commit.message.split("\n")[0];
    } else {
      return "No commit message";
    }
  };

  // Helper function to safely get commit date
  const getCommitDate = (commit: any) => {
    if (commit?.commit?.author?.date) {
      return commit.commit.author.date;
    } else if (commit?.author?.date) {
      return commit.author.date;
    } else if (commit?.date) {
      return commit.date;
    } else {
      return null;
    }
  };

  // Helper function to safely get repository name
  const getRepositoryName = (commit: any) => {
    if (commit?.repository?.name) {
      return commit.repository.name;
    } else if (commit?.repo?.name) {
      return commit.repo.name;
    } else {
      return "Unknown repo";
    }
  };

  return (
    <div className="w-full">
      {/* Single card with horizontal layout */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitCommit className="h-5 w-5" />
            GitHub Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Recent Repositories */}
            <div>
              <h3 className="font-semibold mb-3 text-sm text-muted-foreground">
                Recent Repositories
              </h3>
              <div className="space-y-3">
                {repos.length > 0 ? (
                  repos.slice(0, 4).map(
                    (
                      repo,
                      index // Limit to 4 repos
                    ) => (
                      <div
                        key={repo.id || index}
                        className="flex flex-col space-y-1"
                      >
                        <Link
                          href={repo.html_url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary flex items-center gap-1 text-sm"
                        >
                          {repo.name || "Unknown repo"}
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                        {repo.description && (
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {repo.description}
                          </p>
                        )}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {repo.language && (
                              <Badge
                                variant="secondary"
                                className="text-xs px-1 py-0"
                              >
                                {repo.language}
                              </Badge>
                            )}
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              {repo.stargazers_count > 0 && (
                                <span className="flex items-center gap-1">
                                  <Star className="h-2 w-2" />
                                  {repo.stargazers_count}
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {formatDate(repo.updated_at)}
                          </span>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <p className="text-muted-foreground text-sm">
                    No repositories found
                  </p>
                )}
              </div>
            </div>

            {/* Recent Commits */}
            <div>
              <h3 className="font-semibold mb-3 text-sm text-muted-foreground">
                Recent Commits
              </h3>
              <div className="space-y-3">
                {commits.length > 0 ? (
                  commits.slice(0, 5).map(
                    (
                      commit,
                      index // Limit to 5 commits
                    ) => (
                      <div
                        key={commit.sha || index}
                        className="flex flex-col space-y-1"
                      >
                        <Link
                          href={commit.html_url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:text-primary line-clamp-1"
                        >
                          {getCommitMessage(commit)}
                        </Link>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="truncate">
                            {getRepositoryName(commit)}
                          </span>
                          <span>{formatDate(getCommitDate(commit))}</span>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <p className="text-muted-foreground text-sm">
                    No recent commits found
                  </p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
