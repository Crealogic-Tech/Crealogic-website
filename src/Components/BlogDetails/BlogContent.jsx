import React from "react";

const BlogContent = ({ content }) => {
  return (
    <div className="container">
      <div className="blog-details-box max-w-2xl">
        <div className="w-richtext">
          {content.map((section, index) => (
            <div key={index}>
              {section.heading && (
                <h5 className="text-gray-800 text-3xl font-semibold mb-6">
                  {section.heading}
                </h5>
              )}
              {section.paragraph && (
                <p className="text-gray-800 mb-4 text-lg">
                  {section.paragraph}
                </p>
              )}
              {section.image && (
                <figure className="w-richtext-align-fullwidth w-richtext-figure-type-image mt-6">
                  <img src={section.image} alt="" className="w-full" />
                </figure>
              )}
              {section.list && (
                <ol className="list-decimal pl-6 text-lg font-medium text-gray-800 mt-10 mb-10">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
