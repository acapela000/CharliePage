"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AtroposCard() {
  const atroposRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Import Atropos dynamically since it's a client-side library
    const loadAtropos = async () => {
      const Atropos = (await import("atropos")).default;

      // Initialize Atropos
      const myAtropos = Atropos({
        el: atroposRef.current!, // Use non-null assertion
        activeOffset: 40,
        shadowScale: 1.05,
        highlight: true,
        rotateXMax: 15,
        rotateYMax: 15,
        shadow: true,
        shadowOffset: 50,
      });

      // Cleanup on unmount
      return () => {
        if (myAtropos) {
          myAtropos.destroy();
        }
      };
    };

    loadAtropos();
  }, []);

  return (
    <div ref={atroposRef} className="atropos">
      <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner">
            <Card className="w-full h-full border-2">
              <CardHeader>
                <CardTitle data-atropos-offset="5">We/Octopus</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div
                  className="aspect-square relative overflow-hidden rounded-md"
                  data-atropos-offset="0"
                >
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Profile picture"
                    width={300}
                    height={300}
                    className="object-cover"
                    data-atropos-offset="-5"
                    priority
                  />
                </div>
                <div>
                  <h3 className="font-semibold" data-atropos-offset="3">
                    Charlie Junior
                  </h3>
                  <p
                    className="text-sm text-muted-foreground mt-1"
                    data-atropos-offset="2"
                  >
                    Software Developer
                  </p>
                  <div className="mt-3" data-atropos-offset="4">
                    <h4 className="text-sm font-medium mb-1">Hobbies</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Photography</Badge>
                      <Badge variant="outline">Hiking</Badge>
                      <Badge variant="outline">Gaming</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
