import React from "react";
import { UpperCircleElement } from "../../assets";
import BlogCard from "./BlogCard";

const blogs = [
  { date: "Monday, 21 May", title: "What should women eat during pragnancy?" },
  { date: "Monday, 21 May", title: "What should women eat during pragnancy?" },
  { date: "Monday, 21 May", title: "What should women eat during pragnancy?" },
  { date: "Monday, 21 May", title: "What should women eat during pragnancy?" },
];

const Blogs = () => {
  return (
    <div>
      <div className="md:container md:px-10 px-3 mt-10 md:mx-auto">
        <h2 className='text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800 mb-10'>What to read next</h2>

        <div className="relative">
        <div className="absolute -left-24 global__rotate-animation -bottom-24 hidden lg:block">
          <UpperCircleElement height={200} width={200} />
        </div>
        <div className="absolute -right-10 global__rotate-animation -top-14 hidden lg:block">
          <UpperCircleElement height={130} width={130} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 relative z-2">
          {/* Card Starting */}
          {blogs.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Blogs;
