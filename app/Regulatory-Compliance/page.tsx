import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogSidebarPage = () => {
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
        pageName=" Regulatory Compliance"
        description="To enable the client's internal quality standards to be
        upheld, Airwin have realised the importance of producing high
        quality reports and validation documents, which will provide
        the client with evidence of the continued performance of the
        facility"
      />
          <div className=" flex flex-col">
            <div className="w-full px-4">
              <div className="mx-auto rounded  bg-white px-6 shadow-three dark:bg-dark sm:p-[60px]">
                
                <h2
                  className="f font-bold
                 text-orange-300"
                >
                  Reports & Documentation
                </h2>
                
                <br></br>
                <h2 className=" font-mono">
                  The documents provided give a clear and comprehensive guide to
                  the current standard of the facility. Detailed methodology,
                  Acceptance Criteria, Results and Summary Conclusions are
                  provided, along with all relevant supporting documentation
                  including facility drawings, calibration certificates,
                  equipment and location reference drawings and raw data
                  collected during the validation exercise.
                </h2>
                <br></br>
                <h2 className="font-mono">
                  Airwin can design and build your facilities to comply with all
                  regulatory standards
                </h2>
                <br></br>
                <h2
                  className="f font-extrabold
                 text-orange-300"
                >
                  Protocols
                </h2>
                <h2 className=" font-mono">
                  For any new or modified cleanroom facility, Airwin understand
                  that it is essential to have a structured system in place to
                  ensure your facility is designed, built and performs to the
                  required standard.
                </h2>
                <br></br>
                <h2 className=" font-mono">
                  Airwin can assist in the production of User Requirement
                  Specifications and the following essential documents:
                </h2>
                <br></br>

                <ul className="list-disc font-mono">
                  <li>Comprehensive and ordinary AMC’s</li>
                  <br></br>
                  <li>
                    Design Qualification (DQ) : Used to provide documented
                    evidence that the proposed design of the facility meets with
                    the user requirements and cGMP.
                  </li>
                  <br></br>
                  <li>
                    Installation Qualification (IQ): Gives the documented
                    evidence that the facility has been installed in accordance
                    with the agreed design.
                  </li>
                  <br></br>
                  <li>
                    Operational Qualification (OQ): Provides evidence that the
                    installation operates as specified and within the agreed
                    specification parameters.
                  </li>
                  <br></br>
                  <li>
                    Performance Qualification (PQ): Gives a documented programme
                    that the facility will perform consistently within the
                    pre-determined parameters, during periods of operational
                    use.
                  </li>
                  <br></br>
                </ul>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
