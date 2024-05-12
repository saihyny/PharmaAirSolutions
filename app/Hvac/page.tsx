import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Hvac = () => {
  return (
    <>
      <section className="relative  overflow-hidden pb-16 pt-16 md:pb-20 lg:pb-28 lg:pt-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-1">
            <Image
              className="object-cover"
              src="/images/products/hvac.jpg"
              alt="service img"
              width={1500}
              height={300}
            />
          </div>
          <Breadcrumb
            pageName="Laboratory Furniture"
            description="Clean room HVAC--Air Handling Units(AHU)"
          />
          <div className=" flex flex-col">
            <div className="w-full px-4">
              <div className="mx-auto rounded  bg-white  shadow-three dark:bg-dark sm:p-[60px]">
                <br></br>
                <h2 className=" font-mono">
                HVAC is an acronym that stands for Heating, Ventilation, and Air Conditioning. The term HVAC is used to describe a complete home comfort system that can be used to heat and cool your home, as well as provide improved indoor air quality.
                </h2>
              </div>
            </div>
            <div className="flex justify-around  items-center flex-wrap ">
          <Image
             
              src="/images/products/cleanroom.jpg"
              alt="service img"
              width={400}
              height={400}
            />
          <Breadcrumb
            pageName="Clean Room HVAC"
            description="A cleanroom is a room in which the concentration of airborne particles is kept with in the specified limit and it is constructed in a manner to minimize the introduction, generation, and retention of particles in the room and other relevant parameters, example temperature, humidity and pressure are controlled as necessary.

            The integrity of the cleanroom environment is created by the pressure differential   compared with adjacent areas through heating, ventilation and air-conditioning system.
            
            Supplying airflow in sufficient volume to support the cleanliness rating of the room.
            
            Introducing air in a manner to prevent stagnant areas where particles could accumulate.
            
            Filtering the outside and re-circulated air across high efficiency particulate air (HEPA) filters.
            
            Conditioning the air to meet the cleanroom temperature and humidity requirements.
            
            Ensuring enough conditioned makeup air to maintain the specified positive pressurization."
          />
          </div>
          </div>
          <div className="flex justify-around  items-center flex-wrap ">
          <Image
             
              src="/images/products/ahu.jpg"
              alt="service img"
              width={400}
              height={400}
            />
          <Breadcrumb
            pageName="Air Handling Units (AHU) "
            description="Casing :Rigid frame work construction made of extruded hollow aluminum anodized profile with nylon fiber glass corner joints and reinforced internally. Optional thermal bridge frame work for fresh air application and outdoor installation ensures elimination of condensation phenomenon on frame work."
          />
          </div>
          <div className="mx-auto rounded  bg-white px-6 shadow-three dark:bg-dark sm:p-[60px]">
                
                <h2
                  className="f font-extrabold
                 text-orange-300"
                >
                  Panels
                </h2>
                <br></br>
                <h2 className=" font-mono">
                The panel is made of “Sandwich” construction of 25 mm or 46 mm, injected with polyurethane / Glass wool insulation having density of 40 Kg/m³ and thermal conductivity of 0.022 W/m K. This provides excellent thermal insulation and sound attenuation properties. The outer casing panels are constructed with galvanized zinc pure epoxy pre-coating and powder-coating. Inner panels are constructed of hot-dip galvanized zinc coated steel sheets. These panels are removable and are fixed to the frame with self-tapping screws. Labyrinth type gasket sealing between frame and panel eliminates possibility of any air leakage. The entire unit is supported on full perimeter base frame constructed from heavy duty galvanized steel sheet.
                </h2>
                <br></br>
                <h2
                  className="f font-extrabold
                 text-orange-300"
                >
                 Fans
                </h2>
                <h2 className=" font-mono">
                Fans are Kruger / Nicotra / Equivalent make, AMCA certified, energy efficient. All impellars are statically, dynamically and trim balanced to ISO 1940 and AMCA 204/3  G2.5 standard. The operating limit of each fan type is designed to meet the requirement of class I, II and III limit as defined in AMCA standard 99-2408-69.
                </h2>
                <br></br>
                <h2
                  className="f font-extrabold
                 text-orange-300"
                >
                Various types of fans used in the air handling unit are:
                </h2>
                
                

                <br></br>

                <ul className="list-disc font-mono">
                  <li>DIDW, centrifugal fan with forward / backward curve wheel</li>
                  <br></br>
                  <li>SISW, centrifugal fan with backward curve wheel.</li>
                  <br></br>
                  <li>
                  DIDW, centrifugal fan with backward curve aerofoil wheel.
                  </li>
                  <br></br>
                  <li>Plenum (Plug) fan with backward curve wheel..</li>
                  <br></br>
                </ul>
                <h2
                  className="f font-extrabold
                 text-orange-300"
                >
                Advantages
                </h2>
                
                

                <br></br>

                <ul className="list-disc font-mono">
                  <li>Ultra low leak construction.</li>
                  <br></br>
                  <li>Excellent condensate management</li>
                  <br></br>
                  <li>
                  High performance..
                  </li>
                  <br></br>
                  <li>Environmental friendly materials.</li>
                  <br></br>
                  <li>Suitable for high performance application.</li>
                  <br></br>
                  <li>Environmental friendly materials.</li>
                  <br></br>
                  <li>Optimized coils.</li>
                  <br></br>
                  <li>Design for routine cleaning.</li>
                  <br></br>
                  <li>Sturdy unit construction.</li>
                  <br></br>
                  <li>High grade aluminum frame.</li>
                  <br></br>
                  <li>Polyurethane / Glass wool foam panels.</li>
                  <br></br>
                </ul>
                <h2 className="f font-extrabold
                 text-orange-300" >Fire retardant, flexible connectors are provided between the fan discharge and main casing.</h2>
                <br></br>
              </div>
        </div>
      </section>
    </>
  );
};

export default Hvac;
