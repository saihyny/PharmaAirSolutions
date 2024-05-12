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
              src="/images/products/passbox.jpg"
              alt="service img"
              width={1500}
              height={300}
            />
          </div>
          <Breadcrumb
            pageName="CleanRoom Equipments "
            description="Pass Boxes--Air Showers-- Air Flow Unit--Bio-Safety Cabinets--Dispensing / Sampling Booths"
          />
          <div className=" flex flex-col">
            <div className="w-full px-4">
              <div className="mx-auto rounded  bg-white  shadow-three dark:bg-dark sm:p-[60px]">
                <br></br>
                <h2 className=" font-mono">
                Pharmaceutical manufacturing requires a high level of cleanliness and sterile environments for production. Pharmaceutical cleanrooms provide a controlled environment that protects pharmaceutical products from contamination and pollutants such as dust, airborne microbes and aerosol particles.
                </h2>
                <br></br>
               
               
              </div>
              
            </div>
          </div>
          <div className="flex justify-around  items-center flex-wrap ">
          <Image
             
              src="/images/products/passbox1.jpg"
              alt="service img"
              width={400}
              height={400}
            />
          <Breadcrumb
            pageName="Pass Boxes "
            description="Controlling the entry of particulate contamination into cleanrooms and other controlled environments is paramount in order to maintain the integrity of products and processes. Pass box is an effective solution to transfer material into the controlled environment without actual personnel movement. They may also be used to protect the external environment from cross contamination."
          />
          </div>
          <div className="flex justify-around  items-center flex-wrap ">
          <Image
             
              src="/images/products/airshower.jpg"
              alt="service img"
              width={400}
              height={400}
            />
          <Breadcrumb
            pageName="Air Showers "
            description="Our clean room air shower systems are factory fabricated enclosures that play vital role in removing surface particles from personnel & material prior to entering and exiting from a controlled environmental area.

            The filtration system comprises of high velocity HEPA-filtered air jets with velocities of 25-30m/s. Contaminated air is drawn through the base within the unit, filtered and recirculated. Each system is equipped with high quality air filtration systems, motors, controls, air blowers, interlocking doors, adequate lighting fittings, electrical panel and micro-processor based controls etc.."
          />
          </div>
          <div className="flex justify-around  items-center flex-wrap ">
          <Image
             
              src="/images/products/airflow.jpg"
              alt="service img"
              width={400}
              height={400}
            />
          <Breadcrumb
            pageName="Air Flow Unit "
            description="Airflow Units, Constructional wise, Horizontal, Vertical, Operational wise, LAF, RLAF

            Many microbiological and cell culture laboratories require highly sterile working environment for performing research activities, Laminar / unidirectional air flow cabinets are the best solution for them. These cabinets are designed to keep contents of the work zone safe from particulates that are sensitive to cross contamination.
            
            A laminar air flow cabinet maintains a unidirectional flow of HEPA-filtered air over the work area and protects the working environment from dust and other air-born particulates. The work area is continuously supplied with positive pressure by providing ISO Class 5 particle free environment for handling critical process. The flow can be horizontal (parallel to the work surface) or vertical (from top to the work surface)."
          />
          </div>
          <div className="flex justify-around  items-center flex-wrap ">
          <Image
             
              src="/images/products/biocabin.jpg"
              alt="service img"
              width={400}
              height={400}
            />
          <Breadcrumb
            pageName="Bio-Safety Cabinets "
            description="Biosafety cabinets are designed to provide safe work environment and protection in experiments where recirculation of filtered air is prohibited, most likely due to the presence of chemical fumes emitted during the process.

            The downward laminar flow of HEPA-filtered air provides product protection by minimizing the chance of cross-contamination along the work surface of the cabinet. They are suitable for microbiological work assigned to biological safety levels 1, 2, 3.
            
            Our Biosafety cabinets follow standards and regulations as per NSF49 to meet the required environment."
          />
          </div>
          <div className="flex justify-around  items-center flex-wrap ">
          <Image
             
              src="/images/products/booths.jpg"
              alt="service img"
              width={400}
              height={400}
            />
          <Breadcrumb
            pageName="Dispensing / Sampling Booths "
            description="Dispensing booth provides a safe, HEPA filtered environment for the dispensing of hazardous drug powders. They are required to detect contamination as even a little amount of contamination may damage the product.

            Dispensing booth work on the principle of recirculation of air and ensure that the cloud formed by the material dispensed is absorbed in the natural pattern and is arrested by pre filters & fine filters. Air is pulled away from user through rear-wall pre-filters, fine filters and recirculated through ceiling-mounted high efficiency particulate air (HEPA) filter. The air is supplied back to the work zone with the help of HEPA filters. Surrounding environment is protected by maintaining negative pressure environment inside the booth."
          />
          </div>
        </div>
      </section>
    </>
  );
};

export default CleanRoomEqe;
