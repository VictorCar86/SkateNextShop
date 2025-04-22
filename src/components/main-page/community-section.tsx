import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    username: "tonyhawk",
    location: "Italy",
    image:
      "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1745353477/tonyhawk_bhztyf.webp",
    url: "https://www.instagram.com/p/DHoTyPzps3Z/",
    profileImg:
      "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1745353478/tonyhawk_profile_qika3q.webp",
    likes: 40.958,
    comments: 356,
  },
  {
    username: "nyjah",
    location: "Switzerland",
    image:
      "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1745353477/nyjah_z04ekz.webp",
    url: "https://www.instagram.com/p/C_qon-NO6kd/?img_index=1",
    profileImg:
      "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1745353477/nyjah_profile_qedkin.webp",
    likes: 128.233,
    comments: 834,
  },
  {
    username: "leticiabufoni",
    location: "Local Park - Tokio 2020",
    image:
      "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1745353478/leticiabufoni_qjnzs8.webp",
    url: "https://www.instagram.com/p/DFvpOxLthiT/?img_index=6",
    profileImg:
      "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1745353478/leticiabufoni_profile_ibbogs.webp",
    likes: 19.903,
    comments: 167,
  },
  {
    username: "skybrown",
    location: "Street Spot - California",
    image:
      "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1745353477/skybrown_rdp3ao.webp",
    url: "https://www.instagram.com/p/DHgmU2dogSw/?img_index=1",
    profileImg:
      "https://res.cloudinary.com/dj9wbpm5v/image/upload/v1745353477/skybrown_profile_izzolz.webp",
    likes: 23.413,
    comments: 231,
  },
];

export function CommunitySection() {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Community Highlights</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <a
              key={post.username}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={post.image || "/images/placeholder-product.webp"}
                      alt={`Post by ${post.username}`}
                      fill
                      crossOrigin="anonymous"
                      className="object-cover rounded-t-lg transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src={post.profileImg || "/images/placeholder-profile.webp"}
                        alt={`Profile image from ${post.username}`}
                        className="h-8 w-8 rounded-full bg-muted"
                        crossOrigin="anonymous"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="font-medium">@{post.username}</p>
                        <p className="text-sm text-muted-foreground">{post.location}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{post.likes} likes</span>
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
