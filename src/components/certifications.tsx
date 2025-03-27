import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Certification {
  name: string;
  issuer: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({
  certifications,
}: CertificationsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Certs I have</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {certifications.map((cert, index) => (
            <div key={index}>
              <h3 className="font-semibold">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
