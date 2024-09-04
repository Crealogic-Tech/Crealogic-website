import React from "react";
import BlogCard from "./BlogCard";
import Uiux from "../../assets/images/uiux.svg";

const blogData = [
  {
    image: Uiux,
    date: "August 16, 2023",
    title: "Crafting a winning content marketing strategy",
  },
  {
    image: Uiux,
    date: "August 16, 2023",
    title: "Navigating the world of influencer marketing",
  },
  {
    image: Uiux,
    date: "August 16, 2023",
    title: "Data-driven decision-making in marketing",
  },
  {
    image: Uiux,
    date: "August 16, 2023",
    title: "Building secure and scalable web applications",
  },
  {
    image: Uiux,
    date: "August 16, 2023",
    title: "Choosing the right technology stack",
  },
  {
    image: Uiux,
    date: "August 16, 2023",
    title: "The future of web development 2023",
  },
];

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
      {blogData.map((blog, index) => (
        <BlogCard
          key={index}
          image={blog.image}
          date={blog.date}
          title={blog.title}
          index={index}
        />
      ))}
    </div>
  );
};

export default BlogList;
