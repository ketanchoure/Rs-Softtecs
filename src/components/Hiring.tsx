import React from "react";
import "./Hiring.css";

const companyLogos = [
{ name: "TCS", logo: "/logos/TCS.png" },
{ name: "Infosys", logo: "/logos/Infosys.png" },
{ name: "Wipro", logo: "/logos/Wipro.svg" },
{ name: "Capgemini", logo: "/logos/Capgemini.png" },
{ name: "HCL", logo: "/logos/HCL.png" },
{ name: "Tech Mahindra", logo: "/logos/Tech_Mahindra.png" },
{ name: "Accenture", logo: "/logos/Accenture.svg" },
{ name: "Cognizant", logo: "/logos/Cognizant.jpeg" },
{ name: "IBM", logo:"/logos/IBM.png"},
{ name: "Google", logo:"/logos/Google.jpg"},
{ name: "Microsoft", logo:"/logos/Microsoft.png"},
{ name: "Amazon", logo:"/logos/Amazon.png"}

];

const HiringMarquee = () => {
const repeated = [...companyLogos, ...companyLogos];

return (
  <section className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-800 to-black text-white flex flex-col justify-center items-center overflow-hidden px-4 py-16">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Our Hiring Partners</h1>

    <div className="marquee-wrapper">
      <div className="marquee scroll-left">
        {repeated.map((company, index) => (
          <div key={`top-${index}`} className="logo-box">
            <img src={company.logo} alt={company.name} />

          </div>
        ))}
      </div>
    </div>

    <div className="h-8" />

    <div className="marquee-wrapper">
      <div className="marquee scroll-right">
        {repeated.map((company, index) => (
          <div key={`bottom-${index}`} className="logo-box">
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default HiringMarquee;
