"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitCommit, Star, GitFork, ExternalLink } from "lucide-react";
import Link from "next/link";

interface GitHubActivityProps {
  username: string;
  data: {
    repos: any[];
    commits: any[];
  };
}

export default function GitHubActivity({
  username,
  data,
}: GitHubActivityProps) {
  const { repos, commits } = data;
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Recent Repositories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitCommit className="h-5 w-5" />
            Recent Repositories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {repos.length > 0 ? (
              repos.map((repo) => (
                <div key={repo.id} className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary flex items-center gap-1"
                    >
                      {repo.name}
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork className="h-3 w-3" />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </div>
                  {repo.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    {repo.language && (
                      <Badge variant="secondary" className="text-xs">
                        {repo.language}
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      Updated {formatDate(repo.updated_at)}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">No repositories found</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Recent Commits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitCommit className="h-5 w-5" />
            Recent Commits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {commits.length > 0 ? (
              commits.map((commit) => (
                <div key={commit.sha} className="flex flex-col space-y-1">
                  <Link
                    href={commit.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-primary line-clamp-2"
                  >
                    {commit.commit.message.split("\n")[0]}
                  </Link>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{commit.repository.name}</span>
                    <span>{formatDate(commit.commit.author.date)}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">No recent commits found</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
