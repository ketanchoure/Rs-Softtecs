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

  const [showModal, setShowModal] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pt-20 pb-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* LEFT: Hero Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Freshers Are Fighter's</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  They Fight For Their First Job!!!
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">10000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">250+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">98%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <Form />
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+919970981875?"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-105 fixed bottom-6 right-4 sm:bottom-10 sm:right-10 z-50"
      >
        <img
          src="whatsapp (2).png"
          alt="WhatsApp Logo"
          className="w-12 h-12 sm:w-16 sm:h-16 animate-float"
        />
      </a>

      {/* Google Review Floating Button */}
      <button
        onClick={() => setIsReviewOpen(true)}
        className="fixed bottom-6 left-4 sm:bottom-10 sm:left-10 z-50 bg-black shadow-lg rounded-full p-2 sm:p-3 hover:scale-105 transition-transform"
      >
        <img src="Google.webp" alt="Google Reviews" className="w-10 h-10 sm:w-14 sm:h-14" />
      </button>

      {/* Google Review Modal */}
      {isReviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]">
          <div className="bg-white rounded-lg w-[90%] md:w-[70%] lg:w-[50%] h-[80%] relative shadow-lg">
            <button
              onClick={() => setIsReviewOpen(false)}
              className="absolute top-3 right-3 text-black text-2xl font-bold hover:text-red-500"
            >
              ×
            </button>
            <iframe
              src="https://www.google.com/search?sca_esv=85c04323f33f3047&rlz=1C1CHBF_enIN1059IN1059&sxsrf=AE3TifMslY0ORP1a1bg0G_nJLYyVA5svnA:1755061002030&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-JZz8FzjB63pbEXUxwBYGcOd9yhl0w30pzNSkhl7iRZE5w8vkJuuB-eNpLbfY6BcyEKA0j9jn4OH5L4wl9srjR253D6&q=RSSofttecs+Reviews&sa=X&ved=2ahUKEwiV8tbc_4aPAxU5oGMGHb_dKc8Q0bkNegQIHxAD&biw=1536&bih=695&dpr=1.25"
              title="Google Review"
              className="w-full h-full rounded-lg"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroWithForm;
