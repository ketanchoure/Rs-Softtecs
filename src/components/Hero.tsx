import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  city: string;
  course: string;
}

const HeroWithForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    city: "",
    course: "Full Stack Java",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add API or validation here
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Hero Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Freashers Are Fighter's</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  They Fight For Their First Job!!!
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Learn with a Highly Structured, Personalized & Guided World-Class Program.
                To Become the Best Tech Professionals and get Placed at Top Product Based Companies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 shadow-button text-lg px-8 py-6"
              >
                Apply Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Syllabus
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10000+</div>
                <div className="text-sm text-muted-foreground">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="bg-white rounded shadow-md border p-2 max-w-md w-full mx-auto">
            <h2 className="text-2xl font-bold mb-6">Get Your Job Offer Now!</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full border rounded p-2 outline-green-700"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border rounded p-2 outline-green-700"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Mobile Number</label>
                <input
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="w-full border rounded p-2 outline-green-700"
                  required
                />
              </div>
              {/* <div>
                <label className="block font-medium mb-1">City</label>
                <input
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full border rounded p-2 outline-green-700"
                  required
                />
              </div> */}
              <div>
                <label className="block font-medium mb-1">Select Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                >
                  <option value="Full Stack Java">Full Stack Java</option>
                  <option value="Full Stack Python">Full Stack Python</option>
                  <option value="MERN Stack">Data Analyst</option>
                  <option value="Data Science">.Net</option>
                  <option value="Data Science">Salesforce</option>
                  <option value="Data Science">DevOps</option>
                  <option value="Data Science">Software Testing</option>
                  <option value="Data Science">Cloud Computing</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithForm;
