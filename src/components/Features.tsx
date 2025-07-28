// Features.tsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Calendar,
  Code,
  Award,
  BookOpen,
  Briefcase,
  Target,
  TrendingUp,
} from "lucide-react";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const features = [
    {
      icon: Users,
      title: "Personal Mentorship",
      description:
        "One-on-one guidance from industry experts with 10+ years of experience",
      color: "text-primary",
    },
    {
      icon: Calendar,
      title: "Live Interactive Sessions",
      description:
        "Real-time learning with doubt clearing and hands-on coding practice",
      color: "text-accent",
    },
    {
      icon: Code,
      title: "Industry Relevant Projects",
      description: "Build real-world applications that showcase your skills to employers",
      color: "text-green-500",
    },
    {
      icon: Award,
      title: "Join Top Product Companies",
      description: "Get placed at leading tech companies with our proven placement program",
      color: "text-purple-500",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Updated syllabus covering latest technologies and industry standards",
      color: "text-blue-500",
    },
    {
      icon: Briefcase,
      title: "Interview Preparation",
      description: "Mock interviews, resume building, and soft skills development",
      color: "text-orange-500",
    },
    {
      icon: Target,
      title: "100% Practical Learning",
      description: "Learn by doing with hands-on projects and real-world scenarios",
      color: "text-red-500",
    },
    {
      icon: TrendingUp,
      title: "Career Growth Support",
      description: "Continuous support even after placement for career advancement",
      color: "text-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              RS Softtecs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide everything you need to succeed in your tech career journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature) => (
            <Card
              key={feature.title}
              data-aos="zoom-in"
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-card"
            >
              <CardContent className="p-6 text-center">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-muted rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-white" data-aos="fade-up">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">1000+</div>
                <div className="text-lg opacity-90">Students Trained</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">Placement Rate</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">100+</div>
                <div className="text-lg opacity-90">Hiring Partners</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">10L</div>
                <div className="text-lg opacity-90">Highest Package</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
