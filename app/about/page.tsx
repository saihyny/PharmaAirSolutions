import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Established in 2007, Pharma Air solutions is a global organization specialized in innovative cleanroom solutions for controlled environments. Over the years we have diversified from designing and construction of cleanrooms into a complete turnkey solution provider for your ever changing needs in cleanroom industry. With extensive crossmarket industry knowledge, we deliver high-performing modular cleanroom environments that enhance your business results. Pharma Air solutions is focused on its Values and is determined to provide products & services to meet stringent quality & operational flexibility norms as per cGMP standards."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
