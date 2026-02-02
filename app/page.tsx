import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { CampaignOnboardingCarousel } from "@/components/sections/campaign-onboarding-carousel"
import { DailyHustleInterface } from "@/components/sections/daily-hustle-interface"
import { Hero } from "@/components/sections/hero"
import { ManagedPlans } from "@/components/sections/managed-plans"
import { OurTechnology } from "@/components/sections/our-technology"
import { PocketToday } from "@/components/sections/pocket-today"
import { Review } from "@/components/sections/reviews"

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="overflow-visible">
        <Hero />
        <DailyHustleInterface />
        <OurTechnology />
        <PocketToday />
        <CampaignOnboardingCarousel />
        <ManagedPlans />
        <Review />
      </main>
      <Footer />
    </>
  )
}
