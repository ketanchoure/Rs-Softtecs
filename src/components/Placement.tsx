import React from "react";
import "./styles.css";
import Form from "./form";
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
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "TCS",
    salary: "₹4.2 LPA",
    quote: "Placement cell support helped me stand out.",
    skills: ["Java", "Spring Boot", "React"],
    img: "https://images.pexels.com/photos/3775535/pexels-photo-3775535.jpeg",
    review: "Placement cell support helped me stand out."
  },
  {
    name: "Rahul Patel",
    role: "Full Stack Developer",
    company: "Infosys",
    salary: "₹5.8 LPA",
    quote: "The training gave me real confidence.",
    skills: ["Node.js", "MongoDB", "Angular"],
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    review: "The training gave me real confidence."
  },
  {
    name: "Sneha Verma",
    role: "UI/UX Designer",
    company: "Cognizant",
    salary: "₹3.5 LPA",
    quote: "Design systems helped me crack my interview!",
    skills: ["Figma", "HTML", "CSS"],
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    review: "Design systems helped me crack my interview!"
  },
  {
    name: "Aniket Rao",
    role: "Backend Developer",
    company: "Capgemini",
    salary: "₹4.8 LPA",
    quote: "DSA practice helped me a lot.",
    skills: ["Python", "Django", "MySQL"],
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    review: "DSA practice helped me a lot."
  },
  {
    name: "Kavita Nair",
    role: "QA Engineer",
    company: "Wipro",
    salary: "₹3.9 LPA",
    quote: "Testing skills gave me clarity.",
    skills: ["Selenium", "Postman", "Java"],
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    review: "Testing skills gave me clarity."
  },
  {
    name: "Neha Kulkarni",
    role: "Data Analyst",
    company: "Tech Mahindra",
    salary: "₹5.0 LPA",
    quote: "Excel + Python = Job success!",
    skills: ["Excel", "Power BI", "Python"],
    img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
    review: "Excel + Python = Job success!"
  },
  {
    name: "Siddharth Singh",
    role: "Cyber Security Analyst",
    company: "Accenture",
    salary: "₹6.5 LPA",
    quote: "Labs and CTFs were game changers.",
    skills: ["Wireshark", "Nmap", "Hacking"],
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    review: "Labs and CTFs were game changers."
  },
  {
    name: "Rohan Mehta",
    role: "DevOps Engineer",
    company: "HCL",
    salary: "₹6.2 LPA",
    quote: "CI/CD projects boosted my resume.",
    skills: ["Docker", "AWS", "Jenkins"],
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    review: "CI/CD projects boosted my resume."
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "TCS",
    salary: "₹4.2 LPA",
    quote: "Placement cell support helped me stand out.",
    skills: ["Java", "Spring Boot", "React"],
    img: "https://images.pexels.com/photos/3775535/pexels-photo-3775535.jpeg",
    review: "Placement cell support helped me stand out."
  },
];

const AlumniCard = ({ alumni }) => (
  <div className="alumni-card">
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
  return (
    <div className="alumni-wrapper">
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
       {/* <Form/> */}
    </div>
  );
};

export default AlumniSection;