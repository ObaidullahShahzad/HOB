import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import Cursor from "@/components/layout/Cursor";
import ScrollProgress from "@/components/layout/ScrollProgress";

import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import CollectionGrid from "@/components/sections/CollectionGrid";
import StoryBanner from "@/components/sections/StoryBanner";
import BestSellers from "@/components/sections/BestSellers";
import BrandStory from "@/components/sections/BrandStory";
import CampaignSection from "@/components/sections/CampaignSection";
import NewArrivals from "@/components/sections/NewArrivals";
import Testimonials from "@/components/sections/Testimonials";
import InstagramGallery from "@/components/sections/InstagramGallery";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Cursor />
      <ScrollProgress />

      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <CollectionGrid />
        <StoryBanner />
        <BestSellers />
        <BrandStory />
        <CampaignSection />
        <NewArrivals />
        <Testimonials />
        <InstagramGallery />
        <Newsletter />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
