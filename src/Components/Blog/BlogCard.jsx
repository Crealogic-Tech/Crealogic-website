import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ image, date, title, index }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/blog/${index}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer w-full text-decoration-none"
      data-aos-offset="100"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="500"
    >
      <div className="border flex flex-col justify-between h-full border-primaryLight rounded-lg overflow-hidden">
        <div className="w-full h-64">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between  p-6">
          <div className="flex text-primaryMedium items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler mr-2 icons-tabler-outline icon-tabler-calendar-event"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M16 3l0 4" />
              <path d="M8 3l0 4" />
              <path d="M4 11l16 0" />
              <path d="M8 15h2v2h-2z" />
            </svg>
            <span className=" text-sm font-normal">{date}</span>
          </div>
          <h5 className="mt-6 text-secondary text-2xl font-medium text-start">
            {title}
          </h5>
          <div className="mt-6 group text-start">
            <div className="inline-block overflow-hidden">
              <span className="text-primaryMedium text-lg font-semibold">
                Learn More
              </span>
              <div className="h-px bg-primaryMedium transform transition-transform duration-500 group-hover:translate-x-[-70%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
