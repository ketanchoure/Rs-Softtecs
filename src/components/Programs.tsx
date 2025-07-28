import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaClock, FaDownload } from 'react-icons/fa';

// Course logo images
const courseLogos = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Data Science": "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
  Salesforce: "Salesforce-Logo.png",
  CloudComputing: "cloudcomputing.jpg",
  SoftwareTesting: "Softwaretesting.webp",
  NET: ".NET.webp",
  DataAnalytics: "DataAnalytics.avif"
};

// Technology/tool logos
const toolLogos = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Core Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Advance Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
  Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Tableau: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
  "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "Advance Excel": "AdvanceExcel.webp",
  Excel: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013_logo.svg",
  "Probability and Statistics": "https://cdn-icons-png.flaticon.com/512/992/992703.png",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  Tesseract: "https://upload.wikimedia.org/wikipedia/commons/6/69/Tesseract_OCR_logo.png",
  "Salesforce Admin": "Salesforce-Logo.png",
  "Salesforce Development": "Salesforce-Logo.png",
  IAM: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
  EC2: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
  RDS: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
  VPC: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
  "AWS Code Commit": "https://raw.githubusercontent.com/aws/aws-icons-for-plantuml/v14.0/Large/Developer-Tools/AWS-CodeCommit.png",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  GitLab: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  Bitbucket: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
  Jenkins: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  Kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Terraform: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  Ansible: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
  "Manual Testing": "https://cdn-icons-png.flaticon.com/512/4149/4149684.png",
  "Automation Testing": "https://cdn-icons-png.flaticon.com/512/4149/4149686.png",
  Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  DevOps: "microsoft-azure-devops-logo.jpeg",
  AWS: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  "C#": "C#.jpg",
  MVC: "MVC.png",
};

const courses = [
  {
    id: 1,
    title: 'Java Full Stack Development',
    courseLogo: courseLogos.Java,
    description: 'Develop robust applications with Java, Spring Boot, and modern front-end tools.',
    tools: ['C', 'C++', 'SQL', 'Core Java', 'Advance Java', 'React'],
    tags: ['UNLIMITED INTERVIEWS', 'INTEGRATED INTERNSHIP'],
  },
  {
    id: 2,
    title: 'Python Full Stack Development',
    courseLogo: courseLogos.Python,
    description: 'Build dynamic web applications using Python, Django, and front-end technologies.',
    tools: ['React', 'JavaScript', 'Angular', 'Python', 'Django', 'SQL', 'MySQL', 'MongoDB'],
    tags: ['UNLIMITED INTERVIEWS', 'INTEGRATED INTERNSHIP'],
  },
  {
    id: 3,
    title: 'Cloud Computing',
    courseLogo: courseLogos.CloudComputing,
    tools: ['Linux', 'AWS', 'DevOps'],
    tags: ['UNLIMITED INTERVIEWS', 'INTEGRATED INTERNSHIP'],
  },
  {
    id: 4,
    title: 'Salesforce',
    courseLogo: courseLogos.Salesforce,
    tools: ['Salesforce Admin', 'Salesforce Development'],
    tags: ['UNLIMITED INTERVIEWS', 'INTEGRATED INTERNSHIP'],
  },
  {
    id: 5,
    title: 'Software Testing',
    courseLogo: courseLogos.SoftwareTesting,
    tools: ['Manual Testing', 'Automation Testing', 'HTML', 'CSS', 'JavaScript', 'Core Java', 'SQL'],
    tags: ['UNLIMITED INTERVIEWS', 'INTEGRATED INTERNSHIP'],
  },
  {
    id: 6,
    title: 'Data Analyst',
    courseLogo: courseLogos.DataAnalytics,
    tools: ['Python', 'SQL', 'Power BI', 'Tableau', 'Probability and Statistics', 'Advance Excel'],
    tags: ['UNLIMITED INTERVIEWS', 'INTEGRATED INTERNSHIP'],
  },
];

const CourseCard = ({ course }) => (
  <div
    data-aos="zoom-in"
    className="w-full max-w-sm h-[75vh] overflow-y-auto bg-white rounded-xl shadow-md border p-4 flex flex-col justify-between relative text-xs"
  >
    <div className="flex flex-col items-center mt-2">
      {course.courseLogo && (
        <img src={course.courseLogo} alt="Course Logo" className="w-18 h-14 mb-1" />
      )}
      <h2 className="text-base font-semibold text-center">{course.title}</h2>
    </div>

    <div className="flex justify-center flex-wrap gap-3 mt-1">
      {course.tools.map((tool, idx) => (
        <div key={idx} className="flex flex-col items-center w-14">
          {toolLogos[tool] && (
            <img src={toolLogos[tool]} alt={tool} className="w-7 h-7 object-contain" />
          )}
          <span className="text-[10px] text-center mt-1 text-gray-700">{tool}</span>
        </div>
      ))}
    </div>

    <div className="mt-4 flex flex-wrap gap-1 text-[11px]">
      {course.tags.map((tag, idx) => (
        <span
          key={idx}
          className={`px-2 py-0.5 rounded ${tag === 'UNLIMITED INTERVIEWS'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-lime-100 text-green-800'
            }`}
        >
          {tag}
        </span>
      ))}
    </div>

    <p className="text-[12px] text-gray-600 mt-1">{course.description}</p>

    <div className="flex items-center text-[12px] mt-3 text-gray-600">
      <FaClock className="mr-1" /> 8-10 Months Classroom & Online Training
    </div>
    <div className="text-[11px] text-gray-500">Weekday and Weekend Batches</div>

    <div className="mt-3 flex gap-2">
      <button className="flex items-center gap-1 border px-2 py-1 rounded text-[11px]">
        <FaDownload /> Brochure
      </button>
      <button className="bg-lime-500 hover:bg-lime-600 text-white px-3 py-1 rounded text-[11px]">
        Know More
      </button>
    </div>
  </div>
);

const CourseCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map(course => (
          <CourseCard key={course.id + course.title} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
