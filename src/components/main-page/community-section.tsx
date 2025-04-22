import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    username: "tonyhawk",
    location: "Italy",
    image:
      "https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-15/486059567_18501270748044846_2787176262426155174_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08_tt6&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QGU7A-75BVb6wEkN5RTkhHVzAAran_KcTlbDcLcU1-4OwRR4AOIFC_6W-5L7Adgy1c&_nc_ohc=BzXiVcJFbn8Q7kNvwEUMlie&_nc_gid=bcIcO31tvfauN6f0BUJkxA&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfHTZL14hS6JGpfM9-RVKdK4PqLHIjmYW2V6om0WzJWZ3A&oe=680D8D12&_nc_sid=d885a2",
    url: "https://www.instagram.com/p/DHoTyPzps3Z/",
    profileImg:
      "https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-19/11821190_1609277929320685_430060312_a.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QHeFaxCF86w8kgrZid2kfE3d2sh4DULjhSLH6Q3yyaaTX1WDPPDkpWtI5kOJOG7jCQ&_nc_ohc=g-QMRZgonx4Q7kNvwF_GEPv&_nc_gid=fTSs2cJUbrEu_7PstFMxfA&edm=AA5fTDYBAAAA&ccb=7-5&oh=00_AfHjBEoa9_iS38-Uph8TSKu4LrD53aw0I6OeprhlYzssyw&oe=680D8F6E&_nc_sid=7edfe2",
    likes: 40.958,
    comments: 356,
  },
  {
    username: "nyjah",
    location: "Switzerland",
    image:
      "https://instagram.fbog2-4.fna.fbcdn.net/v/t51.29350-15/458749178_1069516091570650_1549583879127014482_n.jpg?stp=dst-jpegr_e35_p750x750_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE1MzYuaGRyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QFG4JTMKQ8mQi_LQVjD4xhDcGibkww4MHc9VFeLCBNBEk3mto4RK4c4ArPKPPoXi4s&_nc_ohc=4j3qT8IeEiQQ7kNvwEBTxnU&_nc_gid=ccfF7KLWv6FuB5ZnGlXBhA&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfFRl2MTXHfPdlToWmhFxaPQgtcYLL8XYx7hoPWbPO5_8Q&oe=680DC48B&_nc_sid=d885a2",
    url: "https://www.instagram.com/p/C_qon-NO6kd/?img_index=1",
    profileImg:
      "https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-19/483359214_1412711710099164_5476402271325276966_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QFG4JTMKQ8mQi_LQVjD4xhDcGibkww4MHc9VFeLCBNBEk3mto4RK4c4ArPKPPoXi4s&_nc_ohc=XMTvWRyPCJUQ7kNvwFt9zBG&_nc_gid=ccfF7KLWv6FuB5ZnGlXBhA&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfGmT-dlb4NZgIoV3iIV_ZqRijqmRWWO6gO8fKU0I2QXQQ&oe=680D9E5D&_nc_sid=d885a2",
    likes: 128.233,
    comments: 834,
  },
  {
    username: "leticiabufoni",
    location: "Local Park - Tokio 2020",
    image:
      "https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-15/476732830_18320802616162814_6480399241000018050_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QHNCYbNVcL2HHQMLyL5rHNPCauTGCRilRBtMq7hM0pQKw851arbxEh_4zPuj6pUZQw&_nc_ohc=Y8kuLBEWDz8Q7kNvwGzF42S&_nc_gid=PjIC0rn9rUM1tOsYSytyag&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfGvqslIuSvmQsGln_WbR9V6UDY7r3uojRsRu8J494hOIg&oe=680DB351&_nc_sid=d885a2",
    url: "https://www.instagram.com/p/DFvpOxLthiT/?img_index=6",
    profileImg:
      "https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-19/361586033_1428634287970920_5762867882587940012_n.jpg?_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QHpMKsPrvOY2vQvE1xDRvcC19lYp8ECb6LGyMB5Ic6lePoaKzGA--GuLkpbNvPnazo&_nc_ohc=DD_Zo5C3ewgQ7kNvwFJyFIs&_nc_gid=0Q02ke1e6c_LwCWAbv2TWQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfG6PuJy_AG8WiGj50ZwZyew70nGtEKfWY70tZJg71Yo5A&oe=680DB871&_nc_sid=7a9f4bhttps://cors-anywhere.herokuapp.com/https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-19/361586033_1428634287970920_5762867882587940012_n.jpg?_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QHpMKsPrvOY2vQvE1xDRvcC19lYp8ECb6LGyMB5Ic6lePoaKzGA--GuLkpbNvPnazo&_nc_ohc=DD_Zo5C3ewgQ7kNvwFJyFIs&_nc_gid=0Q02ke1e6c_LwCWAbv2TWQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfG6PuJy_AG8WiGj50ZwZyew70nGtEKfWY70tZJg71Yo5A&oe=680DB871&_nc_sid=7a9f4b",
    likes: 19.903,
    comments: 167,
  },
  {
    username: "skybrown",
    location: "Street Spot - California",
    image:
      "https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-15/485580785_18489900832011350_3375305394302650921_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QEEMrawIuQQXfWcmwh89kSmI2CSho8F7AXwvPeWs1s3l3wq9dvfgB7T0lUiWXQ1-sc&_nc_ohc=hAEZqtmxt5gQ7kNvwFo1247&_nc_gid=qOwIsC8tcziK38i663v2uQ&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AfHTqlgCzO6-GMIyIIn2ALKMFkg2QvoV3JW5xIXpkh4VuA&oe=680DA821&_nc_sid=d885a2",
    url: "https://www.instagram.com/p/DHgmU2dogSw/?img_index=1",
    profileImg:
      "https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-19/117736907_652277262313185_1010274794958905416_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QGcCj1MBP8n9LnEVHU_Hv2YrfECeFKtQ0xAReqN2mOKR59iKu2ZWkuyP8veBFWf4cE&_nc_ohc=uEmrHplEm84Q7kNvwEYSHpd&_nc_gid=JQG67oXLfpOyeaxJHqqlFw&edm=APU89FABAAAA&ccb=7-5&oh=00_AfFBRkFp3drsx2FxUolemv_WOuih02Bkyh8gYcsmgYv8WA&oe=680DC560&_nc_sid=bc0c2c",
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
                        src={post.profileImg || "/images/placeholder-product.webp"}
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
