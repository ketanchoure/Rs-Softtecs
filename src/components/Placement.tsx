import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";
// import Form from "./form";

interface Student {
  name: string;
  img: string;
  review: string;
  role: string;
  company: string;
  salary: string;
  quote: string;
  skills: Array<string>;
}

const students: Student[] = [
  {
    name: "Pandurang Kadam",
    role: "Software Engineer",
    company: "Insprit Vision",
    salary: "₹4.2 LPA",
    quote: "Placement cell support helped me stand out.",
    skills: ["Java", "Spring Boot", "React"],
    img: "PAndurang.jpeg",
    review: "Placement cell support helped me stand out."
  },
  {
    name: "Ajay Thule",
    role: "Full Stack Developer",
    company: "Infosys",
    salary: "₹5.8 LPA",
    quote: "The training gave me real confidence.",
    skills: ["Node.js", "MongoDB", "Angular"],
    img: "Ajay.jpeg",
    review: "The training gave me real confidence."
  },
  {
    name: "Kajal Patil",
    role: "UI/UX Designer",
    company: "Cognizant",
    salary: "₹3.5 LPA",
    quote: "Design systems helped me crack my interview!",
    skills: ["Figma", "HTML", "CSS"],
    img: "Kajal.jpeg",
    review: "Design systems helped me crack my interview!"
  },
  {
    name: "Hemraj Kamble",
    role: "Backend Developer",
    company: "Capgemini",
    salary: "₹4.8 LPA",
    quote: "DSA practice helped me a lot.",
    skills: ["Python", "Django", "MySQL"],
    img: "Hemraj.jpeg",
    review: "DSA practice helped me a lot."
  },
  {
    name: "Shital Chavan",
    role: "QA Engineer",
    company: "Wipro",
    salary: "₹3.9 LPA",
    quote: "Testing skills gave me clarity.",
    skills: ["Selenium", "Postman", "Java"],
    img: "Shital.jpeg",
    review: "Testing skills gave me clarity."
  },
  {
    name: "Rushikesh Chitale",
    role: "Data Analyst",
    company: "Tech Mahindra",
    salary: "₹5.0 LPA",
    quote: "Excel + Python = Job success!",
    skills: ["Excel", "Power BI", "Python"],
    img: "Rushikesh.jpeg",
    review: "Excel + Python = Job success!"
  },
  {
    name: "Rutuja Khose",
    role: "Cyber Security Analyst",
    company: "Accenture",
    salary: "₹6.5 LPA",
    quote: "Labs and CTFs were game changers.",
    skills: ["Wireshark", "Nmap", "Hacking"],
    img: "Rutuja.jpeg",
    review: "Labs and CTFs were game changers."
  },
  {
    name: "Tejashri Jadhav",
    role: "DevOps Engineer",
    company: "HCL",
    salary: "₹6.2 LPA",
    quote: "CI/CD projects boosted my resume.",
    skills: ["Docker", "AWS", "Jenkins"],
    img: "Tejashri.jpeg",
    review: "CI/CD projects boosted my resume."
  },
  {
    name: "Shubham Doshi",
    role: "Software Engineer",
    company: "TCS",
    salary: "₹4.2 LPA",
    quote: "Placement cell support helped me stand out.",
    skills: ["Java", "Spring Boot", "React"],
    img: "shubham.jpeg",
    review: "Placement cell support helped me stand out."
  },
];

const AlumniCard = ({ alumni }: { alumni: Student }) => (
  <div className="alumni-card" data-aos="fade-down-left">
    <div className="alumni-header">
      <img src={alumni.img} className="alumni-img" alt={alumni.name} />
      <div>
        <h4 className="alumni-name">{alumni.name}</h4>
        <p className="alumni-role">{alumni.role}</p>
        <p className="alumni-company">{alumni.company}</p>
      </div>
    </div>
    <span className="alumni-salary">{alumni.salary}</span>
    <p className="alumni-quote">"{alumni.quote}"</p>
    <div className="alumni-skills">
      {alumni.skills.map((skill, idx) => (
        <span className="skill-tag" key={idx}>{skill}</span>
      ))}
    </div>
  </div>
);

const AlumniSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="alumni-wrapper">
      <h1 className="Success">Success Stories</h1>
      <h2 className="alumni-title">
        Real stories from our alumni who transformed their careers with our placement support
      </h2>

      <div className="alumni-grid">
        {students.map((alumni, index) => (
          <AlumniCard key={index} alumni={alumni} />
        ))}
      </div>

      <div className="alumni-button-wrap">
        <button className="alumni-button">View All Success Stories</button>
      </div>

      {/* <Form /> */}
       {/* <Form/> */}
    </div>
  );
};

export default AlumniSection;
