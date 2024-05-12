import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Welcome to Pharma Air Solutions"
            paragraph="Established in 2007, Pharma Air Solutions is a global organization specialized in innovative cleanroom solutions for controlled environments. Over the years we have diversified from designing and construction of cleanrooms into a complete turnkey solution provider for your ever changing needs in cleanroom industry. With extensive crossmarket industry knowledge, we deliver high-performing modular cleanroom environments that enhance your business results."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
