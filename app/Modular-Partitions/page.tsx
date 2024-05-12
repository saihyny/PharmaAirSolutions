import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
  // other metadata
};

const Modular = () => {
  return (
    <>
      <section className="relative  overflow-hidden pb-16 pt-16 md:pb-20 lg:pb-28 lg:pt-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-1">
            <Image
              className="object-cover"
              src="/images/products/mp.jpg"
              alt="service img"
              width={1500}
              height={300}
            />
          </div>
          <Breadcrumb
            pageName="Modular Partitions"
            description="Pharma Air Solutions offers complete range of economical & innovative solutions for manufacturing complete range of cleanroom products. We deliver modular clean room partitions which are suitable for industrial demands complying with the requirements of standard GMP guidelines."
          />
          <div className=" flex flex-col">
            <div className="w-full px-4">
              <div className="mx-auto rounded  bg-white px-6 shadow-three dark:bg-dark sm:p-[60px]">
                <br></br>
                <h2 className=" font-mono">
                  Modular cleanrooms are designed to suit the specific
                  requirement of the customers and allow them to expand or
                  modify as per their business requirements. The modular
                  cleanroom components are impact, chemical and water resistant,
                  non-shedding, non-out-gassing, have excellent fire ratings,
                  can be sanitized and are essentially maintenance free.
                </h2>
                <br></br>
                <h2
                  className="f font-extrabold
                 text-orange-300"
                >
                  Advantages
                </h2>

                <br></br>

                <ul className="list-disc font-mono">
                  <li> Flexibility and adaptability.</li>
                  <br></br>
                  <li>Easy to add-on or relocate.</li>
                  <br></br>
                  <li>Predictable performance.</li>
                  <br></br>
                  <li>Regulatory compliance</li>
                  <br></br>
                  <li>Consistent quality.</li>
                  <br></br>
                  <li>Completely flush panel system.</li>
                  <br></br>
                  <li>Fully integrated aseptic envelope.</li>
                  <br></br>
                  <li>Easy process integration.</li>
                  <br></br>
                  <li>Mild dew, moisture and fungal resistant.</li>
                  <br></br>
                </ul>
                <br></br>
              </div>
              <table className=" w-full table-auto border-separate border border-slate-500" >
                <thead>
                  <tr>
                    <th className='border border-slate-600'>Type of components</th>
                    <th className='border border-slate-600'>MOC</th>
                    <th className='border border-slate-600'>Infill</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-slate-600'>Wall panel / Inbuilt raiser</td>
                    <td className='border border-slate-600'>Galvanized steel</td>
                    <td className='border border-slate-600'>Polyurethane foam (PUF)</td>
                  </tr>
                  <tr>
                    <td>Witchy Woman</td>
                    <td>Stainless steel</td>
                    <td>Craft paper</td>
                  </tr>
                  <tr>
                    <td className='border border-slate-600'>Flush doors / Emergency doors</td>
                    <td className='border border-slate-600'>Epoxy polyester powder coated</td>
                    <td className='border border-slate-600'>Aluminum honey comb</td>
                  </tr>
                  <tr>
                    <td className='border border-slate-600'>View panels / Windows</td>
                    <td className='border border-slate-600'>Epoxy polyester pre-coated</td>
                    <td className='border border-slate-600'>Glass wool</td>
                  </tr>
                  <tr>
                    <td className='border border-slate-600'>Return air risers</td>
                    <td className='border border-slate-600'>Glass reinforced plastics (GRP)</td>
                    <td className='border border-slate-600'></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modular;
