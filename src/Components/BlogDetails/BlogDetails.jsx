import React from "react";
import { useParams } from "react-router-dom";
import BlogSingle from "./BlogSingle ";

import WhyUsImage from "../../assets/images/whyUs.svg";
import AboutImage from "../../assets/images/aboutus.svg";
import SecondHeader from "../Header/SecondHeader";

const blogContents = [
  // Include the same content structure you have in your BlogList or modify as necessary
  {
    title: "Security in development",
    mainImage: AboutImage,
    content: [
      {
        heading: "The remarkable thing about startups",
        paragraph: `Throughout my early career as a developer...`,
      },
      {
        image: WhyUsImage,
      },
      {
        heading: "Technology can only really succeed",
        list: [
          "Throughout my early career as a developer",
          "Throughout my early career as a developer erg",
          "Throughout my early career as a developer",
        ],
        paragraph: `Throughout my early career as a developer...`,
      },
    ],
  },
  // Add more blog details as needed
];

const BlogDetails = () => {
  const { id } = useParams();
  const blogDetail = blogContents[id]; // Use the ID from the URL to get the correct blog content

  if (!blogDetail) {
    return <p>Blog not found</p>;
  }

  return (
    <section>
      <SecondHeader />
      <div className="container">
        <BlogSingle
          title={blogDetail.title}
          mainImage={blogDetail.mainImage}
          content={blogDetail.content}
        />
      </div>
    </section>
  );
};

export default BlogDetails;
