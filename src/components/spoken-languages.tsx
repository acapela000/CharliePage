import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Language {
  name: string;
  proficiency: number; // 1-5
}

interface SpokenLanguagesProps {
  languages: Language[];
}

export default function SpokenLanguages({ languages }: SpokenLanguagesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Languages I can speak</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {languages.map((language, index) => (
            <div key={index} className="flex items-center justify-between">
              <span>{language.name}</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-8 rounded-full ${
                      i < language.proficiency ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
