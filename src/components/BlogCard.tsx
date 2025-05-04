import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  image: string;
  date: string
  description: string;
  readMoreURL: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, image, date, description, readMoreURL }) => {
  return (
    <div className="blog-card">
      <img src={image} />
      <h3 className="blog-card-title">
        <Link to={readMoreURL}>{title}</Link>
      </h3>
      <p>{description}</p>
      <p><br></br>{date}</p>
      <Link to={readMoreURL}>Read More</Link>
    </div>
  );
}

export default BlogCard;
