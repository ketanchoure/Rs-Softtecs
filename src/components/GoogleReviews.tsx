// import React, { useState } from "react";
// import { Star } from "lucide-react";

// type Review = {
//   name: string;
//   date?: string;
//   message: string;
//   avatar: string;
// };

// const reviews: Review[] = [
//   {
//     name: "Hemraj Kamble",
//     message:
//       "RS SOFTTECH has been like another family to me. Rahul sir is truly amazing, creating a very friendly environment where honesty and openness are valued. It's easy to reach out to Rahul sir, and you can share any problem with him; he will always be there to help. What is special about RS SOFTTECH is that each and every student is treated equally and receives personal attention.Pooja ma'am is an excellent HR who genuinely cares for the students. Beyond technical knowledge, RS SOFTTECH offers so much more throughout your journey. Akansha ma'am and Jyoti ma'am are also very good at taking care of students in their day-to-day routines and schedules. Your hard work and efforts will always be recognized and awarded.Thank you, RS SOFTTECH, for everything you've done for us.",
//     avatar: "/Hemraj.jpeg",
//   },
//   {
//     name: "Gopal Nemane",
//     message: `It is a great Institute ever... I have learned everything about programming here and got placed in Inspirite Vision. Thank you Rahul Salunke sir for giving me this opportunity. RS Softech is the best institute in Pune for freshers and learners.

// In my perspective, this is one of the best classes in Maharashtra to learn coding — be it C, C++, Core Java, or Advanced Java — which is the core strength of software development.

// Additionally, the environment here is amazing. You get to learn a lot and can even attend other batches if you want to revise things. You become an integral part of this institute both personally and professionally, which is very rare.

// If you are searching for the best institute for training and 100% placement, just go and join RS Softech.`,
//     avatar: "/GopalNemane.GIF",
//   },
//   {
//     name: "Pandurang Kadam",
//     message: `R.S.Softtecs Institute offers an exceptional software training experience, particularly for students from villages or those new to programming, with its unique and easy-to-understand teaching methods.

// Rahul Sir’s warm and supportive relationship with students and alumni fosters a positive, encouraging environment. Pooja Ma'am, as the HR Manager, is instrumental in guiding students toward successful job placements, while Jyoti Ma'am and Akansha Ma'am skillfully manage daily schedules and organize activities that enhance personal growth.

// Alumni interactions and regular Saturday mock interviews prepare students for real-world challenges. The mentorship, comprehensive support, and hands-on practice have been truly transformative.

// Thank you, R.S. Softtecs, for not just providing education but for believing in me and helping me pave the way to a brighter future.`,
//     avatar: "/PAndurang.jpeg",
//   },
// ];

// const GoogleReviewSection: React.FC = () => {
//   const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

//   const toggleExpand = (index: number) => {
//     setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   return (
//     <section className="py-10 px-4 bg-gray-100">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center gap-2 mb-6">
//           <img src="/Google.webp" alt="Google" className="w-8 h-8" />
//           <span className="font-semibold">Rating</span>
//           <span className="text-yellow-500 flex items-center ml-1 font-semibold">
//             4.9{" "}
//             <Star className="w-4 h-4 fill-yellow-400 text-yellow-500 ml-1" />
//           </span>
//           <span className="text-sm text-gray-700 ml-2">
//             Based on 59 Reviews
//           </span>
//         </div>

//         {/* Review Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
//           {reviews.map((review, i) => {
//             const isExpanded = expanded[i];
//             const shouldTruncate = review.message.length > 50;
//             const visibleText = isExpanded
//               ? review.message
//               : review.message.slice(0, 200);

//             return (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl shadow-md px-6 pt-10 pb-5 relative hover:shadow-lg transition"
//               >
//                 {/* Google Logo */}
//                 <img
//                   src="/Google.webp"
//                   alt="Google"
//                   className="w-8 h-8 absolute top-4 left-4"
//                 />

//                 {/* Avatar */}
//                 <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
//                   <img
//                     src={review.avatar}
//                     alt={review.name}
//                     className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
//                   />
//                 </div>

//                 {/* Review Content */}
//                 <div className="mt-10 text-center">
//                   <h4 className="font-semibold">{review.name}</h4>
//                   {review.date && (
//                     <p className="text-sm text-gray-500 mb-1">{review.date}</p>
//                   )}
//                   <div className="flex justify-center mb-2 text-yellow-500">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-4 h-4 fill-yellow-400" />
//                     ))}
//                   </div>
//                   <p className="text-sm text-gray-700">
//                     {visibleText}
//                     {shouldTruncate && !isExpanded && "..."}
//                   </p>
//                   {shouldTruncate && (
//                     <button
//                       onClick={() => toggleExpand(i)}
//                       className="text-blue-500 text-sm mt-1 hover:underline"
//                     >
//                       {isExpanded ? "See less" : "See more"}
//                     </button>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Google Review Links at Bottom */}
//         <div className="mt-12 flex justify-center flex-wrap gap-4">
//           <a
//             href="https://www.google.com/search?q=rs+softech-best+java+classes+in+pune&rlz=1C1CHBF_enIN1059IN1059&oq=rs&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7Mg4IABBFGCcYOxiABBiKBTIICAEQRRgnGDsyFQgCEC4YQxjHARixAxjRAxiABBiKBTIGCAMQRRhAMgwIBBAAGEMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyMDEyajBqN6gCCLACAfEF45tHa0ciK8U&sourceid=chrome&ie=UTF-8#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
//           >
//             View All Google Reviews of RS Softech Branch 1
//           </a>
//           <a
//             href="https://www.google.com/search?q=rs+softech+karve+nagar&rlz=1C1CHBF_enIN1059IN1059&oq=rs&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIICAEQRRgnGDsyEAgCEC4YxwEYsQMY0QMYgAQyCggDEAAYsQMYgAQyCggEEAAYsQMYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyNDk2ajBqN6gCCLACAfEFuiFZl5x_79E&sourceid=chrome&ie=UTF-8#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
//           >
//             View All Google Reviews of RS Softech Branch 2
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default GoogleReviewSection;



import React, { useState } from "react";
import { Star } from "lucide-react";

type Review = {
  name: string;
  date?: string;
  message: string;
  avatar: string;
};

const reviews: Review[] = [
  {
    name: "Hemraj Kamble",
    message:
      "RS SOFTTECH has been like another family to me. Rahul sir is truly amazing, creating a very friendly environment where honesty and openness are valued...",
    avatar: "/Hemraj.jpeg",
  },
  {
    name: "Gopal Nemane",
    message: `It is a great Institute ever... I have learned everything about programming here and got placed in Inspirite Vision. Thank you Rahul Salunke sir...`,
    avatar: "/GopalNemane.GIF",
  },
  {
    name: "Pandurang Kadam",
    message: `R.S.Softtecs Institute offers an exceptional software training experience, particularly for students from villages or those new to programming...`,
    avatar: "/PAndurang.jpeg",
  },
];

const GoogleReviewSection: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-10 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <img src="/Google.webp" alt="Google" className="w-8 h-8" />
          <span className="font-semibold">Rating</span>
          <span className="text-yellow-500 flex items-center ml-1 font-semibold">
            4.9 <Star className="w-4 h-4 fill-yellow-400 text-yellow-500 ml-1" />
          </span>
          <span className="text-sm text-gray-700 ml-2">Based on 59 Reviews</span>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {reviews.map((review, i) => {
            const isExpanded = expanded[i];
            const shouldTruncate = review.message.length > 200;
            const visibleText = isExpanded
              ? review.message
              : review.message.slice(0, 200);

            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md px-6 pt-10 pb-5 relative hover:shadow-lg transition"
              >
                {/* Google Logo */}
                <img
                  src="/Google.webp"
                  alt="Google"
                  className="w-8 h-8 absolute top-4 left-4"
                />

                {/* Avatar */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
                  />
                </div>

                {/* Review Content */}
                <div className="mt-10 text-center">
                  <h4 className="font-semibold">{review.name}</h4>
                  {review.date && (
                    <p className="text-sm text-gray-500 mb-1">{review.date}</p>
                  )}
                  <div className="flex justify-center mb-2 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700">
                    {visibleText}
                    {shouldTruncate && !isExpanded && "..."}
                  </p>
                  {shouldTruncate && (
                    <button
                      onClick={() => toggleExpand(i)}
                      className="text-blue-500 text-sm mt-1 hover:underline"
                    >
                      {isExpanded ? "See less" : "See more"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Google Review Links at Bottom */}
        <div className="mt-12 flex justify-center flex-wrap gap-4">
          <a
            href="https://tinyurl.com/rssfotech-deccan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            View All Google Reviews of RS Softech Branch De
          </a>
          <a
            href="https://tinyurl.com/rssfotech-karvenagar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            View All Google Reviews of RS Softech Branch 2
          </a>
        </div>

        {/* ✅ Elfsight Widget at Bottom */}
        {/* <div className="mt-16">
          <div
            className="elfsight-app-2e20568b-17e2-4995-aac8-36c44e545140"
            data-elfsight-app-lazy
          ></div>
        </div> */}
      </div>
    </section>
  );
};

export default GoogleReviewSection;



{/* <button class="sideway g-review-mob-web" id="modal_view_left" data-toggle="modal" data-target="#get_quote_modal">
    <ul>
        <li><img loading="lazy" data-src="https://www.itvedant.com/images/google-review.svg" alt="" class="mob-review-lg lazyloaded" src="https://www.itvedant.com/images/google-review.svg"></li>
        <li><img loading="lazy" data-src="https://www.itvedant.com/images/google-reviews/g-icon-star.svg" alt="" class="mob-review-sm ls-is-cached lazyloaded" src="https://www.itvedant.com/images/google-reviews/g-icon-star.svg"></li>
        <li><span>Reviews!</span></li>
        <li><img loading="lazy" data-src="https://www.itvedant.com/images/google-reviews/arrow-right-sidebar.svg" alt="" class="arrow-hover lazyloaded" src="https://www.itvedant.com/images/google-reviews/arrow-right-sidebar.svg" style="left: 12px;"></li>
    </ul>
</button>  */}