import React from "react";
import Divider from "../Divider";
import BlogList from "./BlogList";


const Blog = () => {
  return (
    <section className="py-[100px]">
      <div className="absolute block sm:hidden -top-36 sm:-top-20 -right-36 ght sm:-right-20 w-[300px] h-[300px] -z-10 rounded-full blur-[100px] bg-gradient-45 opacity-[0.3]"></div>
      <div className="container">
        <Divider title="Blog" />

       <div className="pt-6">
       <BlogList />
       </div>
      </div>
    </section>
  );
};

export default Blog;
