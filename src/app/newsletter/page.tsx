import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ArrowLeft, Bell, CheckCircle2 } from "lucide-react";

export default function NewsletterPage() {
  return (
    <div className="container py-10">
      <Link
        href="/"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="thoughts" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="thoughts">Quick Share My Thoughts</TabsTrigger>
            <TabsTrigger value="subscribe">Subscribe to Newsletter</TabsTrigger>
          </TabsList>

          {/* Quick Share My Thoughts Tab */}
          <TabsContent value="thoughts" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick share my thoughts</CardTitle>
                <CardDescription>
                  Recent updates and thoughts on development, tools, and
                  technology
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg">
                    #1 I fixed bug today
                  </h3>
                  <div className="mt-2">
                    <Badge>bugfix</Badge>
                    <p className="mt-3 text-muted-foreground">
                      Fixed a critical rendering issue in our React component
                      that was causing performance problems. The issue was
                      related to unnecessary re-renders when state changes
                      occurred in parent components. By implementing React.memo
                      and optimizing the dependency arrays in useEffect hooks, I
                      was able to reduce render times by 40%.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Posted on March 8, 2025
                    </p>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg">#2 I tried new tool</h3>
                  <div className="mt-2">
                    <Badge>tools</Badge>
                    <p className="mt-3 text-muted-foreground">
                      Explored the new features in Next.js 15 and implemented
                      server components for better performance. The new
                      streaming capabilities are impressive, allowing for
                      progressive rendering of complex pages. I've also been
                      experimenting with the improved image optimization
                      features which have significantly improved our Core Web
                      Vitals scores.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Posted on March 5, 2025
                    </p>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg">
                    #3 Weekly reflection
                  </h3>
                  <div className="mt-2">
                    <Badge>thoughts</Badge>
                    <p className="mt-3 text-muted-foreground">
                      Reflecting on my progress with TypeScript and how it's
                      improved my development workflow. Strong typing has caught
                      numerous bugs before they made it to production, and the
                      improved IDE support has boosted my productivity. I'm
                      particularly impressed with how TypeScript handles complex
                      type inference in modern React patterns.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Posted on March 1, 2025
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Load More Thoughts
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Subscribe Tab */}
          <TabsContent value="subscribe" className="mt-6">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">
                  Subscribe to my Newsletter
                </CardTitle>
                <CardDescription>
                  Get the latest updates, articles, and resources delivered
                  directly to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Weekly Development Tips</h3>
                        <p className="text-sm text-muted-foreground">
                          Practical advice and best practices for modern web
                          development.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Project Updates</h3>
                        <p className="text-sm text-muted-foreground">
                          Stay informed about my latest projects and open-source
                          contributions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Industry News</h3>
                        <p className="text-sm text-muted-foreground">
                          Curated insights on the latest trends in software
                          development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Subscribe</Button>
              </CardFooter>
            </Card>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>
                By subscribing, you agree to receive emails from me. You can
                unsubscribe at any time. I respect your privacy and will never
                share your information.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
