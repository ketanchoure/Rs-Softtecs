import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Form from "./form.tsx";

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
                <div className="text-3xl font-bold text-primary">250+</div>
                <div className="text-sm text-muted-foreground">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          {/* <div className="bg-white rounded shadow-md border p-2 max-w-md w-full mx-auto">
            <h2 className="text-2xl font-bold mb-6">Get Your Job Offer Now!</h2> */}
              <Form/>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroWithForm;
