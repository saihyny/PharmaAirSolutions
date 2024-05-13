import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Pharmacle Air Solutions",
  description: "This is Contact Page for Pharmacle Air Solutions",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="At Pharmacle Air Solutions, your satisfaction is our ultimate goal. We are committed to providing exceptional customer service and building long-term partnerships. Let us know how we can assist you."
      />
      <div className="flex flex-wrap  md:mx-[65px] sm:mx-[100px] justify-center border-slate-400 border-2  rounded-lg">
       <div className="border-slate-400 border-2 p-2 w-[400px] h-[200px] m-1 rounded-3xl">
       <h1 className="font-bold text-center hover:underline text-cyan-600 ">HYDERABAD OFFICE</h1>
       <br></br>
       <h3 className="text-center font-serif">Plot No. 116/A, Savithri Nilayam, Sriven Enclave, Near Chittaramma Temple, Gajularamaram, Quthbullapur, Hyderabad - 500 055.</h3>
       </div>
       <div className="border-slate-400 border-2 p-2 w-[400px] h-[200px] m-1 rounded-3xl">
       <h1 className="font-bold text-center hover:underline text-cyan-600 ">EMAIL US</h1>
       <br></br>
       <h3 className="text-center font-serif">
        pharmaclearsolutions@gmial.com
       </h3>
       </div>
       <div className="border-slate-400 border-2 p-2 w-[400px] h-[200px] m-1 rounded-3xl">
       <h1 className="font-bold text-center hover:underline text-cyan-600 ">CALL US</h1>
       <br></br>
       <h3 className="text-center font-serif">
        63003262728
       </h3>
       </div>
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
