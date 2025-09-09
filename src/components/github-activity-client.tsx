"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitBranch, Star } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  repository: {
    name: string;
  };
}

export default function GitHubActivityClient() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        // Fetch repositories
        const repoResponse = await fetch('/api/github');
        if (!repoResponse.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        
        const data = await repoResponse.json();
        setRepos(data.repos || []);
        setCommits(data.commits || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
        console.error('GitHub fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>GitHub Activity</CardTitle>
          <CardDescription>Loading recent repositories and commits...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>GitHub Activity</CardTitle>
          <CardDescription>Unable to load GitHub data at the moment</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Please check back later or visit my{" "}
            <a 
              href="https://github.com/acapela000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub profile
            </a>{" "}
            directly.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>GitHub Activity</CardTitle>
        <CardDescription>Recent repositories and commits</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Recent Repositories</h4>
          <div className="space-y-3">
            {repos.slice(0, 3).map((repo) => (
              <div key={repo.id} className="flex items-start justify-between">
                <div className="flex-1">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-primary flex items-center gap-1"
                  >
                    {repo.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">
                    {repo.description || "No description"}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    {repo.language && (
                      <Badge variant="outline" className="text-xs">
                        {repo.language}
                      </Badge>
                    )}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <GitBranch className="h-3 w-3" />
                      {repo.forks_count}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {commits.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-3">Recent Commits</h4>
            <div className="space-y-3">
              {commits.slice(0, 3).map((commit) => (
                <div key={commit.sha} className="text-sm">
                  <p className="font-medium">{commit.commit.message}</p>
                  <p className="text-xs text-muted-foreground">
                    {commit.repository.name} •{" "}
                    {new Date(commit.commit.author.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
