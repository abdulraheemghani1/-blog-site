import React from "react";
import "../CssFiles/BlogComponent.css"; // Import the updated CSS file

const BlogComponent = ({ blogs }) => {
  return (
    <div className="blog-container">
      {blogs.map((blog, index) => (
        <div key={index} className="blog-card">
          {/* Image at the top center */}
          <div className="blog-image">
            <img src={blog.image} alt={blog.title} />
          </div>

          {/* Text content below the image */}
          <div className="blog-content">
            <h2 className="blog-title">{blog.title}</h2>
            <div className="blog-description">
              {blog.description.split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <a
              href={blog.url || "#"}
              className="blog-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read more about ${blog.title}`}
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogComponent;





