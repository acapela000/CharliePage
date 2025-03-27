"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function GitHubActivity() {
  const [activityData, setActivityData] = useState<number[]>([]);

  useEffect(() => {
    // In a real implementation, you would fetch data from GitHub API
    // For now, we'll generate mock data
    const mockData = Array.from({ length: 35 }, () =>
      Math.floor(Math.random() * 5)
    );
    setActivityData(mockData);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Commit Activity</CardTitle>
        <CardDescription>From GitHub API</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1">
          {activityData.map((intensity, i) => (
            <div
              key={i}
              className={`h-4 rounded-sm ${
                intensity > 0
                  ? `bg-primary${intensity < 3 ? "/60" : ""}`
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
