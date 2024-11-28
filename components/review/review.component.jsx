import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
const reviews = [
  {
    name: "Rahul Sharma",
    username: "@rahul",
    body: "This platform is extremely helpful for finding the best MBBS colleges. The detailed insights saved me a lot of research time!",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Priya Mehta",
    username: "@priya",
    body: "Thanks to this site, I was able to compare colleges effectively and make an informed decision about my future.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Amit Verma",
    username: "@amit",
    body: "I found the perfect college through this site. The filters and reviews are very well-organized and useful.",
    img: "https://avatar.vercel.sh/amit",
  },
  {
    name: "Anjali Gupta",
    username: "@anjali",
    body: "The college recommendations here are spot on. I really liked how it includes key information like rankings and admission details.",
    img: "https://avatar.vercel.sh/anjali",
  },
  {
    name: "Rohit Singh",
    username: "@rohit",
    body: "This site made the overwhelming task of finding the right MBBS college much easier. Highly recommended!",
    img: "https://avatar.vercel.sh/rohit",
  },
  {
    name: "Neha Patel",
    username: "@neha",
    body: "I appreciated the genuine reviews and accurate information provided about MBBS colleges. It was a lifesaver during my admission process.",
    img: "https://avatar.vercel.sh/neha",
  },
];


const ReviewCard = ({ img, name, username, body }) => (
  <figure
    className={cn(
      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
  >
    <div className="flex flex-row items-center gap-2">
      <img
        className="rounded-full"
        width="32"
        height="32"
        alt={`${name}'s avatar`}
        src={img}
      />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium dark:text-white">
          {name}
        </figcaption>
        <p className="text-xs font-medium dark:text-white/40">{username}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm">{body}</blockquote>
  </figure>
);

export function Review() {
  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div className="relative flex h-[600px] flex-col items-center justify-center overflow-hidden border bg-background md:shadow-xl">
      <h1 className="text-5xl mb-10">Student&apos;s Reviews</h1>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
