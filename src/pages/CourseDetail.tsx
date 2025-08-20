import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail } from "lucide-react";
import { createPortal } from "react-dom";
import coursedata from "../Json-Data/course.json";
import { useParams } from "react-router-dom";

const Coursedetails = () => {
    const [showModal, setShowModal] = useState(false);
    const { title } = useParams<{ title: string }>();

    const course = coursedata.find((data) => data.title === title);

    if (!course) return <p>Course not found</p>;

    const { displayName, description, overview, topics, tools, careers, contact } = course;

    return (
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-8">
            <motion.div
                className="max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-bold mb-4">{displayName}</h1>
                <p className="text-lg mb-6">{description}</p>

                {/* Overview */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
                    <p className="text-base leading-relaxed">{overview}</p>
                </div>

                {/* Topics */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {topics.map((topic, index) => (
                            <li key={index} className="text-base flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                                {topic}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tools */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Tools & Technologies</h2>
                    <ul className="flex flex-wrap gap-3 text-sm text-white">
                        {tools.map((tool, index) => (
                            <li key={index} className="bg-blue-600 px-3 py-1 rounded-full">
                                {tool}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Careers */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Career Opportunities</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {careers.map((career, index) => (
                            <li key={index} className="text-base">{career}</li>
                        ))}
                    </ul>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => alert("Enrollment logic here")} // or open a form
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                    >
                        Enroll Now
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowModal(true)}
                        className="bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-6 py-2 rounded-lg transition flex items-center gap-2"
                    >
                        <Mail className="w-4 h-4" />
                        Contact Instructor
                    </motion.button>
                </div>
            </motion.div>

            {/* Modal */}
            {showModal &&
                createPortal(
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
                            <h2 className="text-xl font-semibold mb-4 text-center">Enquiry Form</h2>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert("Enquiry submitted!");
                                    setShowModal(false);
                                }}
                                className="space-y-4"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                />
                                <textarea
                                    name="message"
                                    rows={3}
                                    placeholder="Your message (optional)"
                                    className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                                ></textarea>
                                <div className="flex justify-between">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>,
                    document.body
                )}
        </section>
    );
};

export default Coursedetails;
