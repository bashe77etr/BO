import HeroSection from '../components/HeroSection';
import QuickPathSection from '../components/QuickPathSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import SubjectsSection from '../components/SubjectsSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import PreviewSection from '../components/PreviewSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import SubscriptionSection from '../components/SubscriptionSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickPathSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SubjectsSection />
      <CapabilitiesSection />
      <PreviewSection />
      <TestimonialsSection />
      <SubscriptionSection />
      <CTASection />
    </>
  );
}
