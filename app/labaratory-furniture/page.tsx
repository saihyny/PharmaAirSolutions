import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

const CleanRoomEqe = () => {
  return (
    <>
      <section className="relative  overflow-hidden pb-16 pt-16 md:pb-20 lg:pb-28 lg:pt-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-1">
            <Image
              className="object-cover"
              src="/images/products/laboratory.jpg"
              alt="service img"
              width={1500}
              height={300}
            />
          </div>
          <Breadcrumb
            pageName="Laboratory Furniture"
            description="Fume Hoods--Modular Lab"
          />
          <div className=" flex flex-col">
            <div className="w-full px-4">
              <div className="mx-auto rounded  bg-white  shadow-three dark:bg-dark sm:p-[60px]">
                <br></br>
                <h2 className=" font-mono">
                Laboratory furniture is furniture that has been specially designed so that it can be built into any type of laboratory. The furniture in a laboratory makes the work possible and easier. That is why the right furniture is of great importance in your laboratory. In this way, you can optimize your workspace in the laboratory and make it safe.
                </h2>
              </div>
            </div>
            <div className="flex justify-around  items-center flex-wrap ">
          <Image
             
              src="/images/products/fume.jpg"
              alt="service img"
              width={400}
              height={400}
            />
          <Breadcrumb
            pageName="Fume Hoods "
            description="Laboratory fume hoods is a type of local exhaust ventilation system. Their primary function is to exhaust chemical fumes, vapors, gases, dust, mist and aerosol. Fume hoods also serve as physical barriers between reactions and the laboratory, offering a measure of protection against inhalation exposure, chemical spills, run-away reactions and fires.

            A typical fume hood is a cabinet with a moveable front sash (window) made out of safety glass. They allow laboratory personnel to work with potentially harmful or fatal materials at close range, safely and conveniently"
          />
          </div>
          </div>
          <div className="flex justify-around  items-center flex-wrap ">
          <Image
             
              src="/images/products/lab.jpg"
              alt="service img"
              width={400}
              height={400}
            />
          <Breadcrumb
            pageName="Modular Lab Table "
            description="Every laboratory and lab personnel has specific needs and hence personalized detailing has to be incorporated in lab furniture to make laboratory an ideal friendly work place and a zone of comfort. The users have choice amongst strong, sturdy powder coated steel, rust free long lasting wooden and application oriented sober Stainless Steel furniture."
          />
          </div>
        </div>
      </section>
    </>
  );
};

export default CleanRoomEqe;
