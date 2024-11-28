import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import ContentSection from '~/components/content-section'
import { BeakerIcon } from '@heroicons/react/24/outline'

export const meta: MetaFunction = () => {
  return [
    { title: "Civics Lab" },
    { name: "description", content: "At Civics Lab, we specialize in innovative tools and expert services tailored for campaigns, county parties, and civic organizations. From strategic planning to design and education, we’re your partner in building stronger movements and driving meaningful change. Explore our suite of solutions designed to make organizing smarter, faster, and more impactful." },
  ];
};

export default function Index() {
  return (
    <main>
      <Header
        subheading="Welcome to"
        heading="Your Next Big Project"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Learn More"
        imageSrc="/images/hero-image.jpg"
        imageAlt="Hero illustration"
        nextSectionId="features"
      />
      
      <ContentSection
      subheading="Optional Subheading"
      service={{
        name: "Research Service",
        icon: <BeakerIcon className="h-6 w-6" />
      }}
      heading="Main Heading Goes Here"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      primaryButton={{
        text: "Get Started",
        to: "/get-started"
      }}
      secondaryButton={{
        text: "Learn More",
        onClick: () => console.log("Secondary button clicked")
      }}
      image={{
        src: "/images/example.jpg",
        alt: "Description of image"
      }}
    />
    </main>
  );
}

