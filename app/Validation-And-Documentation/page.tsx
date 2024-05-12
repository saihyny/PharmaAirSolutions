import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-16 md:pb-20 lg:pb-28 lg:pt-[100px]">
        <div className="container">
          <div className="flex h-[300px] w-[100%]  ">
            <Image
              src="/images/services/services.png"
              alt="service img"
              width={1500}
              height={10}
            />
          </div>
          <Breadcrumb
        pageName="Validation And Documentation"
        description="Pharmacle Air Solutions has proven experience in providing validation services
        and testing. In addition to the test and certification
        services, we offer a comprehensive validation support service
        for the provision of qualification documentation to satisfy
        the requirements of regulatory bodies."
      />
          <div className=" flex flex-col">
            <div className="w-full px-4">
              <div className="mx-auto rounded  bg-white px-6 shadow-three dark:bg-dark sm:p-[60px]">
                <br></br>
                <h2 className=" font-mono">
                  Pharmacle Air Solutions is a pioneer in the field of third party cleanroom
                  validation services. We excel in providing independent
                  cleanroom validation & cleanroom certification with
                  sophisticated instruments.
                </h2>
                <br></br>
                <h2 className=" font-mono">
                  All our equipments are meticulously calibrated according to
                  the latest international guidelines. Pharmacle Air Solutions validation
                  technicians are trained and internally accredited in the
                  testing of all types of validation equipment’s. We adhere to
                  strict business ethics and our company’s integrity is
                  reflected in all that we do and offer.
                </h2>
                <br></br>
                <h2
                  className="f font-extrabold
                 text-orange-300"
                >
                  Our approach
                </h2>
                <h2 className=" font-mono">
                  User Requirement Specifications: Working with the customer to
                  document the key user requirements and expectations for a
                  facility, system or piece of critical process equipment.
                </h2>
                <br></br>
                <h2 className=" font-mono">
                  Validation Plans: All projects require a high level document
                  to lay down the validation approach and Pharmacle Air Solutions coordinate with
                  the customer to develop the most appropriate and effective
                  validation plan.
                </h2>
                <br></br>
                <h2 className=" font-mono">
                  Qualification Protocols: Using a risk based approach,
                  qualification protocols are generated to ensure effective
                  verification of critical systems, utilities and equipment. Our
                  expertise ensures, relevant and valuable protocols are
                  produced.
                </h2>
                <br></br>
                <h2
                  className="f font-extrabold
                 text-orange-300"
                >
                  Our Cleanroom Validation services include:
                </h2>

                <br></br>

                <ul className="list-disc font-mono">
                  <li>Air volume flow rate and air change rate measurements</li>
                  <br></br>
                  <li>Air and room pressure differential measurement</li>
                  <br></br>
                  <li>
                  HEPA filter integrity leak testing
                  </li>
                  <br></br>
                  <li>Airborne particulate cleanliness counts</li>
                  <br></br>
                  <li>
                  Pressure gauge calibration
                  </li>
                  <br></br>
                  <li>
                  Airflow visualisation studies
                  </li>
                  <br></br>
                  <li>Recovery performance testing</li>
                  <br></br>
                  <li>Temperature and humidity monitoring</li>
                  <br></br>
                  <li>Lighting and noise level measurements</li>
                  <br></br>
                  <li>Containment leak testing</li>
                  <br></br>
                  <li>Recovery performance testing</li>
                  <br></br>
                  <li>Temperature and humidity monitoring</li>
                  <br></br>
                  <li>Lighting and noise level measurements</li>
                  <br></br>
                  <li>Containment leak testing</li>
                  <br></br>
                  <li>Comprehensive Documentation</li>
                </ul>
                <br></br>
                <h2
                  className="f font-extrabold
                 text-orange-300"
                >
                  We provide testing & validation of
                </h2>
                <ul className="list-disc font-mono">
                  <br></br>
                  <li>Cleanrooms</li>
                  <br></br>
                  <li>Laminar Air Flow</li>
                  <br></br>
                  <li>Reverse air flow units</li>
                  <br></br>
                  <li>Pass box</li>
                  <br></br>
                  <li>Bio Safety Cabinets</li>
                  <br></br>
                  <li>Fume hoods</li>
                  <br></br>
                  <li>Garment Cubicles</li>
                  <br></br>
                  <li>Isolators</li>
                  <br></br>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
