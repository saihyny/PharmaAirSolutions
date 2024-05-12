import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Conceptual Design And Project Management",
  description:
    "The Conceptual Design is a very important part of the project, it provides a general overview of the main features and a perspective that allows an analysis of strengths and weaknesses, identifying critical points, forecast of future growth and development of alternative development.",
  // other metadata
};

const ConspetualDesign = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-16 md:pb-20 lg:pb-28 lg:pt-[100px]">
        <div className="container">

          <div className="flex w-[100%] h-[300px]  ">
            <Image
              src="/images/services/services.png"
              alt="service img"
              width={1500}
              height={10}
            />
            
          </div>
          <Breadcrumb
        pageName="Conceptual Design And Project Management"
        description="The Conceptual Design is a very important part of the project,
        it provides a general overview of the main features and a
        perspective that allows an analysis of strengths and
        weaknesses, identifying critical points, forecast of future
        growth and development of alternative development."
      />

          <div className=" flex flex-col">
            <div className="w-full px-4">
              <div className="mx-auto rounded  bg-white px-6 shadow-three dark:bg-dark sm:p-[60px]">
                
                <h2 className="f font-extrabold
                 text-orange-300">
                Conceptual design
                </h2>
               
                <br></br>
                <h2 className=" font-mono">In a Conceptual design, technical solutions, equipment and necessary services are decided and selected. A preliminary estimation may also be established of the general overall schedule and costs associated with the project.
</h2>
                <br></br>
                <h2 className=" font-mono">
                Both national and international normative and regulative aspects are an essential part to consider from the beginning, the regulatory laws and guidelines that the project must fulfill must be defined, both at the beginning and in a foreseeable future.
                </h2>
                <br></br>
                <h2 className=" font-mono">
                The User Requirements are another key element at this stage. They must synthesize and condense the conditions and abilities that the project must confirm. Therefore, the correct selection and draft of the URS is fundamental for the future development of the project.
                </h2>
                <br></br>
                <h2 className="f font-extrabold
                 text-orange-300">
                Project management
                </h2>
                <h2 className=" font-mono">Project management is the art of organizing the tasks, resources and people needed for a successful cleanroom implementation. A critical component to the cleanroom implementation process, project management creates the roadmap for the project connecting all the various project activities together ensuring that the overall objectives of schedule, budget and performance are achieved. Our Project Management process optimizes the allocation of project resources to execute each project effectively and efficiently.</h2>
                <br></br>
                <h2 className=" font-extrabold
                 text-orange-300">
                Project Management Process
                </h2>
              <ul className="list-disc font-mono">
                <li>Project Initiation: Scope of Work, Contract Documents, Preliminary Schedule</li>
                <br></br>
                <li>Project Planning: Final Drawings, Project Component Submittals, Working Schedule, Client Approval, Submit plans to local building authority, Procure long lead time components</li>
                <br></br>
                <li>Project Execution: Material Staging, Room Layout, Subcontractors, Trade Installation, Building Department Inspections and sign-off</li>
                <br></br>
                <li>Controls and Validation: Personnel Safety Training, Personnel Clean/Build Training, Materials Inspection and Designated Release Location, On-site Documentation (Daily Work Log, Daily Cleaning Report, Materials Shipment Inspection Log, Building Department Inspections)</li>
                <br></br>
                <li>Closeout and Evaluation: As built drawings, Operation and Maintenance Manuals, Final Inspections and local authority sign-off, Certificate of Occupancy</li>
              </ul>
              <br></br>
              <h2 className="f font-extrabold
                 text-orange-300">
                Our Project Management Process:
                </h2>
                <ul className="list-disc font-mono">
                  <li>Provides an integrated framework for each cleanroom implementation</li>
                  <br></br>
                  <li>Ensures a timely and cost-effective cleanroom implementation</li>
                  <br></br>
                  <li>Assures all quality standards are maintained throughout the implementation</li>
                </ul>
                <br></br>
                <h2 className=" font-extrabold
                 text-orange-300">
               Effective project management is key to the success of any cleanroom design
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConspetualDesign;
