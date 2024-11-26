'use client'
import NavigationBar from "@/components/navigationBar/navigationBar.component";
import Hero from "@/components/hero/hero.component";
import Features from "@/components/features/features.component";
import CountriesTile from "@/components/SlidingImages";
import Contact from "@/components/contact/contact.component";
import EnquireBar from "@/components/enquireBar/enquireBar";
import University from "@/components/university/university.component";
import { Review } from "@/components/review/review.component";
export default function Home() {
  return (
    <div className="">
      <EnquireBar/>
      <NavigationBar />
      <hr className="bg-black h-[1px] border-0" />
      <Hero />
      <Features />
      <CountriesTile />
      <Contact />
      <University />
      <Review/>
    </div>
  );
}
