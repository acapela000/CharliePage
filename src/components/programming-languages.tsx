import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const programmingLanguages = [
  { name: "JavaScript", color: "#3b82f6", percentage: 40 },
  { name: "TypeScript", color: "#10b981", percentage: 35 },
  { name: "Python", color: "#f59e0b", percentage: 25 },
];

export default function ProgrammingLanguages() {
  // Calculate stroke-dasharray and stroke-dashoffset for each language
  const circumference = 2 * Math.PI * 40; // 2πr where r=40

  return (
    <Card>
      <CardHeader>
        <CardTitle>Programming Languages</CardTitle>
        <CardDescription>Technologies I work with</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-32 w-32 mx-auto">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="10"
            />
            {programmingLanguages.map((lang, index) => {
              const offset =
                index === 0
                  ? 0
                  : programmingLanguages
                      .slice(0, index)
                      .reduce((acc, curr) => acc + curr.percentage, 0);

              const dashOffset = circumference * (1 - offset / 100);
              const dashArray = circumference * (lang.percentage / 100);

              return (
                <circle
                  key={lang.name}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={lang.color}
                  strokeWidth="10"
                  strokeDasharray={`${dashArray} ${circumference - dashArray}`}
                  strokeDashoffset={dashOffset}
                  transform={
                    index > 0 ? `rotate(${offset * 3.6} 50 50)` : undefined
                  }
                />
              );
            })}
          </svg>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
          {programmingLanguages.map((lang) => (
            <div key={lang.name}>
              <div
                className="h-3 w-3 rounded-full mx-auto mb-1"
                style={{ backgroundColor: lang.color }}
              ></div>
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
