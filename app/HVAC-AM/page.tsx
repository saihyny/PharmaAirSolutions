import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page | Pharmacle Air Solutions",
  description: "This is Sign Up Page for Pharmacle Air Solutions",
  // other metadata
};

const SignupPage = () => {
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
        pageName="  HVAC & AMCâ€™S"
        description="he design, installation, commissioning and qualification of
        clean rooms heating, ventilation and air conditioning (HVAC)
        systems is often one of the largest considerations in the
        design of a cleanroom facility."
      />
          <div className=" flex flex-col">
            <div className="w-full px-4">
              <div className="mx-auto rounded  bg-white px-6 shadow-three dark:bg-dark sm:p-[60px]">
                
                <h2
                  className="f font-extrabold
                 text-orange-300"
                >
                  HVAC
                </h2>
                <br></br>
                <h2 className=" font-mono">
                  In a The design of the HVAC system will be based upon the
                  clean room suite that it serves, and will be affected by
                  factors such as the number of rooms served, the layout of the
                  rooms, the equipment within the rooms and, most critically
                  from a qualification perspective, the environmental conditions
                  that the rooms must achieve.
                </h2>
                <br></br>
                <h2
                  className="f font-extrabold
                 text-orange-300"
                >
                  AMC
                </h2>
                <h2 className=" font-mono">
                  We offer tailor-fit maintenance and certification packages
                  that will keep your facility compliant with all current state
                  and federal regulations regardless of your industry. Our
                  extensive ranges of services are designed to be flexible and
                  are able to extend the life-cycle of their facilities.
                </h2>
                <br></br>
                <h2 className=" font-mono">
                  We will carry out regular inspections and propose remedial
                  actions to bring the facilities back up to GMP standards.
                  Renovation or upgradation of facilities is carried out by
                  following GMP standards.
                </h2>
                <br></br>
                <h2
                  className="f font-extrabold
                 text-orange-300"
                >
                  Our approach
                </h2>

                <br></br>

                <ul className="list-disc font-mono">
                  <li>Comprehensive and ordinary AMC’s</li>
                  <br></br>
                  <li>Schedules are prepared as per facility design</li>
                  <br></br>
                  <li>
                    Monitoring the facility and taking corrective measures if
                    necessary.
                  </li>
                  <br></br>
                  <li>Audit support for all regulatory bodies.</li>
                  <br></br>
                  <li>
                    Scheduled maintenance programme as per user requirement.
                  </li>
                  <br></br>
                  <li>
                    All the maintenance activities are followed as per approved
                    SOP’s
                  </li>
                  <br></br>
                  <li>Safety and statutory measures are strictly followed.</li>
                  <br></br>
                  <li>Documentation</li>
                  <br></br>
                  <li>24x7 customer support</li>
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

export default SignupPage;
