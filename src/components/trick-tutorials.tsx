"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const tutorials = [
  {
    id: "JNmUK9fvrAs",
    title: "How to Ollie",
    difficulty: "Beginner",
    duration: "3 min",
  },
  {
    id: "jxTGfQT6-lU",
    title: "Kickflip Tutorial",
    difficulty: "Intermediate",
    duration: "10 min",
  },
  {
    id: "kTKySohOatw",
    title: "Heel Flip Guide",
    difficulty: "Advanced",
    duration: "8 min",
  },
];

export function TrickTutorials() {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Learn New Tricks</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.title}>
              <CardContent className="p-0">
                <div className="relative">
                  <LiteYouTubeEmbed id={tutorial.id} title={tutorial.title} />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{tutorial.title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{tutorial.difficulty}</span>
                    <span>•</span>
                    <span>{tutorial.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
