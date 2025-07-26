import React from "react";

interface Student {
  name: string;
  image: string;
  review: string;
}

const students: Student[] = [
  {
    name: "Shubham Doshi",
    image: "shubham.jpeg",
    review:
      "RSsofttecs helped me master Java and Spring Boot with hands-on projects. Loved the real-world approach!",
  },
  {
    name: "Pandurang Kadam",
    image: "PAndurang.jpeg",
    review:
      "Amazing teaching style. The support from the mentors made it easy to crack interviews!",
  },
  {
    name: "Hemraj Kamble",
    image: "Hemraj.jpeg",
    review:
      "The courses were well-structured and helped me land a job in just 3 months. Thank you RSsofttecs!",
  },
  {
    name: "Rutuja Khose",
    image: "Rutuja.jpeg",
    review:
      "Practical learning, mock interviews, and placement assistance made RSsofttecs the best choice.",
  },
   {
    name: "Rushikesh Chitale",
    image: "Rushikesh.jpeg",
    review:
      "RSsofttecs helped me master Java and Spring Boot with hands-on projects. Loved the real-world approach!",
  },
  {
    name: "Kajal Patil",
    image: "Kajal.jpeg",
    review:
      "Amazing teaching style. The support from the mentors made it easy to crack interviews!",
  },
  {
    name: "Shital Chavan",
    image: "Shital.jpeg",
    review:
      "The courses were well-structured and helped me land a job in just 3 months. Thank you RSsofttecs!",
  },
  {
    name: "Tejashri Jadhav",
    image: "Tejashri.jpeg",
    review:
      "Practical learning, mock interviews, and placement assistance made RSsofttecs the best choice.",
  },
  {
    name: "Ajay Thule",
    image: "Ajay.jpeg",
    review:
      "Practical learning, mock interviews, and placement assistance made RSsofttecs the best choice.",
  },
];

const Placement: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
        Our Placed Students & Their Reviews
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-center"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{student.name}</h2>
            <p className="text-gray-700 text-sm">{student.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placement;
